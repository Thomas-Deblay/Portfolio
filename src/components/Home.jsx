import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#1af8ae]">Hello, moi c'est</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Thomas DEBLAY
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Developpeur ReactJs
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Je suis un developpeur full stack specialise dans la creation de
          project ReactJs. En ce moment, je construit un project integrant de
          l'intelligence Artificielle au service l'experience utilisateur.
          (Comme sur Netflix haha)
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#1af8ae] hover:border-[#1af8ae]">
            <Link to="work" smooth={true} duration={500}>
              Voir mes Projects
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;