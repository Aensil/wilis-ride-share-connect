import { Link } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

const NotFound = () => (
  <MainLayout canonicalPath="/404" title="Página no encontrada | WILIS S.A.S" description="La página que buscas no existe dentro de WILIS S.A.S.">
    <section className="flex min-h-[70vh] items-center justify-center bg-muted/30">
      <div className="mx-auto max-w-xl px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">404</p>
        <h1 className="mt-4 text-4xl font-bold text-foreground">Página no encontrada</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Lo sentimos, no pudimos encontrar la página que estabas buscando. Revisa la URL o vuelve a la página principal.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg hover:bg-primary/90"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  </MainLayout>
);

export default NotFound;
