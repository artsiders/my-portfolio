import { FaRegComment } from "react-icons/fa";
import { testimonials } from "../database";

const Testimonials = () => {
  return (
    <section className="w-full bg-[#f7f7f7] dark:bg-dark py-10">
      <div className="relative z-0 flex flex-col mx-auto testimonials padding max-w-7xl md:flex-row">
        <div className="relative p-5 md:h-[300px] h-fit w-full md:w-1/2 break-words">
          <p className="sectionSubText">MY CLIENT REVIEWS</p>
          <h2 className="sectionHeadText">Testimonials</h2>
          <p className="mb-3">
            Discover the testimonials of my satisfied clients. Their authentic
            and positive reviews testify to the quality of my services and my
            ability to meet their needs.
          </p>
          <button type="button" className="btn mb-28 md:mb-0">
            <span className="mr-2">Testimonial</span>
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
