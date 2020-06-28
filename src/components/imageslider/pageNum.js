import React from "react";
const pageNum = ({ property }) => {
  const { id, content, isbackgrund, divtitle, divcontent } = property;

  if (isbackgrund == true) {
    return (
      <section id={`${id}`}>
        <div
          className="sliderbackgroundimage"
          style={{
            backgroundImage: `url(${content})`
          }}
        ></div>
        <div>
          <h1>{divtitle}</h1>
          <p>{divcontent}</p>
        </div>
      </section>
    );
  } else {
    return (
      <section id={`${id}`}>
        <div>
          <h1>{content}</h1>
          <h1>{divtitle}</h1>
          <p>{divcontent}</p>
        </div>
      </section>
    );
  }
};

export default pageNum;
