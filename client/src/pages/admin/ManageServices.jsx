import { useState } from "react";
import serviceSample from "../../assets/images/service1.jpg";
import { motion } from "framer-motion";

export default function ManageServices() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Starter Pack",
      description: "Setup Facebook, Instagram, WhatsApp Business",
      price: "KES 5,000 – 7,000/month",
      image_url: serviceSample,
    },
  ]);

  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const addService = () => {
    if (!newName) return;
    setServices([
      ...services,
      {
        id: Date.now(),
        name: newName,
        description: newDesc,
        price: newPrice,
        image_url: serviceSample,
      },
    ]);
    setNewName("");
    setNewDesc("");
    setNewPrice("");
  };

  const deleteService = (id) => {
    setServices(services.filter((s) => s.id !== id));
  };

  return (
    <motion.div
      className="p-8 min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Manage Services</h2>

      {/* Add New Service */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <h3 className="font-bold mb-4">Add New Service</h3>
        <input
          type="text"
          placeholder="Service Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="border px-4 py-2 rounded w-full mb-2"
        />
        <textarea
          placeholder="Description"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          className="border px-4 py-2 rounded w-full mb-2"
        ></textarea>
        <input
          type="text"
          placeholder="Price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          className="border px-4 py-2 rounded w-full mb-2"
        />
        <button
          onClick={addService}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add Service
        </button>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.id} className="bg-white p-4 rounded shadow flex flex-col">
            <img
              src={s.image_url}
              alt={s.name}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h3 className="font-bold text-lg">{s.name}</h3>
            <p className="text-gray-700 mb-1">{s.description}</p>
            <p className="text-gray-900 font-semibold">{s.price}</p>
            <button
              onClick={() => deleteService(s.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition self-start mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
