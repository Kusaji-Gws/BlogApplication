import { BlogFooter } from "@/components/home/block-footer";
import Navbar from "@/components/home/header/Navbar";
import HeroSection from "@/components/home/hero-section";
import TopArticals from "@/components/home/top_articals";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
        </div>
        <TopArticals />
        <div>
          <Link href={'/articles'}>
          <Button className="rounded-full hover:bg-gray-900 hover:text-white dark:bg-white dark:hover:text-gray-900">View all articless</Button>
          </Link>
        </div>
      </section>
< BlogFooter/>
      
    </div>
  );
}
