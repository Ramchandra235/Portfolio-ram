import { useState } from "react";

import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

     const data = await response.json();

await emailjs.send(
  "service_9fowq3u",
  "template_oo73wz9",
  {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  },
  "7tG1Ma-6xLJotzpK1"
);

alert("Message sent successfully!");

setFormData({
  name: "",
  email: "",
  message: "",
});
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24"
    >
      <div className="max-w-4xl mx-auto">

        <p className="text-cyan-400 mb-4">
          CONTACT
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Let's Work Together
        </h2>

        <p className="text-gray-400 mb-12">
          Have a project idea or opportunity?
          Let's connect.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="
            w-full
            bg-zinc-900
            border
            border-cyan-500/20
            rounded-xl
            p-4
            "
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="
            w-full
            bg-zinc-900
            border
            border-cyan-500/20
            rounded-xl
            p-4
            "
            required
          />

          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="
            w-full
            bg-zinc-900
            border
            border-cyan-500/20
            rounded-xl
            p-4
            "
            required
          />

          <button
            type="submit"
            className="
            px-8
            py-4
            bg-cyan-500
            text-black
            rounded-xl
            font-semibold
            "
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;