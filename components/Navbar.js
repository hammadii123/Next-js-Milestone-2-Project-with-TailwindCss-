import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white flex justify-between">
    <div className="text-xl font-semibold">My Portfolio</div>
    <div className="space-x-4">
      <Link href="/">Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
