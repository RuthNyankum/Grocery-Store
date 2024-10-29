import React from 'react';
import Navbar from '../../components/navbar';
import Food from './components/food';
import Staples from './components/staples';
// import Banner1 from './components/banner1';
import Beauty from './components/beauty';
import Beverages from './components/beverages';
import Babycare from './components/babycare';
import HomeCare from './components/forHome';
import HHCare from './components/health';
import Bakery from './components/bakery';

const Home = () => {
  return (
    <div className="m-6">
      <div>
        {/* <Navbar /> */}
      </div>
      {/* <Hero /> */}
      <Food />
      <Staples />
      {/* <Banner1 /> */}
      <Beauty />
      <Beverages />
      {/* <Banner2 /> */}
      <Babycare />
      <HomeCare />
      <HHCare />
      <Bakery />
    </div>
  );
};

export default Home;

