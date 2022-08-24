import React from "react";
import metadata from "data/metadata";
import GitHubIcon from "public/static/social-icon/github.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16 mb-4">
        <a href={metadata.meta.github}>
          <GitHubIcon className="h-6 w-6 fill-current text-gray-700 hover:text-blue-500 " />
        </a>
        <div className="flex my-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <Link href="/">{metadata.meta.footerTitle}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
