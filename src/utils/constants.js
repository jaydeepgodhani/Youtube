const API2_KEY = "your_key";

export const POPULAR_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&regionCode=in&key=" + API2_KEY;

export const SEARCH_SUGGETION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";