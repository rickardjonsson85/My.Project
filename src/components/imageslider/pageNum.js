import React from "react";
const pageNum = ({ property }) => {
  const { id, content, type } = property;

  if (type == "other") {
    return (
      <section id={`${id}`}>
        <div>
          <h1>{content}</h1>
        </div>
      </section>
    );
  } else {
    return (
      <div id={`{id}`}>
        <img src={content} />
      </div>
    );
  }
};

export default pageNum;
