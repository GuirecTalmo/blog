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
        <title>{postData.title}</title>
      </Head>
      <div className="">
        <div className="">
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
      <div className="">
        <div className="mt-6 hero container max-w-screen-lg mx-auto pb-10">
          <img src={postData.img} className="mx-auto" alt="picture cover" />
        </div>
        <div className="w-full mt-6 hero container max-w-screen-lg mx-auto pb-10">
          <h2 className="w-full font-roboto text-center font-light mt-2">
            {postData.title}
          </h2>
          <div
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
          <div className="mt-6">
            <Date dateString={postData.date} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end px-8 mb-8">
        <Link href="/">
          <div className="flex">
            <a className="">Back to home</a>
          </div>
        </Link>
      </div>
    </Layout>
  );
}
