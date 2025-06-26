import React, { useEffect, useRef, useState } from "react";
import ATI_Apart from "../../assets/images/about_us/ATI_Apart.jpg";

const ATI = () => {
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

    // Add event listener to window for global scroll capture
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isHoveringMainContent]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen text-white px-3 sm:px-6 md:px-10 lg:px-20 overflow-x-hidden mb-10"
    >
      {/* Header */}
      <div className="text-center py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-wider font-bebas">
          WHAT SETS ATI APART?
        </h1>
      </div>

      {/* Main Content */}
      <div
        ref={mainContentRef}
        className="flex flex-col lg:flex-row items-start justify-center px-0 sm:px-2 md:px-4 lg:px-8 gap-6 md:gap-8 lg:gap-16 min-h-[70vh]"
        onMouseEnter={() => setIsHoveringMainContent(true)}
        onMouseLeave={() => setIsHoveringMainContent(false)}
      >
        {/* Left Side - Image */}
        <div className="relative w-full lg:w-1/2 max-w-2xl mb-6 lg:mb-0 mr-0 lg:mr-10 lg:sticky lg:top-8">
          <img
            src={ATI_Apart}
            alt="Team collaboration in modern office space with agile methodologies"
            className="w-full h-56 sm:h-72 md:h-[28rem] lg:h-[40rem] object-cover rounded-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div
          ref={rightContentRef}
          className="relative w-full lg:w-1/2 max-w-2xl space-y-6 md:space-y-8 font-bebas overflow-y-auto max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] pr-0 md:pr-4"
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

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 bg-[#f14fd7] bg-clip-text text-transparent">
              AGILE AND LEAN
              <br className="hidden sm:block" />
              EXPERTISE
            </h2>
          </div>
          <div className="h-px bg-gray-500 w-full"></div>
          <div>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-100 font-medium">
              ATI IS BUILT ON A FOUNDATION OF AGILE AND LEAN PRINCIPLES. OUR
              <br className="hidden sm:block" />
              APPROACH ENSURES THAT WE DELIVER SOLUTIONS THAT ARE
              <br className="hidden sm:block" />
              EFFICIENT, FLEXIBLE, AND FOCUSED ON PROVIDING MAXIMUM VALUE
              <br className="hidden sm:block" />
              WITH MINIMAL WASTE. WE HELP BUSINESSES ACHIEVE FASTER
              <br className="hidden sm:block" />
              TIME-TO-MARKET, REDUCE COSTS, AND STAY AHEAD OF THE
              <br className="hidden sm:block" />
              COMPETITION.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 bg-[#f14fd7] bg-clip-text text-transparent">
              COMPREHENSIVE
              <br className="hidden sm:block" />
              SOLUTION
            </h2>
          </div>
          <div className="h-px bg-gray-500 w-full"></div>
          <div>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-100 font-medium">
              From end-to-end startup support to next-gen tech
              <br className="hidden sm:block" />
              integration, we offer a wide range of services that cover
              <br className="hidden sm:block" />
              every aspect of the technology landscape. Whether you
              <br className="hidden sm:block" />
              need expert talent, advanced technology integration, or
              <br className="hidden sm:block" />
              strategic consulting, ATI has the expertise and resources
              <br className="hidden sm:block" />
              to help you succeed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 bg-[#f14fd7] bg-clip-text text-transparent">
              CUSTOMER-CENTRIC
              <br className="hidden sm:block" />
              APPROACH
            </h2>
          </div>
          <div className="h-px bg-gray-500 w-full"></div>
          <div>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-100 font-medium">
              At ATI, our clients are at the heart of everything we do. We
              <br className="hidden sm:block" />
              take the time to understand your unique challenges and
              <br className="hidden sm:block" />
              goals, working closely with you to develop customized
              <br className="hidden sm:block" />
              solutions that drive real results. Our commitment to your
              <br className="hidden sm:block" />
              success is what drives us to go above and beyond in every
              <br className="hidden sm:block" />
              project.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 bg-[#f14fd7] bg-clip-text text-transparent">
              GLOBAL REACH, LOCAL
              <br className="hidden sm:block" />
              EXPERTISE
            </h2>
          </div>
          <div className="h-px bg-gray-500 w-full"></div>
          <div>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-100 font-medium">
              With a diverse team of professionals and a global network
              <br className="hidden sm:block" />
              of partners, ATI combines international experience with
              <br className="hidden sm:block" />
              local insights. We understand the nuances of different
              <br className="hidden sm:block" />
              markets and industries, enabling us to provide solutions
              <br className="hidden sm:block" />
              that are both globally informed and locally relevant.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 bg-[#f14fd7] bg-clip-text text-transparent">
              INNOVATION DRIVEN
              <br className="hidden sm:block" />
              CULTURE
            </h2>
          </div>
          <div className="h-px bg-gray-500 w-full"></div>
          <div>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-100 font-medium">
              Innovation is at the core of everything we do at ATI. We
              <br className="hidden sm:block" />
              continuously explore emerging technologies and
              <br className="hidden sm:block" />
              methodologies to ensure our clients stay at the forefront
              <br className="hidden sm:block" />
              of their industries. Our culture of innovation drives us to
              <br className="hidden sm:block" />
              think creatively and deliver cutting-edge solutions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 bg-[#f14fd7] bg-clip-text text-transparent">
              CUTTING-EDGE
              <br className="hidden sm:block" />
              TECHNOLOGY
            </h2>
          </div>
          <div className="h-px bg-gray-500 w-full"></div>
          <div className="pb-4 md:pb-8">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-100 font-medium">
              We leverage the latest technologies and frameworks to
              <br className="hidden sm:block" />
              build robust, scalable solutions. From AI and machine
              <br className="hidden sm:block" />
              learning to cloud computing and blockchain, we stay
              <br className="hidden sm:block" />
              ahead of technological trends to provide our clients
              <br className="hidden sm:block" />
              with competitive advantages in their respective markets.
            </p>
          </div>
        </div>
      </div>

      {/* Background geometric elements */}
      <div className="fixed inset-0 pointer-events-none opacity-10 -z-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 border border-purple-500 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 border border-pink-500 rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20"></div>
        <div className="absolute top-3/4 left-1/6 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 border border-purple-400 rotate-[-30deg] opacity-30"></div>
        <div className="absolute bottom-1/6 left-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-15"></div>
      </div>
    </div>
  );
};

export default ATI;
