import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Conexão Empreendedora</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Início</Link>
          <Link to="/capacitation" className="hover:underline">Capacitação</Link>
          <Link to="/tools" className="hover:underline">Ferramentas</Link>
          <Link to="/community" className="hover:underline">Comunidade</Link>
          <Link to="/about" className="hover:underline">Sobre</Link>
        </nav>
      </div>
    </header>
  );
}
