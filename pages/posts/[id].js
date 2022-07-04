import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Link from "next/link";
import Date from "../../components/date";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import avatar from "../../public/avatar.jpg";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>Article O'food</title>
      </Head>
      <div className="w-full">
        <div className="flex justify-center">
          <img
            className="inline-block object-cover w-24 h-24 rounded-full"
            src="https://i89.servimg.com/u/f89/09/02/66/41/avmys10.jpg"
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
            src={postData.img}
            className="p-1 bg-white border rounded max-w-sm"
            alt="..."
          />
        </div>
        <div>
          <h2 className="mt-6 text-center">{postData.title}</h2>
          <div
            className="text-justify mt-6 p-8 list-disc"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
          <div className="underline decoration-sky-500 text-stone-300">
            <Date dateString={postData.date} />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <Link href="/">
          <a className="text-lime-600">Back to home</a>
        </Link>
      </div>
    </Layout>
  );
}
