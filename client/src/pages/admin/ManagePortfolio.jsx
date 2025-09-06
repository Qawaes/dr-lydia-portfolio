import { useState } from "react";
import { motion } from "framer-motion";
import portfolioSample from "../../assets/images/training1.jpg";

export default function ManagePortfolio() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Basics of Marketing for SMEs",
      description: "Learn digital marketing basics.",
      media_url: portfolioSample,
      media_type: "image",
    },
    {
      id: 2,
      title: "Customer Service Excellence",
      description: "Handling clients with care.",
      media_url: portfolioSample,
      media_type: "image",
    },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const addItem = () => {
    if (!newTitle) return;
    setItems([
      ...items,
      {
        id: Date.now(),
        title: newTitle,
        description: newDesc,
        media_url: portfolioSample,
        media_type: "image",
      },
    ]);
    setNewTitle("");
    setNewDesc("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <motion.div
      className="p-8 min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Manage Portfolio</h2>

      {/* Add New */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <h3 className="font-bold mb-4">Add New Portfolio Item</h3>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border px-4 py-2 rounded w-full mb-2"
        />
        <textarea
          placeholder="Description"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          className="border px-4 py-2 rounded w-full mb-2"
        ></textarea>
        <button
          onClick={addItem}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add Portfolio
        </button>
      </div>

      {/* Portfolio List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow flex flex-col">
            <img
              src={item.media_url}
              alt={item.title}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-700 mb-2">{item.description}</p>
            <button
              onClick={() => deleteItem(item.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition self-start"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
