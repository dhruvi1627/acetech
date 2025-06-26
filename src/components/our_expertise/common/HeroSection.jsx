import React from "react";

const HeroSection = ({
  title,
  subtitle,
  description,
  leftImage,
  rightImage,
  leftImageAlt = "",
  rightImageAlt = "",
  showDecor = false,
}) => {
  return (
    <section className="text-white pb-20 mb-8 lg:px-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start pt-20">
          {/* Left Side Content */}
          <div className="space-y-8 tracking-wider">
            <div className="space-y-4">
              {subtitle && (
                <p className="text-lg font-medium tracking-wider uppercase font-bebas">
                  {subtitle}
                </p>
              )}
              {title && (
                <h1 className="text-5xl font-bold mb-4 font-bebas">{title}</h1>
              )}
            </div>
            {description && (
              <p className="text-gray-300 leading-relaxed max-w-2xl font-roboto">
                {description}
              </p>
            )}
            {leftImage && (
              <div className="flex justify-end">
                <div className="relative overflow-hidden shadow-2xl mt-8 w-1/2">
                  <img
                    src={leftImage}
                    alt={leftImageAlt}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            )}
          </div>
          {/* Right Side Image - Sticky */}
          <div className="sticky top-0">
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src={rightImage}
                alt={rightImageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
            {showDecor && (
              <>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
