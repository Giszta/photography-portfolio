"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import {
  Counter,
  Fullscreen,
  Slideshow,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import AlbumItem from "./components/AlbumItem";
import AlbumFilterButton from "./components/AlbumFilterButton";
import AlbumsLoading from "./components/AlbumsLoading";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface PhotoType {
  alt?: string;
  created_at: string;
  height?: number;
  public_id: string;
  tags: string[];
  title?: string;
  url: string;
  width?: number;
  folder?: string;
}

interface AlbumMetadata {
  title: string;
  folder: string;
  coverUrl: string;
  tags: string[];
  created_at: string;
}

const priorityTags = ["Wszystkie", "Europa", "Polska", "Po godzinach"];

export default function Albums() {
  const [tag, setTag] = useState("Wszystkie");
  const [open, setOpen] = useState(false);
  const [currentAlbumPhotos, setCurrentAlbumPhotos] = useState<PhotoType[]>([]);
  const [albumsMetadata, setAlbumsMetadata] = useState<AlbumMetadata[]>([]);
  const [isLoadingAlbums, setIsLoadingAlbums] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchAlbums() {
      try {
        setIsLoadingAlbums(true);

        const response = await fetch("/api/albums");

        if (!response.ok) {
          throw new Error("Failed to fetch albums");
        }

        const metadata: AlbumMetadata[] = await response.json();

        if (isMounted) {
          setAlbumsMetadata(metadata.filter((album) => album.coverUrl));
        }
      } catch (error) {
        console.error("Error fetching albums:", error);

        if (isMounted) {
          setAlbumsMetadata([]);
        }
      } finally {
        if (isMounted) {
          setIsLoadingAlbums(false);
        }
      }
    }

    fetchAlbums();

    return () => {
      isMounted = false;
    };
  }, []);

  const uniqueTags = Array.from(
    new Set(albumsMetadata.flatMap((album) => album.tags)),
  );

  const sortedTags = [
    ...priorityTags,
    ...uniqueTags.filter((tag) => !priorityTags.includes(tag)),
  ];

  const filteredAlbums = albumsMetadata.filter(
    (album) => tag === "Wszystkie" || album.tags.includes(tag),
  );

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleAlbumClick = async (folder: string) => {
    try {
      const response = await fetch(`/api/albums/${encodeURIComponent(folder)}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch photos for album: ${folder}`);
      }

      const photos: PhotoType[] = await response.json();

      setCurrentAlbumPhotos(photos);
      setOpen(true);
    } catch (error) {
      console.error("Error fetching album photos:", error);
      setCurrentAlbumPhotos([]);
    }
  };

  return (
    <main ref={ref} className="mt-28 pb-12">
      <Navbar />

      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl pb-10 font-serif"
      >
        Galeria Zdjęć
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center gap-4 text-white pb-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {sortedTags.map((buttonTag) => (
            <AlbumFilterButton
              key={buttonTag}
              name={buttonTag}
              onClick={() => handleTagChange(buttonTag)}
              isSelected={tag === buttonTag}
            />
          ))}
        </div>
      </motion.div>

      {isLoadingAlbums ? (
        <AlbumsLoading />
      ) : (
        <ul
          key={tag}
          className="max-w-7xl grid gap-10 grid-cols-album m-auto pl-2 pr-2"
        >
          {filteredAlbums.map((album, index) => (
            <motion.li
              key={album.folder}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <AlbumItem
                title={album.title}
                src={album.coverUrl}
                tags={album.tags}
                onClick={() => handleAlbumClick(album.folder)}
              />
            </motion.li>
          ))}
        </ul>
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={currentAlbumPhotos.map((photo) => ({ src: photo.url }))}
        plugins={[Counter, Fullscreen, Slideshow, Thumbnails]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        thumbnails={{
          showToggle: true,
        }}
      />

      <Footer />
    </main>
  );
}
