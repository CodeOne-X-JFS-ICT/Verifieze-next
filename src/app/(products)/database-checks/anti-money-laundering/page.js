"use client";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Coming Soon</h1>
        <p className="text-xl text-gray-600">This page is currently under construction. Check back soon!</p>
      </div>
    </>
  );
}
