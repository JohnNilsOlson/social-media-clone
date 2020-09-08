import React from "react";
import HomeButton from "./HomeButton";
import NotificationsButton from "./NotificationsButton";
import MessagesButton from "./MessagesButton";
import SearchBar from "./SearchBar";
import TweetButton from "./TweetButton";

function Header(){
  return (
    <React.Fragment>
      <HomeButton />
      <NotificationsButton />
      <MessagesButton />
      <SearchBar />
      <TweetButton />
    </React.Fragment>
  );
}

export default Header;