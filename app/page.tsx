/* eslint-disable @next/next/no-img-element */

const whatsapp =
  "https://wa.me/5521995562355?text=Oi%2C%20Red%20Lions!%20Quero%20conversar%20sobre%20uma%20ideia%20de%20tattoo.";
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const InstagramIcon = () => (
  <span className="social-icon" aria-hidden="true">◎</span>
);

export default function Home() {
  return (
    <main style={{ "--hero-image": `url('${publicBasePath}/images/hero.jpg')` } as React.CSSProperties}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Red Lions Tattoo — início">
          <span className="brand-mark">RL</span>
          <span>RED LIONS <small>TATTOO · TIJUCA</small></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#trabalhos">Trabalhos</a>
          <a href="#studio">O estúdio</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">
          Agendar conversa <span>↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="Tatuador trabalhando em uma tattoo">
          <div className="hero-stamp"><span>5,0</span> ★★★★★<small>30 avaliações no Google</small></div>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Arte autoral · Tijuca, Rio de Janeiro</p>
          <h1>Sua história.<br />Nossa <em>arte.</em></h1>
          <p className="hero-text">
            Três artistas, diferentes estilos e a mesma atenção a cada traço.
            Do primeiro rabisco à última linha, sua ideia ganha identidade.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">Quero fazer uma tattoo <span>↗</span></a>
            <a className="text-link" href="#trabalhos">Ver trabalhos <span>↓</span></a>
          </div>
          <div className="hero-meta">
            <span><strong>3</strong> artistas residentes</span>
            <span><strong>5,0</strong> no Google</span>
            <span><strong>Tijuca</strong> Galeria Periquita</span>
          </div>
        </div>
        <p className="vertical-note">DESDE 2021 · ARTE NA PELE</p>
      </section>

      <section className="marquee" aria-label="Especialidades">
        <div className="marquee-track">
          <span className="marquee-content">BLACKWORK <b>✦</b> FINE LINE <b>✦</b> REALISMO <b>✦</b> OLD SCHOOL <b>✦</b> LETTERING <b>✦</b> PROJETOS AUTORAIS <b>✦</b></span>
          <span className="marquee-content" aria-hidden="true">BLACKWORK <b>✦</b> FINE LINE <b>✦</b> REALISMO <b>✦</b> OLD SCHOOL <b>✦</b> LETTERING <b>✦</b> PROJETOS AUTORAIS <b>✦</b></span>
        </div>
      </section>

      <section className="work-section" id="trabalhos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Portfólio</p>
            <h2>Ideias que<br />viram <em>marca.</em></h2>
          </div>
          <p>Cada projeto nasce de uma conversa. A gente entende a sua referência, adapta ao corpo e cria uma peça que só poderia ser sua.</p>
        </div>
        <div className="work-grid">
          <figure className="work-card large">
            <img src={`${publicBasePath}/images/work-1.jpg`} alt="Processo de tatuagem com traços em preto" />
            <figcaption><span>01</span><strong>Traço &amp; narrativa</strong><small>Projetos com presença</small></figcaption>
          </figure>
          <figure className="work-card">
            <img src={`${publicBasePath}/images/work-2.jpg`} alt="Tatuador trabalhando com precisão no braço de um cliente" />
            <figcaption><span>02</span><strong>Detalhe &amp; textura</strong><small>Precisão em cada linha</small></figcaption>
          </figure>
          <figure className="work-card red-card">
            <img src={`${publicBasePath}/images/work-3.jpg`} alt="Detalhe de tatuagem floral em andamento" />
            <figcaption><span>03</span><strong>Do seu jeito</strong><small>Desenho pensado para você</small></figcaption>
          </figure>
        </div>
        <p className="photo-note">Imagens ilustrativas. Confira os trabalhos reais dos artistas no Instagram.</p>
        <a className="button outline" href="https://www.instagram.com/redlionstattoo/" target="_blank" rel="noreferrer">
          <InstagramIcon /> Ver portfólio no Instagram <span>↗</span>
        </a>
      </section>

      <section className="studio-section" id="studio">
        <div className="studio-copy">
          <p className="eyebrow">A casa dos leões</p>
          <h2>Um estúdio para<br /><em>ficar à vontade.</em></h2>
          <p>
            No coração da Tijuca, a Red Lions reúne três tatuadores e diferentes especialidades em um ambiente acolhedor, organizado e feito para transformar referências em projetos únicos.
          </p>
          <ul>
            <li><span>01</span>Conversa e construção da ideia</li>
            <li><span>02</span>Desenho adaptado ao seu corpo</li>
            <li><span>03</span>Orientação de cuidados pós-tattoo</li>
          </ul>
        </div>
        <div className="studio-image">
          <img src={`${publicBasePath}/images/studio-v2.webp`} alt="Estúdio de tatuagem com cadeira profissional, flashes e bancada de trabalho" />
          <span className="image-label">Imagem conceitual</span>
        </div>
      </section>

      <section className="reviews">
        <p className="eyebrow">Quem já viveu a experiência</p>
        <div className="review-grid">
          <blockquote><div>★★★★★</div><p>“Meu studio favorito pelo ambiente, limpeza, higiene, bate-papo e boa música.”</p><cite>Bernardo P. · Google</cite></blockquote>
          <blockquote><div>★★★★★</div><p>“Lugar aconchegante, profissionais ótimos e um trabalho impecável.”</p><cite>Lívia B. · Google</cite></blockquote>
          <blockquote><div>★★★★★</div><p>“Todos atenciosos. Super recomendo!”</p><cite>Jaqueline A. · Google</cite></blockquote>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div>
          <p className="eyebrow">Seu próximo rabisco começa aqui</p>
          <h2>Tem uma ideia?<br /><em>Conta pra gente.</em></h2>
          <a className="button light" href={whatsapp} target="_blank" rel="noreferrer">Pedir orçamento no WhatsApp <span>↗</span></a>
        </div>
        <address>
          <small>ONDE ESTAMOS</small>
          <strong>Galeria Periquita</strong>
          Rua Conde de Bonfim, 44<br />Sala 1202 · Tijuca, Rio de Janeiro
          <a href="https://www.google.com/maps/search/?api=1&query=Red+Lions+Tattoo+Tijuca" target="_blank" rel="noreferrer">Abrir no mapa ↗</a>
        </address>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">RL</span><span>RED LIONS<small>TATTOO · TIJUCA</small></span></a>
        <p>Arte autoral, boas histórias e tinta na pele.</p>
        <div><a href="https://www.instagram.com/redlionstattoo/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com/redlionstattoostudio/" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.tiktok.com/@redlionstattoo" target="_blank" rel="noreferrer">TikTok</a></div>
      </footer>
    </main>
  );
}
