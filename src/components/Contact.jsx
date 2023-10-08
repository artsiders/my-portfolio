import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ProfilePicture from "./ProfilePicture";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (form.name.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Please enter your name.",
      }));
      isValid = false;
    }

    if (form.email.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter your email.",
      }));
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email.",
      }));
      isValid = false;
    }

    if (form.message.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Please enter your message.",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (validateForm()) {
      emailjs
        .send(
          "service_snqenkg",
          "template_29fkhbj",
          {
            form_name: form.name,
            to_name: "Salim",
            from_email: form.email,
            to_email: "salim.artsider@gmail.com",
            message: form.message,
          },
          "I0bYpSVfRjqiY54SQ"
        )
        .then(
          () => {
            setLoading(false);
            toast.success(
              "Thank you. I will get back to you as soon as possible."
            );

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);

            console.log(error);
            toast.error("Something went wrong.");
          }
        );
    } else {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative z-0 mx-auto padding max-w-7xl">
      <div className={`flex flex-col-reverse gap-10 md:grid md:grid-cols-2`}>
        <div className="flex-[0.75] bg-[#f7f7f7] dark:bg-black-100 border-2 border-white dark:border-transparent p-8 rounded-2xl shadow-card dark:shadow-none">
          <p className="sectionSubText">Contact .</p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <label className="flex flex-col">
              <span className="mb-2 font-medium text-writing dark:text-white">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className={`input-field ${errors.name && "border-red-500"}`}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name}</span>
              )}
            </label>

            <label className="flex flex-col">
              <span className="mb-2 font-medium text-writing dark:text-white">
                Your email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className={`input-field ${errors.email && "border-red-500"}`}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
            </label>

            <label className="flex flex-col">
              <span className="mb-2 font-medium text-writing dark:text-white">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className={`input-field h-28 !rounded-3xl ${
                  errors.message && "border-red-500"
                }`}
              />
              {errors.message && (
                <span className="text-red-500">{errors.message}</span>
              )}
            </label>

            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <div className="flex-[0.25]">
          <ProfilePicture />
        </div>
      </div>
    </section>
  );
};

export default Contact;
