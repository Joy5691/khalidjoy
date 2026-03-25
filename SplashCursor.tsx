import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { VIDEO_PROJECTS } from '../constants';
import { Film, ChevronLeft, ChevronRight } from 'lucide-react';

const VideoEditing: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [carousel.current]);

  const slideLeft = () => {
    const nextIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const slideRight = () => {
    const nextIndex = Math.min(currentIndex + 1, VIDEO_PROJECTS.length - 1);
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const scrollToIndex = (index: number) => {
    if (!carousel.current) return;
    // Calculate position: roughly card width (400px) + gap (32px)
    // Adjust logic for responsive widths if needed, here we use a rough estimate or percentage
    // For simplicity with drag, we animate the x value
    const cardWidth = carousel.current.children[0]?.clientWidth || 0;
    const gap = 32; // 2rem
    const newX = -(index * (cardWidth + gap));
    
    // Clamp
    const constrainedX = Math.max(Math.min(newX, 0), -width);
    
    animate(x, constrainedX, {
        type: "spring",
        stiffness: 300,
        damping: 30
    });
  };

  return (
    <section id="creative" className="py-20 bg-stone-900 text-white relative z-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-600 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
             <Film className="text-blue-500 w-6 h-6" />
             <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">Creative Works</span>
          </div>
          <h2 className="text-3xl font-display font-bold text-white mb-4">Video Editing & Production</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Swipe to explore my video projects, featuring advanced color grading, motion graphics, and cinematic storytelling.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
             {/* Navigation Buttons (Desktop) */}
            <div className="hidden md:flex justify-end gap-2 mb-4">
                <button onClick={slideLeft} className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 border border-stone-600 transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={slideRight} className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 border border-stone-600 transition-colors">
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            <motion.div 
                ref={carousel} 
                className="cursor-grab active:cursor-grabbing overflow-hidden"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div 
                    drag="x" 
                    dragConstraints={{ right: 0, left: -width }}
                    style={{ x }}
                    className="flex gap-8"
                >
                    {VIDEO_PROJECTS.map((video, index) => (
                        <motion.div
                            key={video.id}
                            className="min-w-[300px] md:min-w-[500px] bg-stone-800 rounded-xl overflow-hidden border border-stone-700 shadow-2xl group pointer-events-none md:pointer-events-auto"
                        >
                            <div className="relative aspect-video w-full bg-black">
                                <iframe 
                                    src={video.videoUrl} 
                                    title={video.title}
                                    className="w-full h-full object-cover pointer-events-auto"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                {video.title}
                                </h3>
                                <p className="text-stone-400 text-sm">
                                {video.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
        
        <div className="text-center mt-6 md:hidden text-stone-500 text-sm">
            Swipe left or right to view more
        </div>

      </div>
    </section>
  );
};

export default VideoEditing;