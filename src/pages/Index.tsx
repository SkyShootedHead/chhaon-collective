import { useState } from "react";
import { motion } from "framer-motion";
import InfoOverlay from "@/components/InfoOverlay";
import ProjectImage from "@/components/ProjectImage";

import heroImg from "@/assets/hero.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  { src: project1, title: "Sangath Public Library", location: "Ahmedabad", alt: "Public library with courtyard" },
  { src: project2, title: "Mitti Community Centre", location: "Rural Gujarat", alt: "Community center with rammed earth" },
  { src: project3, title: "Yamuna Ghat Renewal", location: "Agra", alt: "Stepped waterfront ghats" },
  { src: project4, title: "Kala Bhavan Museum", location: "Ahmedabad", alt: "Brick and concrete museum" },
  { src: project5, title: "Vidya Pavilion School", location: "Goa", alt: "Open air school courtyard" },
  { src: project6, title: "Bazaar Hall", location: "Agra", alt: "Public market hall" },
];

const Index = () => {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Chhāon Collective - Public Architecture"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="relative z-10 flex items-center justify-between h-full px-6 md:px-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-mono-body text-xs tracking-widest uppercase text-foreground mix-blend-difference"
          >
            Chhāon Collective
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="font-display text-[10vw] md:text-[7vw] lg:text-[5.6vw] leading-none font-light tracking-wide text-primary flex items-baseline gap-[2vw] md:gap-[1.5vw]">
              <span>छाँव</span>
              <span className="font-mono-body text-[5vw] md:text-[3.6vw] lg:text-[2.8vw] tracking-[0.15em] uppercase">Chhāon</span>
              <span>છાંવ</span>
            </h1>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            onClick={() => setInfoOpen(true)}
            className="font-mono-body text-xs tracking-widest text-foreground hover:text-primary transition-colors mix-blend-difference"
          >
            (Information)
          </motion.button>
        </div>
      </section>

      

      <InfoOverlay isOpen={infoOpen} onClose={() => setInfoOpen(false)} />
    </div>
  );
};

export default Index;
