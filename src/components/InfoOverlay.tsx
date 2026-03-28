import { motion, AnimatePresence } from "framer-motion";

interface InfoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoOverlay = ({ isOpen, onClose }: InfoOverlayProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl px-8 md:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-wide text-primary mb-8">
              Chhāon
            </h2>
            <p className="font-display text-lg md:text-xl font-light leading-relaxed text-foreground/80 mb-6 italic">
              tr: shade
            </p>
            <p className="font-mono-body text-sm md:text-base leading-relaxed text-muted-foreground mb-8">
              Chhāon is an Architecture, Research and Design studio with a focus on Public Architecture. 
              Chhāon's quest lies in people-centric and contextual design responses to complex problems. 
              Our practice undertakes a range of projects encompassing various scales and typologies. 
              Every project undertaken is a sensitive and relevant response to the uniqueness of the 
              individual site context, culture and people.
            </p>
            <div className="flex gap-8 font-mono-body text-xs text-muted-foreground tracking-widest uppercase mb-4">
              <span>Goa</span>
              <span>Agra</span>
              <span>Ahmedabad</span>
            </div>
            <a
              href="mailto:chhaon.collective@gmail.com"
              className="font-mono-body text-xs text-muted-foreground tracking-widest hover:text-primary transition-colors"
            >
              chhaon.collective@gmail.com
            </a>

            <button
              onClick={onClose}
              className="mt-12 font-mono-body text-xs tracking-widest uppercase text-primary hover:text-foreground transition-colors"
            >
              (Close)
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoOverlay;
