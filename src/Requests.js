const APIKEY = "0740b6089e67c61586fce459c20d451d";

const requests = {
    fetchTrending: 'trending/all/week?api_key='+APIKEY+'&language=en-US',
    fetchNetflixOriginals: 'discover/tv/?api_key='+APIKEY+'&network=213',
}

export default requests