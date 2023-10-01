import { testimonials } from "../database";

const Testimonials = () => {
  return (
    <section className="w-full bg-[#f7f7f7] dark:bg-dark py-10">
      <div className="testimonials padding max-w-7xl mx-auto relative z-0 flex flex-col md:flex-row">
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
              className="card flex items-center max-w-fit justify-around gap-6 bg-light dark:bg-tertiary border-2 border-white dark:border-transparent w-full p-5 opacity-0 pointer-events-none absolute shadow-lg dark:shadow-none rounded-xl"
              style={{
                "--delay": testimonial.key,
              }}
            >
              <div className="content">
                <div className="w-24 h-24 absolute left-3 bg-white rounded-xl p-1 shadow-card">
                  <img
                    className="w-full h-full rounded-xl mr-3"
                    src={testimonial.image}
                    alt=""
                  />
                </div>
                <div className="details ml-6 capitalize">
                  <span className="name">{testimonial.name}</span>
                  <p className="">{testimonial.post}</p>
                  <p className="text-sm opacity-60 lowercase line-clamp-2">
                    {testimonial.message}
                  </p>
                </div>
              </div>
              {/* <a className="btn dark:bg-primary h-8" href="#">
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
