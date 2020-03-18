import React from 'react';

const DashboardBackgroundPart = ({img}) => {

  return (
    <div className="slidePart">
      <div className="slidePartInner"
           style={{backgroundImage: `url(${img})`}}>
        <div className="slidePartInnerBefore">
        </div>
      </div>
    </div>
  );
};


export default DashboardBackgroundPart;
