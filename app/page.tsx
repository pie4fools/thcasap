"use client";

import React, { useState } from "react";
import * as motion from "motion/react-client"
import { Square_Peg } from "next/font/google";
import Video from 'next-video';
import VideoBackground from "./VideoBackground";
import Navbar from "./Navbar";

{/* Define box size used for retail items */}
const box = {
  borderRadius: 5,
}

export default function Home() {
  return (
    // Navbar
        <div className="overflow-y-hidden">
        <Navbar />
        <div>
        <VideoBackground />
        </div>
        <div className="h-[800px] bg-gradient-to-r from-slate-900 to-slate-700 mb-10 rounded-md">
          <h1 className="font-poppins text-6xl text-white opacity-50">Fast Delivery To </h1>
        </div>
        {/* Product Holder 1 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
      <div className="relative w-[250px] h-[400px] mx-auto my-5 bg-gradient-to-br from-slate-50 to-gray-100 rounded-lg shadow-md overflow-y-hidden">
      <motion.div
        className="w-full flex justify-center pt-4"
        whileFocus={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
      />
    <div className="w-full flex justify-center pt-4">
      <img src="\permarker.webp" className="object-contain max-h-[200px]"/>
    </div>
     {/* Text */}
     <div className="w-full text-center mt-4">
      <h1 className="text-gray-800 text-md">Permanent Marker THCA 3.5g 35%<br></br>$22.50</h1>
    </div>
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none"> 
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add to Cart
        </span>
    </button>
    </div>
    {/* Product Holder 2 */}    
    <div>
    <div className="relative w-[250px] h-[400px] mx-auto my-5 shadow-md">
    <motion.div
        className="w-full flex justify-center pt-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
      />
    <div className="w-full flex justify-center pt-4">
      <img src="/Oreoz.png" className="object-contain max-h-[200px]"/>
    </div>
    {/* Text */}
    <div className="w-full text-center mt-4">
      <h1 className="text-gray-800 text-md">Oreoz 3.5g - 22.81% THCA Flower<br></br>$19.99</h1>
    </div>
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add to Cart
        </span>
    </button>
    </div>
    </div>
    {/* Product Holder 3 */}
    <div>
    <div className="relative w-[250px] h-[400px] mx-auto my-5 shadow-md">
    <motion.div
        className="w-full flex justify-center pt-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
    />
    <div className="w-full flex justify-center pt-4">
      <img src="/trehousepeach.webp" className="object-contain max-h-[200px]"/>
    </div>
    {/* Text */}
    <div className="w-full text-center mt-4">
      <h1 className="text-gray-800 text-md">TRĒ House 3.5g THCA Live Rosin Vape - Texas Peach Cobbler<br></br>$29.99</h1>
    </div>
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add to Cart
        </span>
    </button>
    </div>
    </div>
    {/* Product Holder 4 */}
    <div>
    <div className="relative w-[250px] h-[400px] mx-auto my-5 shadow-md">
    <motion.div
        className="w-full flex justify-center pt-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
    />
    <div className="w-full flex justify-center pt-4">
      <img src="/GrapeGuava.webp" className="object-contain max-h-[200px]"/>
    </div>
    {/* Text */}
    <div className="w-full text-center mt-4">
      <h1 className="text-gray-800 text-md">TRĒ House 3.5g THCA Live Rosin Vape - Grape Guava<br></br>$29.99</h1>
    </div>
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add to Cart
        </span>
    </button>
    </div>
    </div>
    {/* Product Holder 5 */}
    <div>
    <div className="relative w-[250px] h-[400px] mx-auto my-5 shadow-md">
    <motion.div
        className="w-full flex justify-center pt-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
    />
    <div className="w-full flex justify-center pt-4">
      <img src="/BlueberrySlushie.webp" className="object-contain max-h-[200px]"/>
    </div>
    {/* Text */}
    <div className="w-full text-center mt-4">
      <h1 className="text-gray-800 text-md">TRĒ House 3.5g THCA Live Rosin Vape - Blueberry Slushie<br></br>$29.99</h1>
    </div>
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add to Cart
        </span>
    </button>
    </div>
    </div>
    {/* Product Holder 6 */}
    <div>
    <div className="relative w-[250px] h-[400px] mx-auto my-5 shadow-md">
    <motion.div
        className="w-full flex justify-center pt-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
    />
    <div className="w-full flex justify-center pt-4">
      <img src="/1gdabhinature.webp" className="object-contain max-h-[200px]"/>
    </div>
    {/* Text */}
    <div className="w-full text-center mt-4">
      <h1 className="text-gray-800 text-md">Hi On Nature 1g THCA + THCP Diamond Dabs - Slurricane<br></br>$22.50</h1>
    </div>
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add to Cart
        </span>
    </button>
    </div>
    </div>
    {/* Product Holder 7 */}
    <div>
    <div className="relative w-[250px] h-[400px] mx-auto my-5 shadow-md">
    <motion.div
        className="w-full flex justify-center pt-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
    />
    <div className="w-full flex justify-center pt-4">
    <img src="/thcaedibles.jpg" className="object-contain max-h-[200px]"/>
    </div>
    {/* Text */}
    <div className="w-full text-center mt-4">
      <h1 className="text-gray-800 text-md">TRĒ House Delta 8 Gummies w/ HHC & THCP - Tropical Mango<br></br>26.99</h1>
    </div>
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add to Cart
        </span>
    </button>
    </div>
    </div>
    {/* Product Holder 8 */}    
    <div>
    <div className="relative w-[250px] h-[400px] mx-auto my-5 shadow-md">
    <motion.div
        className="w-full flex justify-center pt-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
    />
    <div className="w-full flex justify-center pt-4">
      <img src="/Litty.webp" className="object-contain max-h-[200px]"/>
    </div>
    {/* Text */}
    <div className="w-full text-center mt-4">
      <h1 className="text-gray-800 text-md">Litty 5g THCA Signature Blend Vape - Baja Blast<br></br>$31.99 USD</h1>
    </div>
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add to Cart
        </span>
    </button>
    </div>
    </div>
    {/* Product Holder 9 */}    
    <div>
    <div className="relative w-[250px] h-[400px] mx-auto my-5 shadow-md">
    <motion.div
        className="w-full flex justify-center pt-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
    />
    <div className="w-full flex justify-center pt-4">
      <img src="/SkywalkerOG.webp" className="object-contain max-h-[200px]"/>
    </div>
    {/* Text */}
    <div className="w-full text-center mt-4">
      <h1 className="text-gray-800 text-md">Torch 5g THCA Live Rosin Disposable Vape - Skywalker OG<br></br>$31.99</h1>
    </div>
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add to Cart
        </span>
    </button>
    </div>
    </div>
    {/* Product Holder 10 */}    
    <div>
    <div className="relative w-[250px] h-[400px] mx-auto my-5 shadow-md">
    <motion.div
        className="w-full flex justify-center pt-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
    />
    <div className="w-full flex justify-center pt-4">
      <img src="/GorillaGlue.webp" className="object-contain max-h-[200px]"/>
    </div>
    {/* Text */}
    <div className="w-full text-center mt-4">
      <h1 className="text-gray-800 text-md">Big High 5g THCA Disposable Vape - Gorilla Glue<br></br>$27.99</h1>
    </div>
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add to Cart
        </span>
    </button>
    </div>
    </div>
    {/* Product Holder 11 */}    
    <div>
    <div className="hidden relative w-[250px] h-[400px] mx-auto my-5 shadow-md">
    <motion.div
        className="w-full flex justify-center pt-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
    />
    <div className="w-full flex justify-center pt-4">
      <img src="/Oreoz.png" className="object-contain max-h-[200px]"/>
    </div>
    {/* Text */}
    <div className="w-full text-center mt-4">
      <h1 className="text-gray-800 text-md">Permanent Marker<br></br>THCA 35%</h1>
    </div>
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add to Cart
        </span>
    </button>
    </div>
    </div>
    </div>
    </div>
  );
}
