
export default function SegurancaPage() { 
    return (
        <main className="max-w-4xl md:mt-15  mt-10 mx-auto px-0 py-12 text-gray-800 [&>section]:bg-gray-200  [&>section]:outline-gray-300 [&>section]:p-8 [&>section]:rounded-2xl [&>section]:mb-5">
          <h1 className="text-3xl font-bold mb-9 text-center">Política de Segurança</h1>
    
          <section className="mb-8">
           
            <h2 className="text-xl font-semibold mb-2">1. Proteção de Dados</h2>
            <p>
            Todos os dados fornecidos pelos usuários são tratados com confidencialidade e armazenados de forma segura. Utilizamos criptografia em trânsito (HTTPS) para proteger as informações durante a comunicação entre o navegador e nossos servidores.
            </p>
          </section>
    
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">2. Acesso Autenticado</h2>
            <p>
            O acesso a informações sensíveis é restrito a usuários autenticados e autorizados. Mecanismos como autenticação por senha e tokens de sessão são utilizados para garantir que apenas usuários válidos acessem a plataforma.

            </p>
          </section>
    
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">3. Atualizações e Correções</h2>
            <p>
            Realizamos atualizações frequentes para corrigir vulnerabilidades e melhorar a segurança do sistema. O monitoramento constante nos permite agir rapidamente diante de qualquer incidente.
            </p>
          </section>
    
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">4. Responsabilidade dos Usuários</h2>
            <p>
            Recomendamos que os usuários mantenham suas credenciais seguras e não compartilhem suas senhas. Caso qualquer atividade suspeita seja detectada, entre em contato imediatamente com nosso suporte.
            </p>
          </section>
    
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">5. Contato</h2>
            <p>
            Em caso de dúvidas sobre esta política ou para relatar problemas de segurança, entre em contato pelo e-mail: <a href="mailto:contato@invit.com" className=" text-blue-600">contato@invit.com</a>
            </p>
          </section>
    
        </main>
    
    );
    }