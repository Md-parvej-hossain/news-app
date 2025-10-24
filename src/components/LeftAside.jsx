import { Suspense } from 'react';
import Catagores from './Catagores';

const LeftAside = () => {
  return (
    <div>
      
      <Suspense fallback={<p>Loading...</p>}>
        <Catagores></Catagores>
      </Suspense>
    </div>
  );
};

export default LeftAside;
