import './App.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <a href="/" className="brand">
        <img src="logo.png" alt="Restaurace No a Co logo" className="logo" />
        <span className="brand-title">Restaurace No a Co</span>
      </a>
      <nav className="nav">
        <a href="Menu.pdf">Denní menu</a>
        <a href="https://www.facebook.com/pages/Bistro-Na-Osmi%C4%8Dce/529873897103859?fref=ts" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com/restaurace_noaco/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
    </aside>
  );
}

function MainContent() {
  return (
    <main className="main-content">
      <section>
        <h2>Kontakt</h2>
        <address>
          Restaurace No a Co s.r.o.<br />
          IČO: 224 36 260<br />
          Merhautova 8<br />
          613 00 Brno<br />
          Tel.: <a href="tel:+420702152582">+420 702 152 582</a><br />
          Email: <a href="mailto:restaurace.noaco@gmail.com">restaurace.noaco@gmail.com</a>
        </address>
        <h2>Otevírací doba</h2>
        <ul className="opening-hours">
          <li>Pondělí–Úterý: 10.30 – 23.00</li>
          <li>Středa–Pátek: 10.30 – 24.00</li>
          <li>Sobota: 11.00 – 24.00</li>
          <li>Neděle: 16.00 – 22.00</li>
        </ul>
        <p>Tramvajové spojení linkami 3, 5, 9 – zastávka Dětská nemocnice.</p>
        <h2>Mapa</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.868638370055!2d16.616996276771754!3d49.203051476389454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712945f97f9a141%3A0xb78f76fffe998500!2sNo%20a%20Co%20Restaurace!5e0!3m2!1scs!2scz!4v1751637485489!5m2!1scs!2scz"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Restaurace No a Co Mapa"
          ></iframe>
        </div>
        <h2>Menu</h2>
        <div className="menu-image" style={{ textAlign: "center", marginTop: "2em" }}>
          <img src="Menu.png" alt="Menu Restaurace No a Co" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
        <h2>Přepis</h2>
        <div className="menu-transcript">
          <p><strong>Polední menu</strong></p>
          <p>7.7. - 11.7.2025</p>
          <p><strong>Pondělí 7.7.</strong></p>
          <p>Polévka: Fazolová s klobáskou (-)</p>
          <p>1. Kuřecí plátek s broskví a bramborovou kaší (7) 155,-</p>
          <p>2. Špagety s pestem ze sušených rajčat a bazalky, sypané sýrem (1,3,7) 150,-</p>
          <p>3. Smažený sýr, vařené brambory, domácí tatarka (1,3,7,10) 145,-</p>
          <p><strong>Úterý 8.7.</strong></p>
          <p>Polévka: Kulajda (3,7)</p>
          <p>1. Sekaná s vejcem, bramborová kaše, okurek (1,3,7,10) 155,-</p>
          <p>2. Francouzské brambory, okurka (1,3,7,10) 150,-</p>
          <p>3. Smažený sýr, hranolky, domácí tatarka (1,3,7,10) 145,-</p>
          <p><strong>Středa 9.7.</strong></p>
          <p>Polévka: Masová (-)</p>
          <p>1. Kuřecí řízek s bramborovým salátem (1,3,7,10) 160,-</p>
          <p>2. Halušky se zelím a uzeným (1,3,7) 150,-</p>
          <p>3. Cizrnové karbanátky, bramborová kaše, okurek (1,3,7,10) 145,-</p>
          <p><strong>Čtvrtek 10.7.</strong></p>
          <p>Polévka: Kuřecí vývar s masem, zeleninou a písmenky (1,3,7,9)</p>
          <p>1. Hovězí znojemská, rýže (10) 155,-</p>
          <p>2. Kuřecí závitek se sušenými rajčaty a sýrem, bramborová kaše (3,7) 150,-</p>
          <p>3. Smažený sýr, hranolky, domácí tatarka (1,3,7,10) 145,-</p>
          <p><strong>Pátek 11.7.</strong></p>
          <p>Polévka: Brokolicová (3,7)</p>
          <p>1. Bramborové noky s kuřecím masem ve smetanovo-sýrové omáčce (1,3,7) 155,-</p>
          <p>2. Rozstřelený španělský ptáček, rýže (1,3,7,10) 155,-</p>
          <p>3. Žemlovka s tvarohem a jablkem (1,3,7) 145,-</p>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;