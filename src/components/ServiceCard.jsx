import Tilt from "react-tilt";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div data-aos="fade-up" data-aos-delay={index * 200}>
      <Tilt className="xs:w-[250px] w-full">
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-white dark:bg-tertiary rounded-[20px] py-5 px-12 min-h-[140px] flex justify-evenly items-center flex-col">
            <img
              loading="lazy"
              src={icon}
              alt="web-development"
              className="w-10 h-10 object-contain"
            />

            <h3 className="text-writing dark:text-white text-lg font-bold text-center">
              {title}
            </h3>
          </div>
        </div>
      </Tilt>
    </div>
  );
};
export default ServiceCard;
