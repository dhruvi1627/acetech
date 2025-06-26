import React from "react";

export default function TalentServiceSection({
  title,
  image,
  imageAlt,
  problemtitle,
  problem,
  solutiontitle,
  solution,
  features = [],
  imagePosition = "left", // "left" or "right"
  ctamain,
  ctaquote,
  ctaText,
  onCtaClick,
  ctaFeatures = [],
}) {
  const ImageComponent = () => (
    <div className="relative flex justify-center">
      <img
        src={image}
        alt={imageAlt}
        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto aspect-square object-cover border border-white shadow-2xl"
      />
    </div>
  );

  const ContentComponent = () => (
    <div className="space-y-6 md:space-y-8">
      {/* Challenge Section */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bebas mb-3 md:mb-4 text-white uppercase">
          {problemtitle}
        </h2>
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-roboto">
          {problem}
        </p>
      </div>

      {/* Solution Section */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bebas mb-3 md:mb-4 text-white uppercase">
          {solutiontitle}
        </h2>
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 md:mb-6 font-roboto">
          {solution}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <div className="space-y-3 md:space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#de60ca] text-sm">✓</span>
                </div>
                <div>
                  <span className="text-gray-300 font-roboto text-sm sm:text-base">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Title Section */}
      <div className="text-white font-roboto flex items-center justify-center tracking-wider mt-24 sm:mt-32 md:mt-40 lg:mt-48">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bebas uppercase bg-[#383b19] w-full py-4 sm:py-6 flex items-center justify-center text-center px-4">
          {title}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="min-h-screen text-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 mt-8 sm:mt-12 md:mt-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {imagePosition === "left" ? (
              <>
                <ImageComponent />
                <ContentComponent />
              </>
            ) : (
              <>
                <ContentComponent />
                <ImageComponent />
              </>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {ctaText && onCtaClick && (
        <div className="text-white flex flex-col items-center justify-center tracking-wider space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-12 mt-12 sm:mt-16 md:mt-6 mb-10">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bebas uppercase w-full flex items-center justify-center text-center">
            {ctamain}
          </div>
          <div className="text-xs sm:text-sm font-roboto w-full flex items-center justify-center text-center max-w-4xl">
            {ctaquote}
          </div>
          <div className="space-y-2 sm:space-y-3 max-w-4xl">
            {ctaFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <span className="text-[#de60ca] text-base sm:text-lg mt-1 flex-shrink-0">
                  ✓
                </span>
                <span className="text-white font-roboto text-sm sm:text-base">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          <div className="font-bebas text-base sm:text-lg md:text-xl">
            <button
              onClick={onCtaClick}
              className="hover:bg-[#de60ca] py-3 sm:py-4 px-6 sm:px-8 md:px-10 hover:text-black border-2 sm:border-4 border-[#de60ca] text-[#de60ca] tracking-wider transition-colors duration-300"
            >
              {ctaText}
            </button>
          </div>
        </div>
      )}
    </>
  );
}