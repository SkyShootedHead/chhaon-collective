import { motion } from "framer-motion";

interface ProjectImageProps {
  src: string;
  alt: string;
  title: string;
  location: string;
  index: number;
}

const ProjectImage = ({ src, alt, title, location, index }: ProjectImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index % 2 === 0 ? 0 : 0.15 }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          width={1600}
          height={1067}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-500" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="font-display text-lg md:text-xl text-foreground">{title}</p>
        <p className="font-mono-body text-xs text-foreground/70 tracking-widest uppercase mt-1">{location}</p>
      </div>
    </motion.div>
  );
};

export default ProjectImage;
