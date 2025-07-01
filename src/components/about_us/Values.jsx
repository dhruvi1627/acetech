import id from "../../assets/images/about_us/id-card.png";
import gears from "../../assets/images/about_us/gears.png";
import group from "../../assets/images/about_us/multiple-users-silhouette.png";
import chat from "../../assets/images/about_us/wechat.png";

const Values = () => {
  const values = [
    {
      icon: id,
      title: "INNOVATION",
      description:
        "We are committed to pushing the boundaries of what's possible. At ATI, we foster a culture of continuous improvement, encouraging our teams to explore new ideas, technologies, and methodologies that drive progress and deliver exceptional value to our clients.",
    },
    {
      icon: gears,
      title: "AGILITY",
      description:
        "In a world that's constantly changing, agility is key to success. We embrace agile methodologies in everything we do, ensuring that we can quickly adapt to new challenges and opportunities, while delivering high-quality results on time and within budget.",
    },
    {
      icon: group,
      title: "INTEGRITY",
      description:
        "Trust is the foundation of our relationships with clients, partners, and employees. We conduct our business with the highest standards of ethics and transparency, ensuring that we always act in the best interests of our clients and stakeholders.",
    },
    {
      icon: chat,
      title: "COLLABORATION",
      description:
        "Great solutions are the result of great teamwork. We believe in the power of collaboration, both within our teams and with our clients. By working closely together, we create solutions that are not only innovative but also tailored to meet the unique needs of each client.",
    },
  ];

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase font-bebas tracking-wider">
            Our Values
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 font-roboto w-full">
          {values.map((value, index) => (
            <div
              key={index}
              className="border border-gray-700 p-6 sm:p-8 bg-black/30 flex flex-col h-full transition-colors duration-300"
            >
              <div className="py-20">
                {/* Icon */}
                <div className="pb-8 sm:mb-6 flex">
                  <img
                    src={value.icon}
                    alt={value.title}
                    className="w-12 h-12 md:w-16 md:h-16 mx-auto md:mx-0 mb-4 md:mb-0"
                  />
                </div>
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide">
                  {value.title}
                </h3>
                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;