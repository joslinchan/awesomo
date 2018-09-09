class ColourApiRetriever
  include HTTParty
  base_uri "https://www.colourlovers.com/api"

  def self.get_palettes(search_term)
    self.get("/palettes/?keywords=#{search_term}")
  end 

  def self.get_colours(search_term)
    self.get("/colors/?keywords=#{search_term}")
  end

  def self.get_patterns(search_term)
    self.get("/patterns/?keywords=#{search_term}")
  end

end

=begin   
  def self.get_palettes
    self.get("/palettes/?keywords=fish")
  end 
=end
