class ColourApiRetriever
  include HTTParty
  base_uri "colourlovers.com/api"

  def get_palettes(search_term)
    self.class.get("/palettes/?keywords=#{search_term}")
  end 
  
  def get_palette(id)
    self.class.get("/palette/#{id}")
  end  

  def get_colours(search_term)
    self.class.get("/colors/?keywords=#{search_term}")
  end
  
  def get_colour(id)
    self.class.get("/color/#{id}")
  end

  def get_patterns(search_term)
    self.class.get("/patterns/?keywords=#{search_term}")
  end

  def get_pattern(id)
    self.class.get("/pattern/#{id}")
  end

end

=begin   
  def self.get_palettes
    self.get("/palettes/?keywords=fish")
  end 
=end
