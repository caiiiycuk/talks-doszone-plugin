module Jsdo
  class Engine < ::Rails::Engine
    engine_name "Jsdo".freeze
    isolate_namespace Jsdo

    config.after_initialize do
      Discourse::Application.routes.append do
        mount ::Jsdo::Engine, at: "/jsdos"
      end
    end
  end
end
