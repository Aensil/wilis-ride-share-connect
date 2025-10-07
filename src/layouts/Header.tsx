import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

import { contact } from "@/config/contact";
import { CtaLink } from "@/ui/CtaLink";

const links = [
  { href: "#descripcion", label: "Qué es WILIS" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#conductores", label: "Conductores" },
  { href: "#pasajeros", label: "Pasajeros" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#comunidad", label: "Comunidad" },
  { href: "#faq", label: "FAQ" },
];

const Header = () => {
  const getInitialTheme = () => {
    if (typeof window === "undefined") {
      return "light" as const;
    }
    const stored = window.localStorage.getItem("wilis-theme");
    if (stored === "dark" || stored === "light") {
      return stored;
    }
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark" as const;
    }
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("wilis-theme", theme);
  }, [theme]);

  useEffect(() => {
    const stored = localStorage.getItem("wilis-theme");
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
    }
  }, []);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-[var(--container-padding-x)] py-3">
        <a href="#inicio" className="text-lg font-bold text-primary" onClick={closeMenu}>
          WILIS S.A.S
        </a>

        <nav aria-label="principal" className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center rounded-md border border-border p-2 text-muted-foreground hover:text-primary"
            aria-label={theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <CtaLink
            href={contact.whatsappLink}
            fallbackHref={`tel:${contact.phone}`}
            variant="primary"
            size="lg"
            className="shadow-lg"
            trackingEvent={{ category: "cta", action: "click_whatsapp", label: "header_primary" }}
          >
            Abrir WhatsApp
          </CtaLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border p-2 md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={toggleMenu}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav aria-label="menú móvil" className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col gap-3 px-4 py-4 text-base">
            <li>
              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                  closeMenu();
                }}
                className="flex w-full items-center justify-between rounded-md border border-border px-2 py-2"
              >
                <span>{theme === "dark" ? "Tema oscuro" : "Tema claro"}</span>
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </li>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="block rounded-md px-2 py-2 hover:bg-muted" onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <CtaLink
                href={contact.whatsappLink}
                fallbackHref={`tel:${contact.phone}`}
                variant="primary"
                size="lg"
                className="w-full"
                onClick={closeMenu}
                trackingEvent={{ category: "cta", action: "click_whatsapp", label: "header_mobile" }}
              >
                Abrir WhatsApp
              </CtaLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
