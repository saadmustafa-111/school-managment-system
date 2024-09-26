"use client";
import { motion } from "framer-motion"; // Import motion
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 3000);

    return () => clearTimeout(timer); //
  }, [router]);
  return (
    <div
      className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{
        backgroundImage: "url(/assets/managmemt.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Using Framer Motion for fade and slide animation */}
      <motion.h1
        className="text-[50px] text-white font-bold shadow-xl shadow-black"
        initial={{ y: 200, opacity: 0 }} // Start 100px below and invisible
        animate={{ y: 0, opacity: 1 }} // Move to center and become visible
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 30,
          duration: 3,
        }} // Control animation effect
      >
        Welcome to School Management System
      </motion.h1>
    </div>
  );
}
