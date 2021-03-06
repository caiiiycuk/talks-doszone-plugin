# frozen_string_literal: true

# name: doszone
# about: plugin for talks.dos.zone
# version: 0.1
# authors: caiiiycuk
# url: https://github.com/caiiiycuk/talks-doszone-plugin

enabled_site_setting :doszone_enabled

PLUGIN_NAME ||= 'doszone'

after_initialize do
  load File.expand_path('../lib/application_helper_edits.rb', __FILE__)
end
