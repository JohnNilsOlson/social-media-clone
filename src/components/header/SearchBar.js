import React from "react";
import Form from "react-bootstrap/Form"

function SearchBar(){
  return (
    <Form>
      <Form.Control type="text" placeholder="Search"></Form.Control>
    </Form>
  );
}

export default SearchBar;