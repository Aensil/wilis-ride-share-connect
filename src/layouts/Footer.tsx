const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground/5 py-8">
      <div className="container mx-auto px-[var(--container-padding-x)]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 WILIS S.A.S. Todos los derechos reservados.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              WILIS S.A.S coordina viajes colaborativos de manera manual vía WhatsApp. Cada trayecto es organizado
              directamente entre conductores y pasajeros. Aplican condiciones de uso.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="/terminos-condiciones" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Términos y Condiciones
            </a>
            <a 
              href="/politica-privacidad" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Política de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
