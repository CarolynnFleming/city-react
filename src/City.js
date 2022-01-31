import React from 'react';

export default function City(props) {
  return (
    <div className="city">
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
      <img src={`skyline-${props.skylineId}.jpeg`}/>
      <img src={`waterfront-${props.waterfrontId}.jpeg`}/>
      <img src={`castle-${props.castleId}.jpeg`}/>
      {/* use these 3 ids in img tags load approriate images that live in the public directory */}
    </div>
  );
}
