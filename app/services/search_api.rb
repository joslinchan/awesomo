class SearchApi

  def search_palettes(search_params)
    @palettes = ColourRetriever.new.get_palettes(search_params)
    @paletteCollection = @palettes["palettes"]["palette"]
  end

  def search_single_palette(id)
    palette = ColourRetriever.new.get_palette(id)
    parsedPalette = palette["palettes"]["palette"]
  end

  def search_colours(search_params)
    @colours = ColourRetriever.new.get_colours(search_params)
    @colourCollection = @colours["colors"]["color"]
  end

  def search_patterns(search_params)
    @patterns = ColourRetriever.new.get_patterns(search_params)
    @patternCollection = @patterns["patterns"]["pattern"]
  end 



end
