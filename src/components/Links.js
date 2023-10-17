import React from "react";

function Links(props) {
  return (
    <div>
        <h3>Links</h3>
        <ul>
            <a href={props.github}>{props.github}</a>
        </ul>
        <ul>
            <a href={props.github}>{props.linkedin}</a>
        </ul>
    </div>
  );
}

export default Links;