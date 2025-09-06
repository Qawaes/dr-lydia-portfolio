// import { motion } from "framer-motion";
// import training1 from "../assets/images/training1.jpg";
// import training2 from "../assets/images/training2.jpg";

// const trainings = [
//   {
//     title: "Basics of Marketing for SMEs",
//     description: "Understand your customer, build your brand, simple digital marketing (Facebook, WhatsApp, TikTok)",
//     image: training1,
//     price: "KES 500 – 2,000",
//   },
//   {
//     title: "Customer Service Excellence",
//     description: "Handling clients with care, building loyalty, turning first-time buyers into repeat customers",
//     image: training2,
//     price: "KES 500 – 2,000",
//   },
// ];

// export default function Portfolio() {
//   return (
//     <motion.section
//       className="max-w-7xl mx-auto px-6 md:px-20 py-16"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
//         Training Programs
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {trainings.map((t, i) => (
//           <motion.div
//             key={i}
//             className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
//             whileHover={{ scale: 1.05 }}
//           >
//             <img src={t.image} alt={t.title} className="w-full h-48 object-cover" />
//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-2">{t.title}</h3>
//               <p className="text-gray-700 mb-2">{t.description}</p>
//               <p className="text-gray-900 font-semibold">{t.price}</p>
//               <button className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition">
//                 Register for Training
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// }
