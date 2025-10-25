"use client";
import { cn } from "@/lib/utils";
import { ArrowRight, BookOpenCheck, Car, CheckCircle, ChevronRight, ClipboardList, Gauge, ShieldCheck, Sparkles, Star, Target, Trophy, Users, Play } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { trafficSigns, testimonials, users } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRef } from 'react';
import { TimelineContent } from "@/components/ui/timeline-content";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Ripple } from "@/components/ui/ripple";

const Feature2 = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const percentageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: 2.4,
        duration: 0.8,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const barVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: (i: number) => ({
      scaleX: 1,
      transition: {
        delay: 3.2 + i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="max-w-7xl mx-auto p-4" ref={featuresRef}>
      <article className="max-w-5xl mx-auto py-10 text-center space-y-2 px-8">
        <TimelineContent
          as="h1"
          animationNum={1}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="md:text-5xl sm:text-4xl text-3xl font-medium"
        >
          Smarter Features, Built for You
        </TimelineContent>
        <TimelineContent
          as="p"
          animationNum={2}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="text-gray-600 sm:text-base text-sm sm:w-[70%] w-full mx-auto"
        >
          Discover tools that elevate your learning—AI-powered sign analysis,
          real-time performance tracking, and intuitive visual reporting to help you pass.
        </TimelineContent>
      </article>
      <div className="sm:grid sm:grid-cols-12 gap-4 sm:space-y-0 space-y-4">
        <TimelineContent
          as="div"
          animationNum={0}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="sm:col-span-6 flex flex-col items-center justify-center overflow-hidden relative w-full border border-neutral-200 bg-gradient-to-b from-neutral-100 rounded-lg h-[450px]"
        >
          <motion.div
            className="h-20 w-20 font-semibold bg-neutral-100 rounded-full shadow-[inset_3px_4px_5px_0px_rgba(183,183,183,0.5),inset_-2px_-2px_5px_0px_rgba(255,255,255,0.5)] grid place-items-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 1.5,
              duration: 0.8,
              type: "spring",
              stiffness: 200,
            }}
          >
            <motion.svg
              width="141"
              height="158"
              viewBox="0 0 141 158"
              className="w-10 h-10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.5 }}
            >
              <motion.path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.00177539 40.2937V10.7691C0.00177539 7.83876 1.34975 5.27468 4.04569 3.0769C6.56192 1.02564 9.61732 0 13.2119 0H78.1843C82.4979 0 86.1823 1.24542 89.2377 3.73624C92.2932 6.22705 93.8209 9.15741 93.8209 12.5273V23.5162C93.8209 26.5931 94.7195 29.4502 96.5168 32.0876C98.3141 34.7249 100.83 36.7762 104.065 38.2414C107.121 39.8531 110.536 40.7322 114.31 40.8787H125.633C129.767 40.8787 133.361 42.0508 136.417 44.3951C139.472 46.886 141 49.8896 141 53.406V112.402C141 112.531 140.999 112.661 140.998 112.791V146.94C140.998 149.949 139.65 152.583 136.954 154.84C134.438 156.947 131.383 158 127.788 158H62.8157C58.5021 158 54.8177 156.721 51.7623 154.163C48.7068 151.605 47.1791 148.595 47.1791 145.134V133.848C47.1791 130.688 46.2805 127.754 44.4832 125.045C42.6859 122.337 40.1697 120.23 36.9345 118.725C33.8791 117.07 30.4642 116.167 26.6899 116.016H15.3669C11.2331 116.016 7.63853 114.813 4.58312 112.405C1.52771 109.847 0 106.762 0 103.151V40.6286C0 40.5168 0.000592719 40.4052 0.00177539 40.2937ZM93.5513 114.128V44.8347C93.5513 43.8091 93.1918 42.93 92.4729 42.1974C91.5742 41.4648 90.4959 41.0985 89.2377 41.0985H51.2248C49.9667 41.0985 48.8883 41.4648 47.9897 42.1974C47.8517 42.3099 47.7243 42.4258 47.6075 42.5452L47.4487 111.954C47.4487 113.007 47.8082 113.91 48.5271 114.662C49.4258 115.415 50.5041 115.791 51.7623 115.791H89.7752C91.0333 115.791 92.1116 115.415 93.0103 114.662C93.2136 114.492 93.3939 114.314 93.5513 114.128Z"
                fill="#d1d1d1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 2.2, duration: 1.5 }}
              />
            </motion.svg>
          </motion.div>

          <OrbitingCircles iconSize={80}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-rose-600 shadow-lg shadow-rose-500"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-neutral-900 shadow-lg shadow-neutral-900"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-cyan-500 shadow-lg shadow-cyan-400"
            />
          </OrbitingCircles>

          <OrbitingCircles iconSize={80} radius={100} reverse speed={2}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-lime-600 shadow-lg shadow-lime-500"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-indigo-600 shadow-lg shadow-indigo-500"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-orange-500 shadow-lg shadow-orange-400"
            />
          </OrbitingCircles>

          <OrbitingCircles iconSize={80} radius={220} reverse speed={1}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-teal-600 shadow-lg shadow-teal-500"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-yellow-500 shadow-lg shadow-yellow-400"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="shrink-0 w-10 h-10 rounded-lg bg-blue-600 shadow-lg shadow-blue-500"
            />
          </OrbitingCircles>

          <article className="absolute right-0 bottom-0 left-0 w-full bg-gradient-to-t from-white via-white to-transparent p-6 pt-[100px]">
            <h3 className="px-1 pt-1 text-black text-2xl font-medium">
              AI Sign Scanner
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-gray-600 text-sm w-full">
              Upload any traffic sign, and our AI will instantly identify and explain it for you.
            </p>
          </article>
        </TimelineContent>

        {/* AI-Powered Insights */}
        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="sm:col-span-6 border border-neutral-200 rounded-lg p-4 group flex flex-col justify-between gap-5"
        >
          <article>
            <motion.h1
              className="lg:text-4xl text-3xl font-semibold"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              Performance Analytics
            </motion.h1>
            <motion.p
              className="lg:text-sm text-xs text-gray-600"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.5 }}
            >
              Track your mock test scores, identify weak topics, and see your progress over time.
            </motion.p>
          </article>

          <motion.div
            className="bg-neutral-100 rounded-md w-full h-80 mx-auto overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            <motion.div
              className="flex justify-between p-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.5 }}
            >
              <h1 className="text-2xl capitalize font-medium">Your Score</h1>
              <div className="text-end">
                <motion.span
                  className="text-xl font-semibold flex gap-2 items-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.6, duration: 0.4, type: "spring" }}
                >
                  15%{" "}
                  <motion.div
                    initial={{ rotate: 0, scale: 0 }}
                    animate={{ rotate: 90, scale: 1 }}
                    transition={{ delay: 2.8, duration: 0.5 }}
                  >
                    <Play
                      className="fill-green-500 stroke-green-500 -rotate-90"
                      size={20}
                    />
                  </motion.div>
                </motion.span>
                <span className="text-xl block">Improvement</span>
              </div>
            </motion.div>

            <div className="relative w-[32rem] h-[32rem] mx-auto grid place-content-center">
              <motion.div
                className="absolute top-0 left-0 w-full h-full rounded-full [background:conic-gradient(hsl(var(--primary))_0_85%,#fff_0_90%,hsl(var(--secondary))_0_10%)]"
                initial={{ rotate: -90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 3.0, duration: 1.2, ease: "easeOut" }}
              />
              <motion.div
                className="absolute top-0 w-full h-full rounded-full [background:radial-gradient(hsl(var(--muted))_0_1px,#0000_1px)_50%_50%/6px_6px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.5 }}
              />
              <motion.div
                className="h-72 w-72 rounded-full bg-neutral-100 relative z-10 flex justify-center items-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3.2, duration: 0.6, type: "spring" }}
              >
                <motion.span
                  className="text-8xl font-semibold -translate-y-10"
                  initial={{ y: 0 }}
                  animate={{ y: -40 }}
                  transition={{ delay: 3.2, duration: 0.6, type: "spring" }}
                >
                  85%
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </TimelineContent>

        {/* Visual Ranking */}
        <TimelineContent
          as="div"
          animationNum={2}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="sm:col-span-7 relative border border-neutral-200 p-4 rounded-xl overflow-hidden"
        >
          <article className="w-full bg-gradient-to-t font-helvetica from-white via-white to-transparent">
            <h3 className="px-1 pt-1 text-black text-2xl font-medium">
              Leaderboard Ranking
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-gray-600 text-sm w-full">
              See how you stack up against other learners. Compete for the top spot on the leaderboard.
            </p>
          </article>
          <div className="relative space-y-4 pt-6">
            {[
              {
                width: "90%",
                color: "#02cd49",
                borderColor: "border-green-500",
                percentage: "95%",
                platform: "You",
              },
              {
                width: "80%",
                color: "#094aec",
                borderColor: "border-blue-500",
                percentage: "90%",
                platform: "User 1",
              },
              {
                width: "70%",
                color: "#343434",
                borderColor: "border-neutral-900",
                percentage: "80%",
                platform: "User 2",
              },
              {
                width: "60%",
                color: "#ff0000",
                borderColor: "border-red-500",
                percentage: "75%",
                platform: "User 3",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.8 + i * 0.2, duration: 0.5 }}
              >
                <motion.div
                  className={`border-r-8 ${item.borderColor} h-16`}
                  style={{
                    width: item.width,
                    background: `repeating-linear-gradient(-45deg, transparent 0 8.5px, ${item.color} 9px 10px) 0 0/calc(100% - 6px) 100% no-repeat`,
                  }}
                  variants={barVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                />
                <motion.p
                  className="text-xl flex flex-col justify-end text-end pl-10"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 3.4 + i * 0.2, duration: 0.4 }}
                >
                  <span>{item.percentage}</span>
                  <span>{item.platform}</span>
                </motion.p>
              </motion.div>
            ))}
          </div>
        </TimelineContent>

        {/* Synchronized Chat */}
        <TimelineContent
          as="div"
          animationNum={3}
          timelineRef={featuresRef}
          customVariants={revealVariants}
          className="sm:col-span-5 relative rounded-xl overflow-hidden border border-neutral-200"
        >
          <div className="relative h-[450px] w-full grid place-content-center">
            <motion.svg
              width="141"
              height="158"
              viewBox="0 0 141 158"
              className="w-24 h-24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: [0, 1.2, 1],
                rotate: [-180, 10, 0],
              }}
              transition={{
                delay: 2.6,
                duration: 1.0,
                type: "spring",
                stiffness: 150,
              }}
            >
              <motion.path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.00177539 40.2937V10.7691C0.00177539 7.83876 1.34975 5.27468 4.04569 3.0769C6.56192 1.02564 9.61732 0 13.2119 0H78.1843C82.4979 0 86.1823 1.24542 89.2377 3.73624C92.2932 6.22705 93.8209 9.15741 93.8209 12.5273V23.5162C93.8209 26.5931 94.7195 29.4502 96.5168 32.0876C98.3141 34.7249 100.83 36.7762 104.065 38.2414C107.121 39.8531 110.536 40.7322 114.31 40.8787H125.633C129.767 40.8787 133.361 42.0508 136.417 44.3951C139.472 46.886 141 49.8896 141 53.406V112.402C141 112.531 140.999 112.661 140.998 112.791V146.94C140.998 149.949 139.65 152.583 136.954 154.84C134.438 156.947 131.383 158 127.788 158H62.8157C58.5021 158 54.8177 156.721 51.7623 154.163C48.7068 151.605 47.1791 148.595 47.1791 145.134V133.848C47.1791 130.688 46.2805 127.754 44.4832 125.045C42.6859 122.337 40.1697 120.23 36.9345 118.725C33.8791 117.07 30.4642 116.167 26.6899 116.016H15.3669C11.2331 116.016 7.63853 114.813 4.58312 112.405C1.52771 109.847 0 106.762 0 103.151V40.6286C0 40.5168 0.000592719 40.4052 0.00177539 40.2937ZM93.5513 114.128V44.8347C93.5513 43.8091 93.1918 42.93 92.4729 42.1974C91.5742 41.4648 90.4959 41.0985 89.2377 41.0985H51.2248C49.9667 41.0985 48.8883 41.4648 47.9897 42.1974C47.8517 42.3099 47.7243 42.4258 47.6075 42.5452L47.4487 111.954C47.4487 113.007 47.8082 113.91 48.5271 114.662C49.4258 115.415 50.5041 115.791 51.7623 115.791H89.7752C91.0333 115.791 92.1116 115.415 93.0103 114.662C93.2136 114.492 93.3939 114.314 93.5513 114.128Z"
                fill="hsl(var(--primary))"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 3.0, duration: 1.5 }}
              />
            </motion.svg>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 3.8, duration: 0.6 }}
            >
              <Ripple />
            </motion.div>
          </div>
          <article className="absolute right-0 top-0 left-0 w-full bg-gradient-to-b from-white via-white to-transparent p-6 pb-[100px]">
            <h3 className="px-1 pt-1 text-black text-2xl font-medium">
              Personalized Learning
            </h3>
            <p className="mt-1 px-1 pb-1 font-normal text-gray-600 text-sm w-full">
              Our system identifies your weak spots and creates personalized quizzes to help you improve.
            </p>
          </article>
        </TimelineContent>
      </div>
    </section>
  );
};


export default function StreamLineHero() {

  const heroSigns = trafficSigns.filter(sign => ['prohibited-action-speed', 'warning-crossroad-roundabout', 'mandatory-direction-up', 'sign-warning-pedestrian-crossing', 'info-hospital', 'prohibited-parking', 'sign-warning-slippery-road', 'prohibited-action-turn-left', 'sign-warning-train-crossing-barriers']).slice(0, 9);
  const signPreview = trafficSigns.slice(0, 6);
  const topUsers = users.slice(0, 5).map(u => ({ ...u, score: Math.floor(Math.random() * 2000) + 1000 })).sort((a,b) => b.score - a.score);


  return (
    <>
    <section
      className={cn(
        "bg-white dark:bg-neutral-900",
      )}
    >
      <div className="container mx-auto px-4 sm:px-10 2xl:px-10">
        
        <div className="md:flex lg:py-32 md:py-24 py-16 h-full justify-start items-center relative overflow-hidden">
          <div className="flex items-center justify-start">
            <motion.div
              className="xl:max-w-2xl md:max-w-lg w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.h1
                className="lg:text-6xl xl:text-7xl sm:text-5xl text-4xl font-bold dark:text-gray-100 text-gray-900 sm:mb-6 mb-4 leading-tight font-headline"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Master Bangladesh Driving Theory – {" "}
                <span className="font-semibold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
                  Practice, Signs & Mock Tests
                </span>{" "}
              </motion.h1>
              <motion.p
                className="text-gray-600 dark:text-gray-300 sm:mb-8 mb-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                500+ MCQs, traffic signs library, and progress tracking – online & free. Everything you need to pass your BRTA exam.
              </motion.p>
              <motion.div
                className="flex gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Link href="/practice" className="text-lg h-12 px-6 rounded-lg text-white flex items-center gap-2 bg-primary hover:bg-primary/90 transition-all group">
                  <BookOpenCheck className="w-5 h-5"/>
                  Start Practice
                </Link>
                <Link href="/traffic-signs" className="text-lg h-12 px-6 dark:text-white text-black flex items-center gap-2 rounded-lg group bg-secondary/20 hover:bg-secondary/30">
                  <Car className="w-5 h-5 mr-1 group-hover:scale-110 transition-transform" />
                  View Traffic Signs
                </Link>
              </motion.div>
              <motion.div
                className="flex items-center gap-8 text-sm dark:text-gray-300 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    <Star
                        className="w-4 h-4 text-yellow-500 fill-current"
                      />
                  </div>
                  <span>500+ Questions</span>
                </div>
                 <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-blue-500" />
                  <span>80+ Signs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-500" />
                  <span>10k+ Learners</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="md:absolute md:top-0 md:mt-0 mt-12 2xl:-right-32 xl:-right-60 sm:-right-80 overflow-hidden md:h-[44rem] [mask-image:radial-gradient(ellipse_80%_50%_at_100%_50%,#000_70%,transparent_110%)]">
              <motion.div 
                className="grid grid-cols-3 gap-4 w-full max-w-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "backOut" }}
              >
                {heroSigns.map((sign, i) => {
                  const image = PlaceHolderImages.find(img => img.id === sign.imageId);
                  return (
                    <motion.div
                      key={sign.id}
                      className="aspect-square bg-white dark:bg-neutral-800/50 rounded-lg shadow-md flex items-center justify-center p-4 hover:shadow-xl transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                    >
                      {image && <Image src={image.imageUrl} alt={sign.titleEnglish} width={120} height={120} className="object-contain" />}
                    </motion.div>
                  )
                })}
              </motion.div>
          </div>
        </div>
      </div>
    </section>

    {/* --- All New Sections --- */}

    {/* Daily Challenge Banner */}
    <div className="bg-primary/10 text-primary py-4">
      <div className="container mx-auto flex items-center justify-center gap-4">
        <Sparkles className="h-6 w-6 text-primary" />
        <p className="font-semibold">Today’s challenge: Score 90% in a 20-question mock test.</p>
        <Button asChild size="sm">
          <Link href="/mock-test">Start Challenge <ArrowRight className="ml-2 h-4 w-4"/></Link>
        </Button>
      </div>
    </div>

    <div className="bg-background py-16 sm:py-24">
      <div className="container mx-auto space-y-24">

        {/* Progress Snapshot (Logged In) */}
        <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-6 flex items-center justify-around">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Streak</p>
            <p className="text-2xl font-bold">5 Days 🔥</p>
          </div>
            <div className="text-center">
            <p className="text-sm text-muted-foreground">Last Score</p>
            <p className="text-2xl font-bold">85%</p>
          </div>
            <div className="text-center">
            <p className="text-sm text-muted-foreground">Weakest Topic</p>
            <p className="text-2xl font-bold">Mandatory Signs</p>
          </div>
            <div className="text-center">
            <p className="text-sm text-muted-foreground">Rank</p>
            <p className="text-2xl font-bold">#128</p>
          </div>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/practice">
            <Card className="group hover:bg-primary/5 hover:shadow-lg transition-all">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <BookOpenCheck className="h-12 w-12 text-primary mb-4"/>
                <h3 className="text-xl font-bold">Practice Test</h3>
                <p className="text-muted-foreground mt-2">Start with topic-wise questions.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/mock-test">
            <Card className="group hover:bg-primary/5 hover:shadow-lg transition-all">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <ClipboardList className="h-12 w-12 text-primary mb-4"/>
                <h3 className="text-xl font-bold">Mock Exam</h3>
                <p className="text-muted-foreground mt-2">Simulate the real BRTA exam.</p>
              </CardContent>
            </Card>
          </Link>
           <Link href="/traffic-signs">
            <Card className="group hover:bg-primary/5 hover:shadow-lg transition-all">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <Car className="h-12 w-12 text-primary mb-4"/>
                <h3 className="text-xl font-bold">Traffic Signs</h3>
                <p className="text-muted-foreground mt-2">Browse the complete sign library.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/profile">
            <Card className="group hover:bg-primary/5 hover:shadow-lg transition-all">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <Target className="h-12 w-12 text-primary mb-4"/>
                <h3 className="text-xl font-bold">Weak Topics</h3>
                <p className="text-muted-foreground mt-2">Focus on areas you need to improve.</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* New Animated Feature Section */}
        <Feature2 />

        {/* Traffic Sign Preview */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Explore Traffic Signs</h2>
           <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {signPreview.map(sign => {
              const image = PlaceHolderImages.find(img => img.id === sign.imageId);
              return (
                 <Card key={sign.id} className="text-center p-4">
                  {image && <Image src={image.imageUrl} alt={sign.titleEnglish} width={80} height={80} className="mx-auto object-contain h-20"/>}
                  <p className="mt-2 text-sm font-semibold">{sign.titleEnglish}</p>
                </Card>
              )
            })}
           </div>
           <div className="text-center mt-8">
             <Button asChild variant="outline">
                <Link href="/traffic-signs">View All Traffic Signs <ChevronRight className="ml-2"/></Link>
             </Button>
           </div>
        </div>

        {/* Popular Categories */}
        <div className="text-center">
           <h2 className="text-3xl font-bold text-center mb-8">Popular Categories</h2>
           <div className="flex flex-wrap gap-4 justify-center">
             <Button variant="secondary" size="lg" asChild><Link href="/practice/rules">Priority Rules</Link></Button>
             <Button variant="secondary" size="lg" asChild><Link href="/practice/mandatory">Mandatory Signs</Link></Button>
             <Button variant="secondary" size="lg" asChild><Link href="/practice/warning">Warning Signs</Link></Button>
             <Button variant="secondary" size="lg" asChild><Link href="/practice/informatory">Informatory Signs</Link></Button>
           </div>
        </div>

        {/* Leaderboard Preview */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Top Learners</h2>
          <Card>
            <CardContent className="p-0">
               <ul className="divide-y">
                {topUsers.map((user, idx) => {
                  const avatar = PlaceHolderImages.find(img => img.id === user.avatarId);
                  return (
                     <li key={user.id} className="flex items-center justify-between p-4">
                       <div className="flex items-center gap-4">
                         <span className="text-lg font-bold w-6">{idx + 1}.</span>
                          {avatar && <Image src={avatar.imageUrl} alt={user.name} width={40} height={40} className="rounded-full"/>}
                          <span className="font-semibold">{user.name}</span>
                       </div>
                       <div className="font-bold text-primary">{user.score} XP</div>
                     </li>
                  )
                })}
               </ul>
            </CardContent>
          </Card>
          <div className="text-center mt-8">
             <Button asChild>
                <Link href="/leaderboard">See Full Leaderboard <ChevronRight className="ml-2"/></Link>
             </Button>
           </div>
        </div>

        {/* Why This Works */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Why BRTA Signs Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                <CheckCircle/>
              </div>
              <h3 className="text-lg font-semibold">Updated with Real Laws</h3>
              <p className="text-muted-foreground mt-1">Content is based on official BRTA exam formats and traffic laws.</p>
            </div>
             <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                <Gauge/>
              </div>
              <h3 className="text-lg font-semibold">Realistic Exam Simulation</h3>
              <p className="text-muted-foreground mt-1">Mock tests mimic the pressure and format of the actual exam.</p>
            </div>
             <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                <Sparkles/>
              </div>
              <h3 className="text-lg font-semibold">Immediate Feedback</h3>
              <p className="text-muted-foreground mt-1">Get instant explanations for wrong answers to learn faster.</p>
            </div>
             <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                <Trophy/>
              </div>
              <h3 className="text-lg font-semibold">Personalized Tracking</h3>
              <p className="text-muted-foreground mt-1">Our system identifies your weak spots and helps you improve.</p>
            </div>
          </div>
        </div>

         {/* Testimonials */}
        <div>
           <h2 className="text-3xl font-bold text-center mb-12">What Our Learners Say</h2>
           <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(t => {
                const avatar = PlaceHolderImages.find(img => img.id === t.avatarId);
                return (
                  <Card key={t.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        {avatar && <Image src={avatar.imageUrl} alt={t.name} width={48} height={48} className="rounded-full"/>}
                        <div>
                          <p className="font-bold">{t.name}</p>
                          <p className="text-sm text-muted-foreground">{t.district}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground italic">&quot;{t.comment}&quot;</p>
                    </CardContent>
                  </Card>
                )
            })}
           </div>
        </div>

      </div>
    </div>
    </>
  );
}
