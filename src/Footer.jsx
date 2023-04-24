import './Footer.css'

function Footer(){
  return (
    <footer className="footer"> {/* Adicionando a classe CSS "footer" */}
      <p>Desenvolvido por Leonardo Rodrigues 2023.</p>
      <p>Todos os direitos reservados Leonardo Rodrigues&copy;</p>
      <ul>
        <li>Contato: leorodrigues1036@gmail.com</li>
        <li>Telefone: (87) 99194-9448</li>
      </ul>
      <div className='contener'>
        <p>Me siga nas redes sociais:</p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/leonardo-rodrigues-desenvolvedor-web/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.instagram.com/leozera96/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li>
            <a href="https://github.com/LeoRodrigues1036" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
