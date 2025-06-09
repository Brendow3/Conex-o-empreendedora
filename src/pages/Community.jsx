export default function Community() {
  return (
    <div className="max-w-4xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Comunidade de Empreendedores</h2>
      <p className="mb-6 text-lg text-center">
        Um espaço dedicado à troca de experiências, networking e aprendizado colaborativo. Conecte-se com outros empreendedores, compartilhe desafios e encontre apoio para impulsionar seu negócio.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">O que você pode fazer aqui?</h3>
        <ul className="list-disc ml-6 space-y-3 text-lg">
          <li>💬 **Troque experiências** – Compartilhe desafios e conquistas com outros empreendedores.</li>
          <li>❓ **Faça perguntas** – Tire dúvidas e obtenha insights valiosos de especialistas e pares.</li>
          <li>🤝 **Encontre parcerias** – Conecte-se com profissionais que complementam seu negócio.</li>
          <li>🎓 **Busque mentoria** – Acesse orientação de especialistas para crescer de forma sustentável.</li>
        </ul>
      </div>

      <div className="mt-6 flex justify-center">
        <img 
          src="https://meeventos.com.br/wp-content/uploads/2025/01/srt_7fa47ad6751b36360425d6cb114e47cd.jpeg" 
          alt="Comunidade de Empreendedores" 
          className="rounded-lg shadow-md w-full max-w-sm"
        />
      </div>
      
      <p className="mt-6 text-center text-lg font-semibold">
        🚀 <strong>Participe e fortaleça sua jornada empreendedora!</strong>
      </p>
    </div>
  );
}
