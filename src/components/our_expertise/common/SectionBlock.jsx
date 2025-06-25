import React from "react";

const SectionBlock = ({
  subtitle,
  title,
  description,
  descriptionClass = "",
  buttonText,
  onButtonClick,
  children,
}) => (
  <section className={" py-20 px-12 mx-8 text-white tracking-wider"}>
    <div className="container mx-auto px-6 lg:px-8">
      {subtitle && (
        <div className="max-w-5xl mx-auto text-center mb-8">
          <p
            className={`text-lg font-medium tracking-wider uppercase font-bebas`}
          >
            {subtitle}
          </p>
        </div>
      )}
      {title && (
        <div className="max-w-5xl mx-auto text-center mb-8">
          <h2 className={`text-5xl font-bold font-bebas`}>
            {title}
          </h2>
        </div>
      )}
      {description && (
        <div className="max-w-8xl mx-auto mb-8">
          <p
            className={`text-lg text-gray-300 leading-relaxed font-roboto ${descriptionClass}`}
          >
            {description}
          </p>
        </div>
      )}
      {children}
      {buttonText && (
        <div className="flex justify-center">
          <button
            className={`border border-[#e156e6] text-[#e156e6] hover:bg-[#e156e6] hover:text-black font-bebas px-12 py-4 text-xl transition duration-300 tracking-wider`}
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  </section>
);

export default SectionBlock;
