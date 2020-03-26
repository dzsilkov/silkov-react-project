import React from 'react';
import DashboardBackgroundPart from '../DashboardBackgroundPart/DashboardBackgroundPart';


const DashboardBackgroundParts = ({parts, book:{coverImageUrl}}) => {
  const imageParts = [...Array(parts)].map((part, index) => {
    return (
      <DashboardBackgroundPart img={coverImageUrl} key={index}/>
    );
  });

  return (
    <div className="slideParts">
      {imageParts}
    </div>
  );
};

export default DashboardBackgroundParts;
