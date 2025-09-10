// src/components/Services.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const marketingServices = [
  {
    name: "Starter Pack – Get Online",
    features: [
      "Setup Facebook, Instagram, WhatsApp Business",
      "4 branded posts per month",
      "1 flyer/poster template",
    ],
    price: "KES 5,000 – 7,000/month",
  },
  {
    name: "Growth Pack – Stay Visible",
    features: [
      "Everything in Starter Pack",
      "8–10 posts per month (graphics + short videos)",
      "WhatsApp broadcasts 2x per month",
      "Monthly performance report",
    ],
    price: "KES 10,000 – 15,000/month",
  },
  {
    name: "Premium Pack – Get Customers",
    features: [
      "Everything in Growth Pack",
      "12–15 posts per month",
      "1–2 promotional videos",
      "Boosted ads (budget separate)",
      "Customer feedback survey",
    ],
    price: "KES 20,000 – 25,000/month",
  },
];

const surveyServices = [
  {
    name: "Basic",
    features: ["1 survey (up to 10 questions)", "Summary report"],
    price: "KES 20,000",
  },
  {
    name: "Standard",
    features: [
      "2 surveys (customer + employee)",
      "Full report",
      "Team presentation",
    ],
    price: "KES 50,000",
  },
  {
    name: "Premium",
    features: [
      "Comprehensive surveys (customer, employee, market)",
      "In-depth report",
      "Competitor insights",
      "1-month follow-up",
    ],
    price: "KES 100,000",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      {/* Marketing Packages */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-12">
        Marketing Packages
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {marketingServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-600">
                {service.name}
              </h3>
              <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className="text-gray-900 font-semibold mb-4">{service.price}</p>
            </div>
            <Link
              to="/contact"
              className="mt-auto px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 text-center transition"
            >
              Book Now
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ME Survey Packages */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-12">
        ME Survey Package
      </h2>
      <p className="max-w-3xl mx-auto text-center text-gray-700 mb-12">
        Make better business decisions with real data. We design and run surveys
        for SMEs to capture customer, employee, and market feedback — then turn
        the results into clear, actionable insights.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {surveyServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-600">
                {service.name}
              </h3>
              <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className="text-gray-900 font-semibold mb-4">{service.price}</p>
            </div>
            <Link
              to="/contact"
              className="mt-auto px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 text-center transition"
            >
              Book a Free Consultation
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
