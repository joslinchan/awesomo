class SearchApi
  attr_accessor :search_params
 
  def initialize
    #@search_params = params[:query]
  end

  def search(search_params)
    @palettes = ColourRetriever.new.get_palettes(search_params)
    @paletteCollection = @palettes["palettes"]["palette"]
  end 



end
