import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTiktok, FaInstagram,FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="font-bold text-xl mb-2">Dr. Lydia Mwai</h2>
          <p>Helping SMEs grow through marketing and training.</p>
<div className="flex gap-6 mt-6 justify-center md:justify-start text-2xl text-gray-700">
            <a
              href="https://www.facebook.com/profile.php?id=61580388701558"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/lydia.k.mwai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/dr-lydia-mwai-phd-mmsk-20495a80/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition"
            >
              <FaLinkedinIn />
            </a>
          
             <a
              href="https://www.tiktok.com/@pulse.point.marketing?_t=ZP-8zdl4WFSn7P&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition"
            >
              <FaTiktok />
            </a>

            <a
              href="https://wa.me/254728840848"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
                    


        </div>
        <div className="flex flex-col gap-2">
         
          <p className="flex items-center gap-2">
            <FaEnvelope />
            <a href="mailto:lydiakmwai@gmail.com">lydiakmwai@gmail.com</a> 
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
