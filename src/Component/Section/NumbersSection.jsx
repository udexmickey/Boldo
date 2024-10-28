// NumbersSection.js
import React from "react";

export default function NumbersSection() {
  const numbersArray = [
    { value: "120m", title: "Cool feature title" },
    { value: "10,000", title: "Cool feature title" },
    { value: "240", title: "Cool feature title" },
  ];
  return (
    <div>
      <div className="numbers__head">Our numbers</div>
      <div className="numbers__body">
        <div className="numbers__content">
          Handshake infographic mass market crowdfunding iteration.
        </div>
        <div className="numbers__counts">
          {numbersArray.map((count, index) => (
            <div key={index} className={`numbers__counts__${index + 1}`}>
              <div className="counts__value">{count.value}</div>
              <div className="counts__title">{count.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
