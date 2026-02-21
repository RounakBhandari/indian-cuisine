import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 py-4 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        <div className="text-2xl font-bold">
          <Link to="/">Indian Cuisine</Link>
        </div>

        <div className="space-x-6 flex">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;