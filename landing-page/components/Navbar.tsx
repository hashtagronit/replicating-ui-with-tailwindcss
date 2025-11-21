import Link from "next/link";
import Container from "./Container";
import { Logo } from "./Logo";
import { Button } from "./ui/button";


const Navbar = () => {
  const navlinks: { title: string; href: string }[] = [
    { title: "Features",href: "/" },
    { title: "Product", href: "/" },
    { title: "Socials", href: "/" },
    { title: "Pricing", href: "/" },
  ];
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <Container className="flex items-center justify-between py-4">
        <Logo />
        <div className="flex items-center gap-10">
          {navlinks.map((item, index) => (
            <Link key={index}
             href={item.href}
             className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm text-neutral-600 dark:text-neutral-400 font-medium px-4">Log in</Link>
          <Button>Sign up</Button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
