import { motion } from "framer-motion";
function App() {
  const introText = [
    "Hello",
    "I'm",
    "Darrion.",
    "A",
    "Web",
    "Developer.",
    ":)",
  ];
  return (
    <div className=" h-[100dvh] flex items-center justify-center">
      <header className=" fixed top-0 left-0 w-full flex justify-between p-4 text-white border-b-1 border-b">
        <h1 className=" uppercase">Darrion</h1>
        <nav className=" flex gap-4">
          <button>Home</button>
          <button>Projects</button>
          <button>Contact</button>
        </nav>
      </header>
      <motion.div className="home bg-blue-950 text-white h-full w-full uppercase font-manrope font-semibold text-5xl grid items-center">
        <motion.div className="p-5 max-w-md">
          {introText.map((word, index) => (
            <motion.div
              key={index}
              animate={{ opacity: [0, 1], y: [10, 0] }}
              transition={{
                duration: 0.4,
                delay: index * 0.7,
                ease: "easeInOut",
                y: { duration: 0.3, delay: index * 0.7, ease: "easeInOut" },
              }}
              className=" inline-block overflow-hidden m-1"
            >
              <motion.h2>{word}</motion.h2>
            </motion.div>
          ))}
        </motion.div>
        <motion.button
          className=" text-lg bg-white text-blue-900 w-fit mx-auto py-4 px-6 rounded-full"
          animate={{ opacity: [0, 1] }}
          transition={{ delay: introText.length * 0.7 + 0.1 }}
        >
          View Projects
        </motion.button>
      </motion.div>
    </div>
  );
}

export default App;
