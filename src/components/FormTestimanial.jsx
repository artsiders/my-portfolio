import { BiSend } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import emailjs from "@emailjs/browser";

const FormTestimanial = ({ setVisible }) => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    role: "",
    testimonial: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    role: "",
    testimonial: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;

    if (form.name.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: t("contact.pleasEname"),
      }));
      isValid = false;
    }

    if (form.role.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        role: t("contact.pleaseRole"),
      }));
      isValid = false;
    }

    if (form.testimonial.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        testimonial: t("contact.pleaseMessage"),
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      emailjs
        .send(
          "service_snqenkg",
          "template_29fkhbj",
          {
            form_name: form.name,
            to_name: "Salim",
            from_role: form.role,
            to_email: "salim.artsider@gmail.com",
            testimonial: form.testimonial,
          },
          "I0bYpSVfRjqiY54SQ"
        )
        .then(
          () => {
            setLoading(false);
            toast.success(
              "Thank you. I will get back to you as soon as possible."
            );
            setVisible(false);

            setForm({
              name: "",
              role: "",
              testimonial: "",
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
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col justify-center gap-3 p-2 sm:w-[420px]"
    >
      <label className="flex flex-col">
        <span className="mb-2 font-medium text-writing dark:text-white">
          {t("contact.yourName")}
        </span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Marck Zukerberg"
          className={`input-field ${errors.name && "!border-red-300"}`}
        />
        {errors.name && (
          <span className="text-red-400 ml-4 text-sm font-bold">
            {errors.name}
          </span>
        )}
      </label>

      <label className="flex flex-col">
        <span className="mb-2 font-medium text-writing dark:text-white">
          {t("contact.role")}
        </span>
        <input
          type="text"
          name="role"
          value={form.role}
          onChange={handleChange}
          placeholder="C.E.O"
          className={`input-field ${errors.role && "!border-red-300"}`}
        />
        {errors.role && (
          <span className="text-red-400 ml-4 text-sm font-bold">
            {errors.role}
          </span>
        )}
      </label>

      <label className="flex flex-col">
        <span className="mb-2 font-medium text-writing dark:text-white">
          {t("contact.yourMessage")}
        </span>
        <textarea
          rows={7}
          name="testimonial"
          value={form.testimonial}
          onChange={handleChange}
          placeholder={t("contact.goodJob")}
          className={`input-field h-28 !rounded-3xl ${
            errors.testimonial && "!border-red-300"
          }`}
        />
        {errors.testimonial && (
          <span className="text-red-400 ml-4 text-sm font-bold">
            {errors.testimonial}
          </span>
        )}
      </label>

      <button type="submit" className="btn" disabled={loading}>
        {loading ? (
          <>
            {t("contact.sending")}
            <BiLoaderCircle className="ml-2 animate-spin" />
          </>
        ) : (
          <>
            {t("contact.send")}
            <BiSend className="ml-2" />
          </>
        )}
      </button>
    </form>
  );
};

export default FormTestimanial;
