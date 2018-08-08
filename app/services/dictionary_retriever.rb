class DictionaryRetriever
  include HTTParty
  base_uri "https://od-api.oxforddictionaries.com:443/api/v1"

  def headers
    app_id = Http::Headers.new("#{Rails.application.credentials.oxford_application_id}")
    app_key = Http::Headers.new("#{Rails.application.credentials.oxford_application_key}")
    accept = "application/json"
  end

  def get_data
    self.class.get("/entries/en/fish")
  end

end
