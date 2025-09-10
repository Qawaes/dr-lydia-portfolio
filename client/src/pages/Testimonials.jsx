// import { motion } from "framer-motion";
// import testimonial1 from "../assets/images/testimonial1.jpg";

// const testimonials = [
//   {
//     quote: "Before Dr. Lydia’s training, I only posted randomly. Now I have a strategy and new customers every week!",
//     client: "Small Retailer, Nyeri",
//     image: testimonial1,
//   },
//   {
//     quote: "Her team set up my WhatsApp Business and Facebook page. I now get inquiries daily without stress.",
//     client: "Salon Owner, Nairobi",
//     image: testimonial1,
//   },
// ];

// export default function Testimonials() {
//   return (
//     <motion.section
//       className="max-w-7xl mx-auto px-6 md:px-20 py-16"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
//         Testimonials
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {testimonials.map((t, i) => (
//           <motion.div
//             key={i}
//             className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform"
//           >
//             <p className="text-gray-700 mb-4">"{t.quote}"</p>
//             <div className="flex items-center gap-4">
//               <img src={t.image} alt={t.client} className="w-12 h-12 rounded-full" />
//               <span className="font-semibold">{t.client}</span>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// }
