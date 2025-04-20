import { motion } from "framer-motion";
import NavRoot from "../root/NavRoot";

const Home = () => {
  return (
    <div className="mt-20">
      <motion.div
        className="pt-6 flex flex-col items-center justify-center bg-[#9538E2] rounded-4xl w-[90%] mx-auto static h-96"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-center text-4xl text-white font-bold">
          Upgrade Your Tech Accessorize With <br /> Gadget Heaven Accessories
        </h1>
        <p className="mt-1 text-xl text-white text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <motion.button
          className="rounded-full font-bold mt-2.5 mb-20 p-3.5 bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          Shop Now
        </motion.button>
      </motion.div>

      <motion.div
        className="relative w-[80%] mx-auto h-[350px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          className="w-[90%] mx-auto h-full rounded-2xl border-8 border-[#FFFFFF] -translate-y-[40px] lg:-translate-y-[100px]"
          src="assets/banner.jpg"
          alt="Gadget Banner"
        />
      </motion.div>

      <motion.div
        className="text-3xl text-black font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-center">Explore Cutting-Edge Gadgets</h1>
      </motion.div>

      <motion.div
        className="w-[85%] mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <NavRoot />
      </motion.div>
    </div>
  );
};

export default Home;
