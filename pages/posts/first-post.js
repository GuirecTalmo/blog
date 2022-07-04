import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import avatar from "../../public/avatar.jpg";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Article O'food</title>
      </Head>
      <div className="w-full">
        <div className="flex justify-center">
          <img
            className="inline-block object-cover w-24 h-24 rounded-full"
            src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Profile image"
          />
        </div>
      </div>

      <h1 className="w-full font-roboto text-center font-light mt-2">Guirec</h1>
      <h2 className="w-full font-roboto text-base text-center"></h2>
      <div className="flex justify-center mt-6">
        <p className="w-96 text-justify italic">
          Développeur basé à Paris, j’aime les défis, explorer de nouvelles
          solutions et développer des projets qui mettent la priorité sur
          l’experience utilisateur.
        </p>
      </div>

      <div className="grid-cols-2 mt-6">
        <div className="flex flex-wrap justify-center">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
            className="p-1 bg-white border rounded max-w-sm"
            alt="..."
          />
        </div>
        <div>
          <h2 className="mt-6 text-center">Article</h2>
          <p className="text-justify mt-6 p-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus
            congue efficitur. Duis ac diam tempus, lacinia diam sit amet,
            efficitur mi. Fusce posuere mauris orci, at cursus tellus lobortis
            vel. Sed mattis in nibh ut efficitur. Mauris malesuada gravida
            consectetur. In pharetra ante elit, a commodo leo ultricies eget.
            Pellentesque scelerisque quam vitae nulla bibendum, id hendrerit
            neque dignissim. Suspendisse potenti. Suspendisse a mauris id justo
            tincidunt malesuada eu quis est. Sed dapibus dapibus turpis in
            ultrices. Morbi eu tristique velit, sit amet lacinia ligula.
          </p>

          <p className="text-justify p-8">
            Curabitur condimentum faucibus hendrerit. Donec at lacus
            condimentum, euismod ipsum eget, sodales urna. Nam imperdiet orci ut
            leo ornare fermentum. Maecenas non massa ut leo suscipit consequat
            cursus id elit. Morbi eu sagittis justo. Aenean convallis felis
            magna, nec sollicitudin leo egestas a. Sed non iaculis diam. Aliquam
            mattis, diam id suscipit ultricies, ex justo condimentum lectus,
            efficitur lacinia velit nunc vitae leo. Sed dictum, leo a luctus
            dignissim, massa ipsum semper sem, ac iaculis nunc elit nec ex.
            Donec congue quam sapien, venenatis varius ligula lacinia id. Nulla
            placerat eu libero in eleifend. Vivamus feugiat efficitur eros, vel
            varius quam euismod a. Nam eros leo, ultricies sit amet nisi quis,
            varius vulputate ligula.
          </p>
        </div>
      </div>
      <div class="flex justify-end mt-6">
        <Link href="/">
          <div className="flex">
            <a className="text-lime-600">Back to home</a>
          </div>
        </Link>
      </div>
    </Layout>
  );
}
