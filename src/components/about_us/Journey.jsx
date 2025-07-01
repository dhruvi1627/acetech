import React from "react";
import { Image, Users, Eye } from "lucide-react";
import thumbnail from "../../assets/images/about_us/video-thumbnails.jpg";
import images from "../../assets/images/about_us/images.png";
import people from "../../assets/images/about_us/people.png";
import gallery from "../../assets/images/about_us/gallery.png";

const Journey = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Image Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={thumbnail}
          alt="Futuristic cityscape with digital elements"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>

      {/* Our Journey Section */}
      <div className="relative py-20 px-4">
        {/* Background effects */}
        <div className="absolute"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-wider font-bebas">
              OUR JOURNEY
            </h2>
          </div>

          {/* Journey Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Founded on Innovation */}
            <div className="relative">
              <div className="bg-[#242222] p-8 h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#242222] rounded-lg flex items-center justify-center">
                    <img
                      src={images}
                      alt="founded on innovation"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-6 text-center tracking-wider font-bebas">
                  FOUNDED ON INNOVATION
                </h3>

                <p className="text-gray-300 text-center leading-relaxed font-roboto">
                  Since our inception, ATI has been dedicated to helping
                  businesses harness the power of technology. Over the years, we
                  have grown from a small startup into a leading tech company,
                  serving clients across various industries and geographies.
                </p>
              </div>
            </div>

            {/* Card 2 - Driven by Success */}
            <div className="relative">
              <div className="bg-[#242222]  p-8 h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#242222] rounded-lg flex items-center justify-center">
                    <img
                      src={people}
                      alt="founded on innovation"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-6 text-center tracking-wider font-bebas">
                  DRIVEN BY SUCCESS
                </h3>

                <p className="text-gray-300 text-center leading-relaxed font-roboto">
                  Our journey is marked by the success stories of the clients we
                  have helped along the way. From startups that have scaled to
                  global enterprises to organizations that have transformed
                  their operations, ATI's impact is seen in the tangible results
                  we deliver.
                </p>
              </div>
            </div>

            {/* Card 3 - Looking to the Future */}
            <div className="relative">
              <div className="bg-[#242222] p-8 h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#242222] rounded-lg flex items-center justify-center">
                    <img
                      src={gallery}
                      alt="founded on innovation"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-6 text-center tracking-wider font-bebas">
                  LOOKING TO THE FUTURE
                </h3>

                <p className="text-gray-300 text-center leading-relaxed font-roboto">
                  As we continue to grow, our focus remains on innovation,
                  excellence, and client success. We are excited about the
                  future and the new opportunities it brings, and we are
                  committed to being at the forefront of the technological
                  revolution, driving positive change for businesses and
                  society.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient effect */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </div>
  );
};

export default Journey;
