import { testimonials } from "../database";

const Testimonials = () => {
  return (
    <section className="w-full bg-[#f7f7f7] dark:bg-dark py-10">
      <div className="relative z-0 flex flex-col mx-auto testimonials padding max-w-7xl md:flex-row">
        <div className="relative p-5 md:h-[300px] h-fit w-full md:w-1/2 break-words">
          <p className="sectionSubText" data-aos="zoom-out-left">
            MY CLIENT REVIEWS
          </p>
          <h2
            className="sectionHeadText"
            data-aos="zoom-out-left"
            data-aos-delay="200"
          >
            Testimonials
          </h2>
          <p className="mb-28 md:mb-0" data-aos="fade-up" data-aos-delay="300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur praesentium consequatur laborum unde, optio facere
            omnis iste ipsum alias doloremque beatae maxime, culpa distinctio
            totam recusandae porro hic illo ullam.
          </p>
        </div>
        <div
          className="outer relative flex justify-center items-center h-[300px] w-full md:w-1/2"
          data-aos="zoom-out-up"
        >
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
