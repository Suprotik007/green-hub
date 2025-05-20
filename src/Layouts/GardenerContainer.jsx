
import React, { Suspense, lazy } from 'react';
import ActiveGardener from './ActiveGardener';
import GardenerCard from '../Components/GardenerCard';

const ActiveGardeners = lazy(() => import('./ActiveGardener'));
const GardenerContainer = () => {
    return (
        <div>
              <div className=' '>
      <Suspense fallback={<span className='loading loading-dots loading-xl'></span>}>
        <GardenerCard />
      </Suspense>
    </div>
        </div>
    );
};

export default GardenerContainer;