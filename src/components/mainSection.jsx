import { Post } from "./post";
import { Posting } from "./posting";
import CodingImg from "../assets/coding.avif"
import Info from "../assets/info.png"
import Edit from "../assets/editer.png"





export function MainSection(){
    return(
        <div className="flex gap-x-5 bg-white ">
        <div className="pt-6 px-16 flex flex-col gap-y-5 grow " >
        <section className="flex flex-col grow items-start justify-end
         bg-slate-600 h-44 rounded-md p-5 relative" style={{ backgroundImage: `url(${CodingImg})`, height: '200px' }}>
            <h2 className="text-white text-4xl ">Formation React</h2>
      <img src={Info} alt="google-classroom" className="w-8 h-8 tems-start justify-self-start absolute bottom-2 right-2" />
      <img src={Edit} alt="google-classroom" className="w-8 h-8 tems-start justify-self-start absolute top-2 right-2" />


        </section> 
        <Posting/>
        <Post userName="Fedi Abdouli" date="Dec 1,2023" text="bonsoir voici le code ecrit la derniere seance"link="lien du cours"/>
        <Post userName="Fedi Abdouli" date="Dec 4,2023" text="bonjour voici votre tache pour la seance prochaine"link="lien de la tache"/>
        <Post userName="Fedi Abdouli" date="Dec 8,2023" text="bonsoir voici le code ecrit la derniere seance" link="lien du code" />
       

        </div>
        </div>
    )
}