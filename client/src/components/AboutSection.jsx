import { motion } from "framer-motion";
import profileImg from "../assets/images/profile 1.jpeg"; // replace with actual image

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-20">
        
        {/* Left: Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={profileImg}
            alt="Dr. Lydia K. Mwai"
            className="rounded-lg shadow-2xl w-full object-cover"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Hi, I’m Dr. Lydia K. Mwai (PhD, MBA, MMSK)
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-4 leading-relaxed">
            I’m a marketing expert, trainer, and SME supporter. With over 10 years of experience in teaching, training, and running successful marketing programs, I specialize in:
          </p>
          <ul className="text-gray-700 text-lg md:text-xl mb-4 leading-relaxed">
            <li>1. SME training on branding, customer service, and digital marketing</li>
            <li>2. Affordable done-for-you marketing services to help small businesses attract and keep customers</li>
          </ul>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            I believe that every SME can grow when equipped with the right knowledge and consistent marketing.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
