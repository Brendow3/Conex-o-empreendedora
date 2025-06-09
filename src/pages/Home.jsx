export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Conexão Empreendedora</h2>
      <p className="mb-6 text-lg text-center">
        A plataforma ideal para microempreendedores que buscam crescimento, capacitação e conexões estratégicas.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Nossos principais recursos:</h3>
        <ul className="list-disc ml-6 space-y-3 text-lg">
          <li>Capacitações gratuitas para aprimorar suas habilidades</li>
          <li>Simuladores e checklists para uma gestão mais eficiente</li>
          <li>Networking com empreendedores para impulsionar seu negócio</li>
        </ul>
      </div>
      <div className="mt-6 flex justify-center">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ1mGthryRf36PhfjKH340DNcFVeNDKGRgjg6D8XbgBEJgMz52uZNvb47w6i2w-JkLGdE&usqp=CAU" 
          alt="Plataforma Comunitária para Empreendedores" 
          className="rounded-lg shadow-md w-full max-w-sm"
        />
      </div>
    </div>
  );
}
