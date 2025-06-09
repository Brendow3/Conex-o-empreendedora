export default function Community() {
  return (
    <div className="max-w-4xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Comunidade de Empreendedores</h2>
      
      <p className="mb-6 text-lg text-center">
        Conecte-se com outros empreendedores, compartilhe desafios e encontre apoio para impulsionar seu negócio.
      </p>

      {/* Seção em Cards */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-4">💬 Troca de Experiências</h3>
          <p>Compartilhe desafios, conquistas e boas práticas com outros empreendedores.</p>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-4">❓ Perguntas e Respostas</h3>
          <p>Tire dúvidas e obtenha insights valiosos de especialistas e pares.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-4">🤝 Parcerias Estratégicas</h3>
          <p>Conecte-se com profissionais que complementam seu negócio e fortaleça sua rede.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-4">🎓 Mentoria Especializada</h3>
          <p>Acesse orientação de especialistas para crescer de forma sustentável.</p>
        </div>
      </div>

      {/* Seção de Imagem */}
      <div className="mt-8 flex justify-center">
        <img 
          src="https://storage.googleapis.com/twg-content/original_images/twg_Afroempreendedorismo_thumb2460x1152.png" 
          alt="Comunidade de Empreendedores" 
          className="rounded-lg shadow-md w-full max-w-md"
        />
      </div>
      
      <p className="mt-6 text-center text-lg font-semibold">
        🚀 <strong>Participe e fortaleça sua jornada empreendedora!</strong>
      </p>
    </div>
  );
}

