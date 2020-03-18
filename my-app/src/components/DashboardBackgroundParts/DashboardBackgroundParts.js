import React from 'react';
import DashboardBackgroundPart from '../DashboardBackgroundPart/DashboardBackgroundPart';


const DashboardBackgroundParts = ({parts, img}) => {

  const imageParts = [...Array(parts)].map((part, index) => {
    return (
      <DashboardBackgroundPart img={img} key={index}/>
    );
  });

  return (
    <div className="slideParts">
      {imageParts}
    </div>
  );
};

export default DashboardBackgroundParts;
