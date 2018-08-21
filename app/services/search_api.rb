class SearchApi

  def self.parse_palettes(search_params)
    palettes = ColourRetriever.new.get_palettes(search_params)
    paletteCollection = palettes.try(:[],"palettes").try(:[], "palette")
  end
 
=begin   
    def search_single_palette(id)
    palette = ColourRetriever.new.get_palette(id)
    parsedPalette = palette["palettes"]["palette"]
  end  
=end

  def self.parse_colours(search_params)
    colours = ColourRetriever.new.get_colours(search_params)
    colourCollection = colours.try(:[], "colors").try(:[], "color")
  end

=begin 
  def search_single_colour(id)
    colour = ColourRetriever.new.get_colour(id)
    parsedColour = colour["colors"]["color"]
  end
=end

  def self.parse_patterns(search_params)
    patterns = ColourRetriever.new.get_patterns(search_params)
    patternCollection = patterns.try(:[],"patterns").try(:[], "pattern")
  end 

=begin 
  def search_single_pattern(id)
    pattern = ColourRetriever.new.get_pattern(id)
    parsedPattern = pattern["patterns"]["pattern"]
  end 
=end

end
