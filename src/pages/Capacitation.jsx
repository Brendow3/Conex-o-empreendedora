export default function Capacitation() {
  return (
    <div className="max-w-4xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Capacitação Profissional</h2>
      <p className="mb-6 text-lg text-center">
        Acesse conteúdos educativos organizados por área e desenvolva novas habilidades para impulsionar seu negócio.
      </p>
      
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Áreas de Capacitação:</h3>
        <ul className="list-disc ml-6 space-y-3 text-lg">
          <li>📈 Comércio - Estratégias para aumentar suas vendas</li>
          <li>🎭 Cultura - Aprimore sua produção artística e gestão cultural</li>
          <li>🛠️ Serviços - Técnicas para melhorar seu atendimento e operação</li>
          <li>🔗 Outros - Capacitações em inovação, tecnologia e gestão</li>
        </ul>
      </div>
      
      <div className="mt-6 flex justify-center">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS3ZlqRlpN9ESfJBkPIE3sP5tjmn07sMDtRZBM6khgO6-72ba2BgJwxFXtRPQCSRRHj64&usqp=CAU" 
          alt="Capacitação Empresarial" 
          className="rounded-lg shadow-md w-full max-w-sm"
        />
      </div>
    </div>
  );
}
