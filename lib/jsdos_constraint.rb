class JsdoConstraint
  def matches?(request)
    SiteSetting.jsdos_enabled
  end
end
