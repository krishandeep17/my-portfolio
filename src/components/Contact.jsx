import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { styles } from "../styles";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Krishandeep",
          from_email: form.email,
          to_email: "krishandeep17@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);

          alert(
            "Thank you for contacting me! I'll get back to you as soon as possible."
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

          alert("Something went wrong.");
        }
      );
  };

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id="contact">
        &nbsp;
      </span>

      <motion.h2
        className={`${styles.sectionHeadText}`}
        variants={fadeIn("right", "spring", 0.1, 1)}
      >
        Contact Me
      </motion.h2>
      <motion.p
        className={`${styles.sectionSubText}`}
        variants={fadeIn("up", "spring", 0.2, 1)}
      >
        I'm open to discussing any opportunities, whether it's a potential
        project, job opportunity, or just a general inquiry. To start an initial
        chat, just drop me an email at{" "}
        <a
          href="mailto:krishandeep17@gmail.com"
          className="text-[#915eff] hover:underline active:underline"
        >
          krishandeep17@gmail.com
        </a>{" "}
        or use the form below to get in touch. I would love to hear from you!
      </motion.p>

      <div className="grid xl:grid-cols-[45fr,55fr] grid-cols-1 mt-12">
        <motion.div
          className="flex-[0.75] bg-black-100 xs:p-8 p-6 rounded-2xl"
          variants={slideIn("left", "spring", 0.2, 1)}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-7"
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-white font-medium ml-1.5 mb-2.5"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                minLength="3"
                required
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-white font-medium ml-1.5 mb-2.5"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-white font-medium ml-1.5 mb-2.5"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="7"
                minLength="3"
                required
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <motion.button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-lg"
              whileHover={{
                scale: 1.05,
                originX: 0,
                textShadow: "0px 0px 8px #915eff",
                boxShadow: "0px 0px 8px #915eff",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {loading ? "Sending..." : "Send"}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          variants={slideIn("right", "spring", 0.2, 1)}
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
