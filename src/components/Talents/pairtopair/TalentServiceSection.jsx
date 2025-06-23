import React from "react";

export default function TalentServiceSection({
  title,
  image,
  imageAlt,
  problem,
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
    <div className="relative">
      <img
        src={image}
        alt={imageAlt}
        className="w-[600px] h-[600px] border border-white shadow-2xl"
      />
    </div>
  );

  const ContentComponent = () => (
    <div className="space-y-8">
      {/* Challenge Section */}
      <div>
        <h2 className="text-3xl font-bebas mb-4 text-white uppercase">
          PROBLEM
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed font-roboto">
          {problem}
        </p>
      </div>

      {/* Solution Section */}
      <div>
        <h2 className="text-3xl font-bebas mb-4 text-white uppercase">
          ATI'S SOLUTION
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6 font-roboto">
          {solution}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#de60ca] text-sm">✓</span>
                </div>
                <div>
                  <span className="text-gray-300 font-roboto">
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
      <div className="text-white font-roboto flex items-center justify-center tracking-wider mt-48">
        <div className="text-5xl font-bebas uppercase bg-[#383b19] w-full py-6 flex items-center justify-center">
          {title}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="min-h-screen text-white px-48 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
        <div className="text-white flex flex-col items-center justify-center tracking-wider space-y-6">
          <div className="text-5xl font-bebas uppercase w-full flex items-center justify-center">
            {ctamain}
          </div>
          <div className="text-sm font-roboto w-full flex items-center justify-center ">
            {ctaquote}
          </div>
          <div className="space-y-3 ">
            {ctaFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <span className="text-[#de60ca] text-lg mt-1">✓</span>
                <span className="text-white font-roboto">{feature}</span>
              </div>
            ))}
          </div>
          <div className="font-bebas text-xl">
            <button
              onClick={onCtaClick}
              className="hover:bg-[#de60ca] py-4 px-10 hover:text-black border-4 border-[#de60ca] text-[#de60ca] tracking-wider"
            >
              {ctaText}
            </button>
          </div>
        </div>

      )}
    </>
  );
}