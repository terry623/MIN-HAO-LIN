"use client";

import { notFound } from "next/navigation";
import { contentMap } from "./constants";

export default function Article({ params }: { params: { id: string } }) {
  if (!params.id || !contentMap[params.id]) {
    notFound();
  }

  return contentMap[params.id].content;
}
