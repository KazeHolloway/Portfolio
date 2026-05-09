import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li><Link href="#main" className="hover:underline">Main menu</Link></li>
        <li><Link href="#project" className="hover:underline">My project</Link></li>
        <li><Link href="/#contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
