import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-white py-8 my-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center px-2 mb-8">Contact</h2>
        <div className="w-full grid grid-cols-1 justify-center items-center gap-6 md:grid-cols-2">
          <div className="w-full text-center mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">
              Social Media & Contacts
            </h3>
            <strong>visit us </strong>
            <address className="text-lg ">
              Insag Garden City,Dowlotpur, <br /> Cotebari Road, Comilla, <br />
              ChittaGong,Bangladesh, <br />
              phone : 01617688805
            </address>
            <p className="text-lg mb-4 pt-8">
              visit us or Contact me through these channels at:
            </p>
            <div className="flex justify-center flex-wrap gap-8 mb-8">
              <a
                href="https://www.linkedin.com/in/robius-sani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                <FaLinkedin className="text-4xl" />
              </a>
              <a
                href="https://x.com/RobiusS4690"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                <FaTwitter className="text-4xl" />
              </a>
              <a
                href="https://github.com/Robiu-Sani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                <FaGithub className="text-4xl" />
              </a>
              <a
                href="https://www.facebook.com/robiussani.mubarok"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                <FaFacebook className="text-4xl" />
              </a>
              <a
                href="https://wa.me/01617688805"
                className="text-green-600 hover:underline"
              >
                <FaWhatsapp className="text-4xl" />
              </a>
              <a
                href="https://telegram.me/0161768805"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                <FaTelegram className="text-4xl" />
              </a>
              <a
                href="mailto:hafazrobiussani@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center"
              >
                <FaEnvelope className="text-4xl mr-2" />
              </a>
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Contact Form
            </h3>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
