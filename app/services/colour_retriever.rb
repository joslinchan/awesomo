class ColourRetriever
  include HTTParty
  base_uri "colourlovers.com/api"

  def get_palettes
    self.class.get("/palettes/?keywords=fish")
  end

  def parse_palettes
    get_palettes.parsed_response
  end


end
