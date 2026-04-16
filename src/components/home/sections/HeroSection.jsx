import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWallet } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
      <img
        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero background"
        className="w-full h-full object-cover"
      />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </motion.div>
      
      <div className="relative container text-center text-white space-y-8 px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Invest and Trade in <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
            Real Estate
            </span> with Crypto
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 font-light drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Own fractional shares of premium properties through NFTs. Start investing with as little as $10.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
          <Link
            to="/properties"
            className="btn bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 text-lg rounded-full shadow-lg shadow-primary-600/30 transition-all hover:scale-105 flex justify-center"
          >
            Explore Properties
          </Link>
          <button
            className="btn bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 text-lg rounded-full transition-all hover:scale-105 flex items-center justify-center"
          >
            <FaWallet className="mr-2" />
            Connect Wallet
          </button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
          <FiChevronDown className="text-4xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
