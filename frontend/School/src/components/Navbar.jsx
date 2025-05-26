import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role'); // Optional: if you store role
    navigate('/login');
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md mb-6">
      <h1 className="text-xl font-bold text-blue-600">School Management</h1>
      <div className="space-x-6 text-sm font-medium">
        {token ? (
          <>
            <Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link>
            <Link to="/students" className="hover:text-blue-500">Students</Link>
            <Link to="/teachers" className="hover:text-blue-500">Teachers</Link>
            <Link to="/courses" className="hover:text-blue-500">Courses</Link>
            <button
              onClick={handleLogout}
              className="text-red-500 hover:underline"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-500">Login</Link>
            <Link to="/register" className="hover:text-blue-500">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
