import React from "react";
import Head from "next/head";
import Image from "next/image";
import Nav from "./Nav";
import metadata from "../data/metadata";
import Link from "next/link";
import navlinks from "data/navlinks";

const Container = (props) => {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    ...props.customMeta,
  };
  return (
    <div className={`w-full flex flex-col items-center p-3`}>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <header
        className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}
      >
        <div className={`flex flex-row items-center`}>
          <Link href={navlinks[0].link} passHref>
            <a className={`flex items-center`}>
              <Image
                src={`/static/logo.jpeg`}
                alt="logo"
                width={40}
                height={40}
                objectFit={`cover`}
                className={`rounded-full`}
              />
              <span className={`mx-2 font-medium text-lg`}>
                {metadata.author}
              </span>
            </a>
          </Link>
        </div>
        <Nav />
      </header>
      <main className={`w-full max-w-3xl`}>{props.children}</main>
    </div>
  );
};

export default Container;
