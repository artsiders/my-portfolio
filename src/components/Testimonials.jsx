import testimonial1 from "../assets/testimonials/testimonial-1.webp";
import testimonial2 from "../assets/testimonials/testimonial-2.webp";
import testimonial3 from "../assets/testimonials/testimonial-3.webp";
import testimonial4 from "../assets/testimonials/testimonial-4.webp";
import testimonial5 from "../assets/testimonials/testimonial-5.webp";

const Testimonials = () => {
  return (
    <section className="testimonials padding max-w-7xl mx-auto relative z-0 flex flex-col md:flex-row">
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
        <p data-aos="fade-up" data-aos-delay="300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          praesentium consequatur laborum unde, optio facere omnis iste ipsum
          alias doloremque beatae maxime, culpa distinctio totam recusandae
          porro hic illo ullam.
        </p>
      </div>
      <div
        className="relative flex justify-center items-center h-[300px] w-full md:w-1/2"
        data-aos="zoom-out-up"
      >
        {[
          {
            key: -1,
            image: testimonial1,
            name: "mewe loic",
            post: "student",
            message:
              "la formation est de très bonne qualité! perso je vallide le projet",
          },
          {
            key: 0,
            image: testimonial2,
            name: "merline yassa",
            post: "Entrepreneur",
            message:
              "les applications faites par alt sont vraiment incroyables",
          },
          {
            key: 1,
            image: testimonial3,
            name: "Moustapha Aka",
            post: "Directeur Edkadi hotel",
            message:
              "j'utilise le logiciel smartbook developper par ces jeunes. c'est très éfficace",
          },
          {
            key: 2,
            image: testimonial4,
            name: "cyril",
            post: "student",
            message:
              "la formation est de très bonne qualité! perso je vallide le projet",
          },
          {
            key: 2,
            image: testimonial5,
            name: "dimitri mabon",
            post: "front-end developer",
            message:
              "la formation est de très bonne qualité! perso je vallide le projet",
          },
        ].map((testimonial, key) => (
          <div
            key={key}
            className="card flex items-center max-w-fit justify-around gap-6 bg-white dark:bg-tertiary w-full p-5 opacity-0 pointer-events-none absolute shadow-card rounded-[100px_20px_20px_100px]"
            style={{
              "--delay": testimonial.key,
            }}
          >
            <div className="content">
              <div className="img">
                <img
                  className="w-full h-full rounded-full mr-3"
                  src={testimonial.image}
                  alt=""
                />
              </div>
              <div className="details ml-6 capitalize">
                <span className="name">{testimonial.name}</span>
                <p className="">{testimonial.post}</p>
                <p className="text-sm opacity-60 lowercase">
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
    </section>
  );
};

export default Testimonials;
