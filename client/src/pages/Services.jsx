import { motion } from "framer-motion";

export default function Services() {
  const packages = [
    {
      name: "Starter Pack – Get Online",
      price: "KES 5,000 – 7,000 / month",
      features: [
        "Setup Facebook, Instagram, WhatsApp Business",
        "4 branded posts per month",
        "1 flyer/poster template",
      ],
    },
    {
      name: "Growth Pack – Stay Visible",
      price: "KES 10,000 – 15,000 / month",
      features: [
        "Everything in Starter Pack",
        "8–10 posts per month (graphics + short videos)",
        "WhatsApp broadcasts 2x per month",
        "Monthly performance report",
      ],
    },
    {
      name: "Premium Pack – Get Customers",
      price: "KES 20,000 – 25,000 / month",
      features: [
        "Everything in Growth Pack",
        "12–15 posts per month",
        "1–2 promotional videos",
        "Boosted ads (budget separate)",
        "Customer feedback survey",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-600 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Marketing Service Packages
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {pkg.name}
                </h3>
                <p className="text-lg font-bold text-yellow-500 mb-6">
                  {pkg.price}
                </p>
                <ul className="text-left space-y-2 text-gray-700">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">✔</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/254728840848?text=Hello%20Dr.%20Lydia,%20I%20want%20to%20subscribe%20to%20your%20service%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
