import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroVideo from "../videos/hero-video.mp4";

const Hero = ({ lang }) => {
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setTimeout(() => {
        videoRef.current.play().catch(() => {});
      }, 3000); // 3 saniye bekle
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-800 to-gray-900 opacity-80"></div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"
          }`}
      >
        <h1 className="text-3xl md:text-5xl font-semibold text-white max-w-3xl mx-auto">
          {lang === "tr"
            ? "Hedefini yükseklerde tutan bir mühendisin hikayesine hoşgeldiniz."
            : "Welcome to the story of an engineer who sets his goals high."}
        </h1>
      </div>

      {/* Scroll Icon */}
      {showContent && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce transition-opacity duration-1000">
          <ChevronDown className="text-white" size={32} />
        </div>
      )}
    </section>
  );
};

export default Hero;
