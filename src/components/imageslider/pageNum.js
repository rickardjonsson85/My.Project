import React from "react";
const pageNum = ({ property }) => {
  const { id, content, divtitle, divcontent } = property;

  return (
    <section id={`${id}`}>
      <div className="slidercenter">
        <img className="slidercenterimage" src={content} />
        <br />
        <h1>{divtitle}</h1>
        <p1>{divcontent}</p1>
      </div>
    </section>
  );
};

export default pageNum;
