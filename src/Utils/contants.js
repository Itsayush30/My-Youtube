const GOOGLE_API_KEY = "AIzaSyDfK8ZOQGGcWIFkDkFmxFxf7f0eVzLrtzY";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="