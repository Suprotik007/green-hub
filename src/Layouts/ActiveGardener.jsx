

import React, { useEffect, useState } from 'react';
import GardenerCard from '../Components/GardenerCard';

const ActiveGardener = () => {
  const [activeGardeners, setActiveGardeners] = useState([]);

  useEffect(() => {
    fetch('/gardeners.json')
      .then(res => res.json())
      .then(data => {
        const active = data.gardeners.filter(gardener => gardener.activity === "yes");
        setActiveGardeners(active);
      });
  }, []);

  return (
    <div>
      <h1>Active Gardeners</h1>
      {activeGardeners.map(gardener => (
        <GardenerCard key={gardener.id} singleGardener={gardener} />
      ))}
    </div>
  );
};

export default ActiveGardener;
