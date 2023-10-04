const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <div
      className="relative cursor-pointer service-card bg-[#f7f7f7] dark:bg-tertiary rounded-[20px] p-4 min-h-[140px] flex justify-evenly items-center flex-col border-2 border-white dark:border-b-primary dark:border-transparent w-full xs:w-[230px]"
      data-aos="fade-up"
      data-aos-delay={index * 200}
    >
      <img
        loading="lazy"
        src={icon}
        alt="web-development"
        className="object-contain w-10 h-10 mb-3"
      />

      <h3 className="text-lg font-bold text-center text-writing dark:text-white">
        {title}
      </h3>
      <div
        className={`description text-center bottom-0 opacity-0 absolute z-0 bg-white dark:bg-tertiary rounded-[20px] p-4 min-h-[140px] flex justify-evenly items-center flex-col md:w-[230px] shadow-card dark:shadow-none dark:border-[1px] dark:border-primary`}
      >
        {description}
      </div>
    </div>
  );
};
export default ServiceCard;
