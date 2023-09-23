
export const GOOGLE_API_KEY = "AIzaSyDfK8ZOQGGcWIFkDkFmxFxf7f0eVzLrtzY";

export const OFFSET_LIVE_CHAT = 25; //here because it can be different for diffeent devise

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=" +
  GOOGLE_API_KEY +
  "&videoId=";


//Generated this function from chatgpt
export function formatNumber(number) {
  if (number >= 1e9) {
    // Convert to billions (B)
    return (number / 1e9).toFixed(1) + "B";
  } else if (number >= 1e6) {
    // Convert to millions (M)
    return (number / 1e6).toFixed(1) + "M";
  } else if (number >= 1e3) {
    // Convert to thousands (K)
    return (number / 1e3).toFixed(1) + "K";
  } else {
    // Leave the number as is
    return number?.toString();
  }
}

// Utility function to calculate time ago(we can also use library for this but library can be heavy than a function)
export function calculateTimeAgo(publishedAt) {
  const publishedDate = new Date(publishedAt);
  const currentDate = new Date();
  const timeDifference = currentDate - publishedDate;

  if (timeDifference < 60000) {
    return "just now";
  } else if (timeDifference < 3600000) {
    const minutesAgo = Math.floor(timeDifference / 60000);
    return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < 86400000) {
    const hoursAgo = Math.floor(timeDifference / 3600000);
    return `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
  } else {
    const daysAgo = Math.floor(timeDifference / 86400000);
    return `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;
  }
}

const formatDescription = (descriptionText) => {
  if (!descriptionText || typeof descriptionText !== "string") {
    return [];
  }

  const urlRegex = /(http[s]?:\/\/[^\s]+)/g;
  const hashtagRegex = /#(\w+)/g;

  const lines = descriptionText.split("\n");
  const formattedLines = lines.map((line, index) => {
    const words = line.split(" ");
    const formattedWords = words.map((word, wordIndex) => {
      if (urlRegex.test(word)) {
        return (
          <span key={wordIndex} className="text-blue-500">
            <a href={word} target="_blank">
              {word}
            </a>
          </span>
        );
      } else if (hashtagRegex.test(word)) {
        return (
          <span key={wordIndex} className="text-blue-600">
            {word}
          </span>
        );
      }
      return <span key={wordIndex}>{word}</span>;
    });

    return <p key={index}>{formattedWords}</p>;
  });

  return formattedLines;
};
