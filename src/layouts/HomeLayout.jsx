import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navber from '../components/Navber';
import LeftAside from '../components/LeftAside';
import RightAsid from '../components/RightAsid';

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto">
          <Navber></Navber>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12  gap-4">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>

        <section className="col-span-6">
          <p className='font-semibold'>Dragon News Home</p>
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAsid></RightAsid>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
