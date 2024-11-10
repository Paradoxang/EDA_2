import React from 'react';
import TeamMember from '../../components/aboutuscomponent/TeamMember';
import { SocialLinks, SocialLinks1, SocialLinks2 } from '../../components/aboutuscomponent/SocialLinks';

const AboutUs = () => {
  return (
    <section className="bg-teamBgColor dark:bg-gray-900 h-full">
      
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          
          <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center z-0 filter blur-sm" ></div>
              <div className="relative z-10">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold font-titleDisplay text-textColor1 dark:text-white">El Team</h2>
                <p className="font-semibold text-textColor1  shadow-sm sm:text-xl dark:text-gray-400">
                    
                    The Fan Choice es nuestra aproximación a lo que sería una página de críticas de películas y series inspirada en las típicas webs de cartelera<br />
                    
                    Presentamos los responsables de la creación de esta página:
                </p>
                <div className="mx-auto max-w-screen-sm lg:mb-16">
        
                <div className="grid gap-8 lg:gap-16 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 justify-center items-center">
                  <TeamMember
                    name="Jesus Cristo de Nazareth"
                    role="Inspiración - Acompañamiento Psicologico"
                    imgSrc="https://img.freepik.com/fotos-premium/ilustracion-senor-jesucristo_863013-100781.jpg "
                    socialLinks={SocialLinks}
                  />
                  <TeamMember
                    name="Santiago Miranda"
                    role="Desarrollador y Diseño"
                    imgSrc="https://i.pinimg.com/736x/e2/bd/de/e2bddebe069fa0e23e4fa3e8f4c71399.jpg"
                    socialLinks={SocialLinks1}
                  />
                  <TeamMember
                    name="ChatGPT"
                    role="Desarrollador y Consejero"
                    imgSrc="https://tse4.mm.bing.net/th?id=OIG1.ArdXZkvNPTrNYyJbsemL&pid=ImgGn"
                    socialLinks={SocialLinks2}
                  />
                </div>
              </div>
              </div>
          </div>
        </div>
       
        
      </div>
    </section>
  );
};

export default AboutUs;
