import React from "react";

const masterTweetList = [
  {
    name: "@realDonaldTrump",
    text: "AAAAAAAAA",
    timestamp: "3:12 AM"
  },
  {
    name: "@rando123",
    text: "I love eggs",
    timestamp: "9:22 PM"
  }
]

function Feed() {
  return (
    <React.Fragment>
      {masterTweetList.map((tweet, index) =>
        <Tweet
          name={tweet.name}
          text={tweet.text}
          timestamp={tweet.timestamp}
          key={index} />
      )}
    </React.Fragment>
  );
}

export default Feed;