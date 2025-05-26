import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">School Management</h1>
        <ul className="flex space-x-6">
         <li>
            <Link to="/register" className="hover:underline">Register</Link>
         </li>
          <li>
             <Link to="/" className="hover:underline">Dashboard</Link>
          </li>
          <li>
            <Link to="/students" className="hover:underline">Students</Link>
          </li>
          <li>
            <Link to="/teachers" className="hover:underline">Teachers</Link>
          </li>
          <li>
            <Link to="/courses" className="hover:underline">Courses</Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
