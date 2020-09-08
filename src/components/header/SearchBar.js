import React from "react";
import Form from "react-bootstrap/Form"

function SearchBar(){
  const styles = {
    width: 200
  }
  return (
    <Form style={styles}>
      <Form.Control type="text" placeholder="Search"></Form.Control>
    </Form>
  );
}

export default SearchBar;