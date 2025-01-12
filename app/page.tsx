import { motion } from "motion/react"

export default function Home() {
  return ( 
    // Navbar
    <div>
      <li className="font-Geist text-white">Products</li>
      <li className="text-white">About</li>
      <li className="text-white">Contact</li>
      <h1 className="text-white">THC-ASAP</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      Shop
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      Cart
      </button>
      {/* End of Navbar */}
      {/* Floating top bar */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div>
      <div>
      <div className=" h-[50px] bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 flex items-center justify-between my-6 mx-4 px-4 py-1 rounded-md shadow-lg">
        {/* title */}
        <span className=" text-white text-2xl font-fun">THC-Asap</span>
        {/* button */}
        <div className=" bg-white py-1 px-2 inline rounded-md">
          <a href="https://twitter.com/4real_Dev" target="_blank" rel="noopener noreferrer">
            <span className=" font-mono text-base font-light cursor-pointer"></span>
          </a>
        </div>
      </div>
    </div>
    </div>
    </div>
    // End of floating top bar
    // Idea for items to expand on click to reveal more details https://codesandbox.io/p/sandbox/framer-motion-app-store-demo-su6mx?file=%2Fsrc%2FApp.js%3A31%2C2&from-embed
  );
}
