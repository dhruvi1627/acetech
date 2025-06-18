import {
  Mail,
  MapPin,
  User,
  Phone,
  MessageCircle,
  Send,
  Pencil,
} from "lucide-react";
import React, { useState } from "react";

export default function ContactUsHero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agree: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="w-full text-white py-16 px-4 md:px-8 lg:px-16 font-roboto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <h3 className="text-xl font-medium tracking-widest font-bebas">
              CONTACT US
            </h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bebas">
              FOR INQUIRIES AND
              <br /> SUPPORT
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              We are here to assist you! If you have any questions or need
              further information, please feel free to reach out to us. Our team
              is dedicated to providing you with the support you need. Thank you
              for choosing our services!
            </p>
            <div className="space-y-6 font-roboto">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 text-pink-400 mt-1">
                  <MapPin />
                </div>
                <div className="text-gray-300">
                  <p className="font-medium">63 rue Tolbiac</p>
                  <p>75013 Paris</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 text-pink-400">
                  <Mail />
                </div>
                <p className="text-gray-300 font-bebas">
                  info@acetechinside.tech
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="p-8 rounded-lg backdrop-blur-sm font-roboto">
            <div className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-gray-300 border-0 border-b-2 border-gray-600 focus-within:border-pink-400">
                    <User className="w-5 h-5 mt-3 flex-shrink-0" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 bg-transparent focus:outline-none text-white placeholder-white transition-colors"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-gray-300 border-0 border-b-2 border-gray-600 focus-within:border-pink-400">
                    <Mail className="w-5 h-5 mt-3 flex-shrink-0" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 bg-transparent focus:outline-none text-white placeholder-white transition-colors"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-gray-300 border-0 border-b-2 border-gray-600 focus-within:border-pink-400">
                    <Phone className="w-5 h-5 mt-3 flex-shrink-0" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 bg-transparent focus:outline-none text-white placeholder-white transition-colors"
                      placeholder="Enter your phone"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-gray-300 border-0 border-b-2 border-gray-600 focus-within:border-pink-400">
                    <MessageCircle className="w-5 h-5 mt-3 flex-shrink-0" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 bg-transparent focus:outline-none text-white placeholder-white transition-colors"
                      placeholder="Enter subject"
                    />
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-gray-300 border-0 border-b-2 border-gray-600 focus-within:border-pink-400">
                  <Pencil className="w-5 h-5 mt-3 flex-shrink-0" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 bg-transparent focus:outline-none text-white placeholder-white transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                <button
                  type="button"
                  className="flex items-center gap-2 px-8 py-3 text-white bg-[#e156e6] hover:bg-[#c22baa] font-bebas"
                >
                  <Send className="w-4 h-4" />
                  GET IN TOUCH
                </button>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleInputChange}
                    className="w-4 h-4 mt-1 border-gray-600 rounded focus:ring-pink-500 focus:ring-2 bg-transparent"
                  />
                  <span className="text-sm text-gray-300 leading-relaxed">
                    I agree that my data is{" "}
                    <a href="#" className="underline hover:text-white">
                      collected and stored
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
