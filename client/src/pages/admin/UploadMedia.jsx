import { useState } from "react";
import { motion } from "framer-motion";

export default function UploadMedia() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleUpload = () => {
    if (!file) return;
    alert("File ready to be uploaded to backend (Cloudinary or local).");
    setFile(null);
    setPreview(null);
  };

  return (
    <motion.div
      className="p-8 min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Upload Media</h2>
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <input type="file" onChange={handleFileChange} className="mb-4" />
        {preview && (
          <img src={preview} alt="preview" className="mb-4 w-full h-48 object-cover rounded" />
        )}
        <button
          onClick={handleUpload}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Upload
        </button>
      </div>
    </motion.div>
  );
}
