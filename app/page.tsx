"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {


  return (
    <div className="flex flex-wrap justify-center items-center gap-3 w-full p-9 h-100 ">
      <div className="rounded-lg">
        <Link href={`/vocab`} className="p-6 py-3 rounded-lg block bg-indigo-400">All vocab</Link>
      </div>
      <div className="rounded-lg">
        <Link href={`/flitter`} className="p-6 py-3 rounded-lg block bg-indigo-400">My Filter</Link></div>
    </div>
  );
}
