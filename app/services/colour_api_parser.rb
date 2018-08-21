class ColourApiParser

  def self.parse_palettes(search_params)
    palettes = ColourApiRetriever.new.get_palettes(search_params)
    paletteCollection = palettes.try(:[],"palettes").try(:[], "palette")
  end

  def self.parse_colours(search_params)
    colours = ColourApiRetriever.new.get_colours(search_params)
    colourCollection = colours.try(:[], "colors").try(:[], "color")
  end

  def self.parse_patterns(search_params)
    patterns = ColourApiRetriever.new.get_patterns(search_params)
    patternCollection = patterns.try(:[],"patterns").try(:[], "pattern")
  end 

end
