class ColourRetriever
  include HTTParty
  base_uri "colourlovers.com/api"

  def get_palettes
    self.class.get("/palettes/?keywords=fish")
  end

  def parse_palettes
    get_palettes.parsed_response
  end

  def get_colours
    self.class.get("/colors/?keywords=fish")
  end

  def parse_colours
    get_colours.parsed_response
  end

  def get_patterns
    self.class.get("/patterns/?keywords=fish")
  end

  def parse_patterns
    get_patterns.parsed_response
  end

end
