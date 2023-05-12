import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import './home.style.scss'
import AOS from 'aos';
import "aos/dist/aos.css";
import CountUp from 'react-countup';

const Home = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='home-wrapper'>
      <CountUp 
      start={0}
      end={2000}
      duration={2.75}
      />
      <div data-aos="fade-right">
        <h1>Landing Page</h1>
      </div>
      <div data-aos="fade-left">
        <img src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="Coffee" />
      </div>

      <div data-aos="fade-right">
        <h1>Landing Page</h1>
      </div>
      <div data-aos="fade-left">
        <img src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="Coffee" />
      </div>

      <div data-aos="fade-right">
        <h1>Landing Page</h1>
      </div>
      <div data-aos="fade-left">
        <img src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="Coffee" />
      </div>

      <div data-aos="fade-right">
        <h1>Landing Page</h1>
      </div>
      <div data-aos="fade-left">
        <img src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="Coffee" />
      </div>

      <div data-aos="fade-right">
        <h1>Landing Page</h1>
        <CountUp 
      start={0}
      end={2000}
      duration={2.75}
      redraw={true}
      /> 
      {/* counter still counts from the page load */}

      </div>
      <div data-aos="fade-left">
        <img src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="Coffee" />
      </div>
   
     

      <Outlet />
    </div>
  )
}

export default Home