import * as motion from "motion/react-client"
import { Square_Peg } from "next/font/google";


{/* Define box size used for retail items */}
const box = {
  borderRadius: 5,
}

export default function Home() {
  return (
    // Navbar
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a className="flex items-center space-x-3 rtl:space-x-reverse">
        {/* Logo Image */}
        <img src="thcasaplogo.png" className="" alt="" />
        {/* Logo Text */}
        <span className="self-center text-xl font-semibold font-sans whitespace-nowrap dark:text-white">THC-ASAP</span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      {/* Mobile Menu */}
      <svg className="w-10 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* End Of Mobile Menu */}
{/* Product Holder 1 */}
    <div>
    <div className="relative w-[250px] h-[200px] mx-auto my-5 bg-gradient-to-r from-teal-200 to-teal-500">
    <motion.div
        className="absolute inset-0 bg-gradient-to-r from-teal-200 to-teal-500"
        whileFocus={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
    />
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add to Cart
        </span>
    </button>
    </div>
    {/* Product Holder 2 */}    
    <div>
    <div className="relative w-[250px] h-[200px] mx-auto my-5 bg-gradient-to-r from-teal-200 to-teal-500">
    <motion.div
        className="absolute inset-0 bg-gradient-to-r from-teal-200 to-teal-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
    />
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add to Cart
        </span>
    </button>
    </div>
    </div>
    {/* Product Holder 3 */}
    <div>
    <div className="relative w-[250px] h-[200px] mx-auto my-5 bg-gradient-to-r from-teal-200 to-teal-500">
    <motion.div
        className="absolute inset-0 bg-gradient-to-r from-teal-200 to-teal-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
    />
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add to Cart
        </span>
    </button>
    </div>
    </div>
    {/* Product Holder 4 */}
    <div>
    <div className="relative w-[250px] h-[200px] mx-auto my-5 bg-gradient-to-r from-teal-200 to-teal-500">
    <motion.div
        className="absolute inset-0 bg-gradient-to-r from-teal-200 to-teal-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
    />
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add to Cart
        </span>
    </button>
    </div>
    </div>
    {/* Product Holder 5 */}
    <div>
    <div className="relative w-[250px] h-[200px] mx-auto my-5 bg-gradient-to-r from-teal-200 to-teal-500">
    <motion.div
        className="absolute inset-0 bg-gradient-to-r from-teal-200 to-teal-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
    />
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add to Cart
        </span>
    </button>
    </div>
    </div>
    {/* Product Holder 6 */}
    <div>
    <div className="relative w-[250px] h-[200px] mx-auto my-5 bg-gradient-to-r from-teal-200 to-teal-500">
    <motion.div
        className="absolute inset-0 bg-gradient-to-r from-teal-200 to-teal-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
    />
    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add to Cart
        </span>
    </button>
    </div>
    </div>
    {/* Product Holder 7 */}
    <div>
    <div className="relative w-[250px] h-[200px] mx-auto my-5 bg-gradient-to-r from-teal-200 to-teal-500">
    <motion.div
        className="absolute inset-0 bg-gradient-to-r from-teal-200 to-teal-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        style={box}
    />
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
