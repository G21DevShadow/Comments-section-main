import { Message } from "./iconComponent/iconMessage";
import { Award } from "./iconComponent/iconAward";
import { Share } from "./iconComponent/iconShare";

function Post() {
  return (
    <section className="relative w-full max-w-[700px] max-h-fit py-2 px-5 rounded-2xl hover:bg-White duration-200">
      <div className="flex items-center gap-3 mb-3">
        <img
          src="./assets/images/avatars/image-juliusomo.png"
          alt="Imagen de avatar"
          className="w-9 h-9"
        />
        <span className="flex gap-1 text-sm">
          <span>
            <p className="text-Dark-blue font-bold pb-[2px]">Juliusomo</p>
            <p className="text-[12px] text-Grayish-Blue">Front-End Junior</p>
          </span>
          <p className="text-Grayish-Blue">2 month</p>
        </span>
      </div>
      <p className="text-sm text-Grayish-Blue mb-4">
        I just developed this simple website using HTML, CSS and Bootstrap.
        <a
          href="https://themewagon.github.io/boldo/"
          target="_blank"
          className="pl-1 underline underline-offset-2 hover:text-Dark-blue duration-200"
        >
          website link
        </a>
      </p>
      <figure className="max-w-2xl">
        <img
          src="./assets/images/publications/post1.png"
          alt=""
          className="w-full h-full rounded-3xl"
        />
      </figure>
      <div className="flex gap-4 mt-3.5">
        <a
          href="#"
          className="flex items-center gap-2 text-sm text-Dark-blue font-bold py-1 px-3 bg-Light-grayish-blue rounded-2xl"
        >
          <Message /> 5
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-sm text-Dark-blue font-bold py-1 px-3 bg-Light-grayish-blue rounded-2xl"
        >
          <Award />
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-sm text-Dark-blue font-bold py-1 px-3 bg-Light-grayish-blue rounded-2xl"
        >
          <Share /> Share
        </a>
      </div>
      <p className="absolute left-0 -bottom-2.5 w-[700px] border-b-[1px] border-Grayish-Blue"></p>
    </section>
  );
}

export default Post;
