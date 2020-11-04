module Jsdo
  class JsdoController < ::ApplicationController
    requires_plugin Jsdo

    before_action :ensure_logged_in

    def index
    end
  end
end
