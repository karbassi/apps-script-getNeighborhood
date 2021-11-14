const hereAPIKey = '<YOUR_HERE_API_KEY>';

function getNeighborhood(query) {
  query = query.trim();

  if (!query || !query.length) {
    throw new Error('<query> cannot be empty');
  }

  const encodedAddress = encodeURIComponent(query);
  const URL = `https://geocode.search.hereapi.com/v1/geocode?apiKey=${hereAPIKey}&q=${encodedAddress}`;
  const results = UrlFetchApp.fetch(URL);
  const data = JSON.parse(results);
  return data['items'][0]['address']['district'];
}
