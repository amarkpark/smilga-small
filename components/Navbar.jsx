import Link from "next/link"

const links = [
  { label: "About", href: "/about" },
  { label: "Tasks", href: "/tasks" },
  { label: "Query", href: "/query" },
  { label: "Client", href: "/client" },
  { label: "Info", href: "/about/info" },
  { label: "Drinks", href: "/drinks" },
  { label: "Prisma Example", href: "/prisma-example" },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">Home</Link>
        <ul className="menu menu-horizontal md:ml=8">
          {links.map(link => {
            return (
              <li key={link.href}>
                <Link href={link.href} className="capitalize">
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;