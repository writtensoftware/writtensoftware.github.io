---
layout: post
title:  "My pattern for app-wide configuration in Ruby"
date:   2013-07-07
categories: posts
---
This is a brief post that I thought would be relevant to many Ruby developers since it concerns what I think is the most straightforward and Ruby-ish pattern for storing app-wide configuration info. Even though this pattern is pretty simple, it took me a surprisingly long to devise and standardize on across my apps (mostly because there's a million trivial "good enough" ways to stash you're global configuration options). Note: this pattern is really for pure Ruby projects and/or gems. In you're Rails apps you're likely best off stashing your config variables in Rails.application.configuration.

    module SomeApp
      class Configuration

        def self.method_missing(*args)
          config.send *args
        end    
      
        private
      
        def self.config
          @@config ||= OpenStruct.new
        end
      end
    end

That's it. What we've done is create a "Configuration" class that delegates all method calls to a hidden static OpenStruct member. You can now cleanly set and read your global config flags like so:

    SomeApp::Configuration.api_key = "some value"

    SomeApp::Configuration.api_key
    # => "some value"

Hope that's useful. If you've got a pattern you like please feel free to share.