export default function CTAButton({ text }) {
  return (
    <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-500 transition">
      {text}
    </button>
  );
}
