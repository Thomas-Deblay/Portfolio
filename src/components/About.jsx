import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#1af8ae]">
              A propos
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              A la quete de Simplicite dans le complexe: <br /> 'Finding Signal
              from noise'
            </p>
          </div>
          <div>
            <p>
              Je suis passionne par construire des projects qui ameliore la vie
              des gens qui m'entoure. Parcours entrepreneurial et desire
              permanant de creer des solutions aux probleme reels du monde grace
              a la Tech, j'ai une vision long terme de ce que j'entreprend. Rome
              ne s'est pas construit en un jour. Passion et devouement vous mene
              toujours la ou voulez arriver. Et vous, que creeriez vous si vous
              aviez un developpeur entre vos mains ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
