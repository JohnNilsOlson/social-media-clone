import React from "react";
import FollowersLink from "./FollowersLink";
import FollowingLink from "./FollowingLink";
import ProfilePic from "./ProfilePic";
import TweetsLink from "./TweetsLink";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function ProfileBox(){
  const styles = {
    width: 300,
    height: 300,
    border: 2
  }

  return (
    <Container style={styles}>
      <React.Fragment>
        <Row>
          <ProfilePic />
        </Row>
        <Row>
          <FollowersLink />
          <FollowingLink />
          <TweetsLink />
        </Row>
      </React.Fragment>
    </Container>
  );
}

export default ProfileBox;