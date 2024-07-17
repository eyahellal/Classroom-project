import { Post } from "./post";
export default function Posts() {
  return (
    <div className="w-full flex-col gap-4">
      <Post
        userName="Fedi Abdouli"
        date="Dec 1,2023"
        text="bonsoir voici le code ecrit la derniere seance"
        link="lien du cours"
      />
      <Post
        userName="Fedi Abdouli"
        date="Dec 4,2023"
        text="bonjour voici votre tache pour la seance prochaine"
        link="lien de la tache"
      />
      <Post
        userName="Fedi Abdouli"
        date="Dec 8,2023"
        text="bonsoir voici le code ecrit la derniere seance"
        link="lien du code"
      />
    </div>
  );
}
