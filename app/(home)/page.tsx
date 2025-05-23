import { BlogFooter } from "@/components/home/block-footer";
import Navbar from "@/components/home/header/Navbar";
import HeroSection from "@/components/home/hero-section";
import TopArticals from "@/components/home/top_articals";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { AllArticlesPageSkeleton } from "../articles/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className=" mb-12 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">Featured Articles</h2>
            <p>Discover our most popular and trending content</p>
          </div>
          <Suspense fallback={<AllArticlesPageSkeleton/>}>
          <TopArticals />
          </Suspense>
          

          <div className="text-center mt-12">
            <Link href={'/articles'}>
              <Button className="rounded-full flex mx-auto mt-7 hover:bg-gray-900 hover:text-white dark:bg-white dark:hover:text-gray-900">View all articless</Button>
            </Link>
          </div>
        </div>
      </section>
      < BlogFooter />

    </div>
  );
}
