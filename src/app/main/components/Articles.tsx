"use client";

import Link from "next/link";
import { contentMap } from "../../articles/[id]/constants";

const Articles = () => (
  <div id="Articles" className="px-8 md:px-32 pb-16 content-center bg-white">
    <h1 className="pt-12 uppercase font-bold text-center text-black text-bold text-4xl">
      Articles
    </h1>
    <div className="mt-16 align-center items-center">
      <ul className="list-inside list-decimal">
        {Object.keys(contentMap).map((key) => (
          <Link href={`/articles/${key}`} key={key}>
            <li className="m-4 p-2 hover:bg-gray-100">
              {contentMap[key].title}（{contentMap[key].date}）
            </li>
          </Link>
        ))}
      </ul>
    </div>
  </div>
);

export default Articles;
