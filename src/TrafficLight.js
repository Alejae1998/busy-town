import React from 'react';

export default function TrafficLight({ color }) {
  return (
    // this component takes in a prop called color. It is either 'red', 'yellow' or 'green'.
    <div className="traffic-light">
      {}
      {/* in each of these divs, set it up so that if the color matches, add the css class 'on' to the classNames */}
      {/* for example, the css classes for the div below should be `red circle on`, if props.color is 'red' */}
      <div className={`red circle ${color === 'red' ? 'on' : ''}`}></div>
      {/* the css classes for the div below should be `yellow circle on`, if color.color is 'yellow' */}
      <div className={`yellow circle ${color === 'yellow' ? 'on' : ''}`}></div>
      {/*  the css classes for the div below should be `green circle on`, if color.color is 'green' */}
      <div className={`green circle ${color === 'green' ? 'on' : ''}`}></div>
    </div>
  );
}
