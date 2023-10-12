import { FaRegComment } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import testimonial1 from "../assets/testimonials/testimonial-1.webp";
import testimonial2 from "../assets/testimonials/testimonial-2.webp";
import testimonial3 from "../assets/testimonials/testimonial-3.webp";
import testimonial4 from "../assets/testimonials/testimonial-4.webp";
import testimonial5 from "../assets/testimonials/testimonial-5.webp";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      key: -1,
      image: testimonial1,
      name: "Loic Durand",
      post: t("testimo.student"),
      message: t("testimo.loicMsg"),
    },
    {
      key: 0,
      image: testimonial2,
      name: "Merline Yassa",
      post: "Entrepreneur",
      message: t("testimo.merlineMsg"),
    },
    {
      key: 1,
      image: testimonial3,
      name: "Moustapha Aka",
      post: t("testimo.manager"),
      message: t("testimo.akaMsg"),
    },
    {
      key: 2,
      image: testimonial4,
      name: "Cyril feussi",
      post: t("testimo.student"),
      message: t("testimo.cyrilMsg"),
    },
    {
      key: 2,
      image: testimonial5,
      name: "Dimitri Mabon",
      post: t("testimo.devFront"),
      message: t("testimo.dimiMsg"),
    },
  ];
  return (
    <section className="w-full bg-[#f7f7f7] dark:bg-dark py-10">
      <div className="relative z-0 flex flex-col mx-auto testimonials padding max-w-7xl md:flex-row">
        <div className="relative p-5 md:h-[300px] h-fit w-full md:w-1/2 break-words">
          <p className="sectionSubText">{t("clientsReviews")}</p>
          <h2 className="sectionHeadText">{t("testimonials")}</h2>
          <p className="mb-3">{t("testimonialsText")}</p>
          <button type="button" className="btn mb-28 md:mb-0">
            <span className="mr-2">{t("testimonial")}</span>
            <FaRegComment />
          </button>
        </div>
        <div className="outer relative flex justify-center items-center h-[300px] w-full md:w-1/2">
          {testimonials.map((testimonial, key) => (
            <div
              key={key}
              className="absolute flex items-center justify-around w-full gap-6 p-5 border-2 border-white shadow-lg opacity-0 pointer-events-none card max-w-fit bg-light dark:bg-tertiary dark:border-transparent dark:shadow-none rounded-xl"
              style={{
                "--delay": testimonial.key,
              }}
            >
              <div className="content">
                <div className="absolute w-24 h-24 p-1 bg-white left-3 rounded-xl shadow-card">
                  <img
                    className="w-full h-full mr-3 rounded-xl"
                    src={testimonial.image}
                    alt=""
                  />
                </div>
                <div className="ml-6 capitalize details">
                  <span className="name">{testimonial.name}</span>
                  <p className="">{testimonial.post}</p>
                  <p className="text-sm lowercase transition-all opacity-60 line-clamp-2 hover:line-clamp-5">
                    {testimonial.message}
                  </p>
                </div>
              </div>
              {/* <a className="h-8 btn dark:bg-primary" href="#">
              like <AiFillHeart />
            </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
