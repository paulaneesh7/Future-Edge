"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (!imageElement) return;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title">
            Your AI Career Coach For
            <br />
            Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Boost your career with our AI-powered coaching platform—personalized
            guidance to navigate your professional journey effortlessly.
          </p>
        </div>

        <div>
          <Link href="/dashboard">
            <Button size={"lg"} className="px-8">
              Get Started
            </Button>
          </Link>
        </div>

        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src={"/banner2.jpeg"}
              width={1280}
              height={720}
              alt="Future Edge Preview"
              className="rounded-lg border mx-auto shadow-2xl mb-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
