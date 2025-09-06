import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Admin Dashboard</h1>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/admin/portfolio"
          className="bg-white p-6 rounded shadow hover:shadow-lg transition text-center"
        >
          Manage Portfolio
        </Link>
        <Link
          to="/admin/services"
          className="bg-white p-6 rounded shadow hover:shadow-lg transition text-center"
        >
          Manage Services
        </Link>
        <Link
          to="/admin/media"
          className="bg-white p-6 rounded shadow hover:shadow-lg transition text-center"
        >
          Upload Media
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
