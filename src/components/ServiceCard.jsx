const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <div data-aos="fade-up" data-aos-delay={index * 200}>
      <div className="bg-[#f7f7f7] dark:bg-tertiary rounded-[20px] p-4 min-h-[140px] flex justify-evenly items-center flex-col border-2 border-white dark:border-b-primary dark:border-transparent md:w-[230px]">
        <img
          loading="lazy"
          src={icon}
          alt="web-development"
          className="object-contain w-10 h-10 mb-3"
        />

        <h3 className="text-lg font-bold text-center text-writing dark:text-white">
          {title}
        </h3>
        <p className="text-center opacity-80">{description}</p>
      </div>
    </div>
  );
};
export default ServiceCard;
