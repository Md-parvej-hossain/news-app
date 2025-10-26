import { Suspense } from 'react';
import Catagores from './Catagores';

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        }
      >
        <Catagores></Catagores>
      </Suspense>
    </div>
  );
};

export default LeftAside;
