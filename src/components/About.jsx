import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#1af8ae]">
              À propos
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              À la quête de la Simplicité dans la complexité : <br />{' '}
              <a className="text-[#1af8ae]">"Finding Signal from noise"</a>
            </p>
          </div>
          <div>
            <p>
              Je suis passionné par les projets qui améliorent le quotidien des
              personnes qui nous entourent. De mon expérience entrepreneuriale à
              ma passion pour le développement web, j'ai une vision tournée vers
              la Simplicité, extraite de cette complexité que cela demande pour
              créer de vraies solutions viables. Et vous, que simplifieriez-vous
              si vous aviez un développeur entre vos mains ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
