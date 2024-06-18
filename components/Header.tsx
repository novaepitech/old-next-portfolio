"use client";
import { Menu, Package2, Home, CircleUser } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Accueil",
    href: "/",
  },
  {
    name: "Projets",
    href: "/projects",
  },
  {
    name: "A propos",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const PathName = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <h1 className="mr-6 text-3xl font-bold">
          Mateo<span className="text-primary">.</span>
        </h1>
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" className="bg-transparent sm:hidden">
                <Menu size="24" className="h-5 w-5" color="#00ff99" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="sm:max-w-xs">
              <nav className="flex flex-col items-center gap-44">
                <div>
                  <h1 className="mt-20 text-3xl font-bold">
                    Mateo<span className="text-primary">.</span>
                  </h1>
                </div>
                <div className="flex flex-col items-center gap-6 text-lg font-medium">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="relative font-medium transition-all hover:text-accent"
                    >
                      <span
                        className={PathName === link.href ? "text-primary" : ""}
                      >
                        {link.name}
                      </span>
                      <span
                        className={
                          PathName === link.href
                            ? "absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                            : ""
                        }
                        style={{
                          ...(PathName === link.href && {
                            viewTransitionName: "nav-transition",
                          }),
                        }}
                      ></span>
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="mr-8 hidden sm:flex sm:flex-1 sm:justify-end sm:gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="relative font-medium transition-all hover:text-accent"
            >
              <span className={PathName === link.href ? "text-primary" : ""}>
                {link.name}
              </span>
              <span
                className={
                  PathName === link.href
                    ? "absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    : ""
                }
                style={{
                  ...(PathName === link.href && {
                    viewTransitionName: "nav-transition",
                  }),
                }}
              ></span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
