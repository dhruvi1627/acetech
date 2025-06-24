import React from "react";

export default function WhyStartupAcetech({
  title,
  image,
  imageAlt,
  problemtitle,
  problem,
  solutiontitle,
  solution,
  imagePosition = "left", // "left" or "right"
  ctamain,
  ctaquote,
  ctaText,
  onCtaClick,
}) {
  const ImageComponent = () => (
    <div className="relative">
      <img
        src={image}
        alt={imageAlt}
        className="w-[500px] h-[500px] border border-white shadow-2xl"
      />
    </div>
  );

  const ContentComponent = () => (
    <div className="space-y-8">
      {/* Challenge Section */}
      <div>
        <h2 className="text-4xl font-bebas mb-6 text-white uppercase tracking-wide">
          {problemtitle}
        </h2>
        <p className="text-gray-200 text-lg leading-relaxed font-roboto">
          {problem}
        </p>
      </div>

      {/* Solution Section */}
      <div>
        <h2 className="text-4xl font-bebas mb-6 text-white uppercase tracking-wide">
          {solutiontitle}
        </h2>
        <p className="text-gray-200 text-lg leading-relaxed font-roboto">
          {solution}
        </p>
      </div>

      {/* why it works */}
      <div>
        <h2 className="text-4xl font-bebas mb-6 text-white uppercase tracking-wide">
          {ctamain}
        </h2>
        <p className="text-gray-200 text-lg leading-relaxed font-roboto">
          {ctaquote}
        </p>
      </div>

      {/* button */}
      <div className="font-bebas text-xl">
        <button
          onClick={onCtaClick}
          className="bg-white py-4 px-10 text-black tracking-wider flex items-center gap-3 hover:bg-gray-100 transition-colors"
        >
          {ctaText}
          <span className="text-2xl">→</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Main Content Section */}
      <div className=" text-white py-8 bg-[#620e6f] mt-4 my-4">
        <div className="container mx-auto px-8 max-w-7xl">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bebas uppercase text-white tracking-wider">
              {title}
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
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
    </>
  );
}
