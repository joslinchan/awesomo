class ColourApiParser

  def self.parse_colours(search_params)
    colours = ColourLoversApiRetriever.get_colours(search_params)
    colourCollection = colours.try(:[], "colors").try(:[], "color")
  end
  
  def self.parse_palettes(search_params)
    palettes = ColourLoversApiRetriever.get_palettes(search_params)
    paletteCollection = palettes.try(:[],"palettes").try(:[], "palette")
  end

  def self.parse_patterns(search_params)
    patterns = ColourLoversApiRetriever.get_patterns(search_params)
    patternCollection = patterns.try(:[],"patterns").try(:[], "pattern")
  end 

end
