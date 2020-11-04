# frozen_string_literal: true

# name: jsdos
# about: Plugin to run dos games inside discource
# version: 0.1
# authors: caiiiycuk
# url: https://github.com/caiiiycuk

register_asset 'stylesheets/common/jsdos.scss'
register_asset 'stylesheets/desktop/jsdos.scss', :desktop
register_asset 'stylesheets/mobile/jsdos.scss', :mobile

enabled_site_setting :jsdos_enabled

PLUGIN_NAME ||= 'Jsdo'

load File.expand_path('lib/jsdos/engine.rb', __dir__)

after_initialize do
  # https://github.com/discourse/discourse/blob/master/lib/plugin/instance.rb
end
