import React, { useEffect, useRef, useState } from "react";

const ServicesSection = ({ title, image, imageAlt, services }) => {
  const rightContentRef = useRef(null);
  const containerRef = useRef(null);
  const mainContentRef = useRef(null);
  const [isHoveringMainContent, setIsHoveringMainContent] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      const container = containerRef.current;
      const rightContent = rightContentRef.current;

      if (!container || !rightContent || !isHoveringMainContent) return;

      const containerRect = container.getBoundingClientRect();
      const isInView =
        containerRect.top < window.innerHeight && containerRect.bottom > 0;

      if (isInView) {
        const { scrollTop, scrollHeight, clientHeight } = rightContent;
        const isAtTop = scrollTop === 0;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

        // If scrolling down and not at bottom, scroll content
        if (e.deltaY > 0 && !isAtBottom) {
          e.preventDefault();
          rightContent.scrollTop += 60;
        }
        // If scrolling up and not at top, scroll content
        else if (e.deltaY < 0 && !isAtTop) {
          e.preventDefault();
          rightContent.scrollTop -= 60;
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isHoveringMainContent]);

  return (
    <div ref={containerRef} className="min-h-screen text-white pb-20 px-20">

      {/* Main Content */}
      <div
        ref={mainContentRef}
        className="flex flex-col lg:flex-row items-start justify-center px-4 lg:px-8 gap-8 lg:gap-16 min-h-[80vh]"
        onMouseEnter={() => setIsHoveringMainContent(true)}
        onMouseLeave={() => setIsHoveringMainContent(false)}
      >
        {/* Left Side - Image */}
        <div className="relative w-full lg:w-1/2 max-w-2xl mr-10 lg:sticky lg:top-8">
          <img
            src={image}
            alt={imageAlt}
            className="w-full md:h-[32rem] lg:h-[40rem] object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div
          ref={rightContentRef}
          className="relative w-full lg:w-1/2 max-w-2xl space-y-8 font-bebas overflow-y-auto max-h-[80vh] pr-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {services.map((service, index) => (
            <React.Fragment key={index}>
              <div>
                <h2 className="text-xl md:text-5xl mb-4 ">
                  {service.title}
                </h2>
              </div>
              <div>
                <p className="text-lg text-gray-300 leading-relaxed font-roboto">
                  {service.content}
                </p>
              </div>
              
              <div className="h-px bg-gray-500 w-full"></div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Background geometric elements */}
      <div className="fixed inset-0 pointer-events-none opacity-10 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-purple-500 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-pink-500 rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20"></div>
        <div className="absolute top-3/4 left-1/6 w-48 h-48 border border-purple-400 rotate-[-30deg] opacity-30"></div>
        <div className="absolute bottom-1/6 left-1/2 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-15"></div>
      </div>
    </div>
  );
};

export default ServicesSection; 