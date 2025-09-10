// // ServicesPreview.jsx
// import { motion } from "framer-motion";
// import serviceImgPlaceholder from "../assets/images/service-placeholder.jpg"; // replace with actual images

// export default function ServicesPreview() {
//   // Example services array
//   const services = [
//     {
//       id: 1,
//       name: "Branding Package",
//       description: "Complete branding for your SME including logo, colors, and identity.",
//       price: "$200",
//       img: serviceImgPlaceholder,
//     },
//     {
//       id: 2,
//       name: "Digital Marketing Package",
//       description: "Social media management and digital campaigns to grow your business.",
//       price: "$150",
//       img: serviceImgPlaceholder,
//     },
//     {
//       id: 3,
//       name: "Customer Service Training",
//       description: "Train your team to deliver excellent customer experience.",
//       price: "$100",
//       img: serviceImgPlaceholder,
//     },
//   ];

//   return (
//     <section className="py-16 px-6 bg-gray-50">
//       <div className="max-w-6xl mx-auto text-center mb-12">
//         <h2 className="text-3xl font-bold text-blue-600">Our Services</h2>
//         <p className="text-gray-700 mt-2">
//           Affordable packages designed to help SMEs grow.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {services.map((service) => (
//           <motion.div
//             key={service.id}
//             className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <img
//               src={service.img}
//               alt={service.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6 flex flex-col flex-1">
//               <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
//               <p className="text-gray-700 mb-4 flex-1">{service.description}</p>
//               <div className="mt-auto flex justify-between items-center">
//                 <span className="font-bold text-blue-600">{service.price}</span>
//                 <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-500 transition">
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
