import React from "react";
import { Button } from 'react-bootstrap';
function SaveBtn(props) {
  return (
        <Button
        style={{float: "right"}}
        variant='dark'
        size='sm'
        type='submit'
        onClick={props.saveVideo}
        >
          Save Video
        </Button>
   
  );
}

export default SaveBtn;

