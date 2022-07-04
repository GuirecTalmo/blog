import Link from "next/link";
import Head from "next/head";
import Date from "../components/date";
import "tailwindcss/tailwind.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className="w-full min-h-screen flex justify-center flex-wrap bg-[#f8efe4]">
      <Head>
        <title>Little blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20">
          <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-1 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <img
              src="https://i89.servimg.com/u/f89/09/02/66/41/me-vec10.png"
              alt="main picture"
              class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
              loading="lazy"
            />
          </div>
          <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h1 className="mt-1 text-lg font-light text-slate-800 sm:text-slate-900 md:text-2xl">
              Personal Blog
            </h1>
          </div>
          <div className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
            <ul className="w-full">
              {allPostsData.map(({ id, date, title }) => (
                <li
                  className="border border-black bg-white p-8 mt-8 hover:shadow-lg"
                  key={id}
                >
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className="">
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <footer className="w-full"></footer>
    </div>
  );
}
