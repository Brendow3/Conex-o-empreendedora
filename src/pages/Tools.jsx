export default function Tools() {
  return (
    <div className="max-w-4xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Ferramentas de Gestão Empresarial</h2>
      <p className="mb-6 text-lg text-center">
        A administração eficiente é um dos pilares do sucesso de qualquer negócio. Para ajudar microempreendedores a organizar suas finanças, estruturar processos e tomar decisões estratégicas, disponibilizamos uma série de recursos práticos e acessíveis.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Recursos Disponíveis:</h3>
        <ul className="list-disc ml-6 space-y-3 text-lg">
          <li>📊 <strong>Simuladores Financeiros</strong> – Faça projeções de custos, receitas e investimentos, garantindo uma visão clara do seu fluxo de caixa.</li>
          <li>📑 <strong>Modelos de Controle</strong> – Planilhas e templates prontos para acompanhar estoque, despesas e planejamento financeiro.</li>
          <li>✅ <strong>Checklists Empresariais</strong> – Guias estruturados para otimizar a gestão de clientes, fornecedores e operações.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-semibold mb-4">Por que usar nossas ferramentas?</h3>
        <ul className="list-disc ml-6 space-y-3 text-lg">
          <li>✔ <strong>Praticidade</strong> – Modelos intuitivos e fáceis de utilizar, sem necessidade de conhecimentos avançados.</li>
          <li>✔ <strong>Tomada de Decisão Inteligente</strong> – Dados organizados para ajudar você a planejar e crescer com mais segurança.</li>
          <li>✔ <strong>Eficiência</strong> – Ferramentas que reduzem erros, aumentam produtividade e trazem controle ao seu negócio.</li>
        </ul>
      </div>

      <div className="mt-6 flex justify-center">
        <img 
          src="https://meeventos.com.br/wp-content/uploads/2025/01/ilustracao_HUB-B-1.png" 
          alt="Ferramentas de Gestão Empresarial" 
          className="rounded-lg shadow-md w-full max-w-sm"
        />
      </div>
      
      <p className="mt-6 text-center text-lg font-semibold">
        🚀 <strong>Invista na gestão e fortaleça seu empreendimento!</strong>
      </p>
    </div>
  );
}
