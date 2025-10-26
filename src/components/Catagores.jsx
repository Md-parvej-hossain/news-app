import { use } from 'react';
import { NavLink } from 'react-router';

const data = fetch('categories.json').then(res => res.json());

const Catagores = () => {
  const cataData = use(data);
  return (
    <div className="">
      <p className="font-semibold text-center">All Caterogy</p>
      <div className="grid cols-1 mt-5  gap-3">
        {cataData.map(catagore => (
          <NavLink
            to={`/category/${catagore.id}`}
            className={'btn bg-base-100 border-0 hover:bg-base-200'}
            key={catagore.id}
          >
            {catagore.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Catagores;
