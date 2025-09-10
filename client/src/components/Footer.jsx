import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="font-bold text-xl mb-2">Dr. Lydia Mwai</h2>
          <p>Helping SMEs grow through marketing and training.</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2">
            <FaWhatsapp /> 
           <a
              href="https://wa.me/254728840848"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              +254 728 840 848
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> lydiakmwai@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> Kenya (Available Online & In-Person)
          </p>
        </div>
      </div>
      <div className="text-center mt-4 text-gray-400">
        &copy; {new Date().getFullYear()} Dr. Lydia Mwai. All rights reserved.
      </div>
    </footer>
  );
}
