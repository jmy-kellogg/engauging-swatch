"use client";
import Link from "next/link";
import Image from "next/image";
import { FormEvent, useState, useEffect, useCallback } from "react";
import type { Artworks } from "../api/artworks/route.js";

export default function Artworks() {
  const [keywords, setKeywords] = useState("");
  const [artworks, setArtworks] = useState<Artworks>([]);

  const fetchData = useCallback(async () => {
    const resp = await fetch("http://localhost:3000/api/artworks");
    const data = (await resp.json()) || [];
    setArtworks(data);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (keywords) {
      const resp = await fetch(
        `http://localhost:3000/api/artworks/search?keywords=${encodeURIComponent(
          keywords
        )}`
      );
      const data = await resp.json();
      setArtworks(data);
    } else {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="m-5 justify-self-center">
      <form onSubmit={handleSubmit}>
        <input
          name="keywords"
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Search Artworks by Title"
          className="m-3 w-2xl rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
        <button
          type="submit"
          className="mx-2 p-1 border-1 text-center hover:bg-ruby-300 hover:font-bold hover:cursor-pointer"
        >
          Search
        </button>
      </form>
      <div>
        {artworks.map((artwork) => (
          <div
            className="flex justify-between border-b-1 border-zinc-300"
            key={artwork.id}
          >
            {artwork.image_id && (
              <Image
                src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/100,/0/default.jpg`}
                width={100}
                height={100}
                alt={artwork.thumbnail?.alt_text || artwork.title}
              />
            )}
            <Link
              className="w-full flex p-2 text-l hover:bg-indigo-100 hover:cursor-pointer hover:font-bold"
              href={`/artworks/${artwork.id}`}
            >
              <div>
                <h2>{artwork.title}</h2> By: {artwork.artist_title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
