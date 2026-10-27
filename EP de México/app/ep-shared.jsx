const WA_URL = "https://wa.me/522229480240?text=Hola%2C%20quiero%20informes%20de%20la%20Especialidad%20en%20Enfermer%C3%ADa%20Quir%C3%BArgica";

function Ico({ src, w = 20, h = 20, style }) {
  return <span className="ep-ico" aria-hidden="true" style={{ WebkitMaskImage: `url(${src})`, maskImage: `url(${src})`, width: w, height: h, ...style }}></span>;
}
const Arrow = ({ s = 20 }) => (
  <svg width={s} height={s} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M 11.667 15 L 10.5 13.792 L 13.458 10.833 L 3.333 10.833 L 3.333 9.167 L 13.458 9.167 L 10.5 6.208 L 11.667 5 L 16.667 10 L 11.667 15 Z" /></svg>
);

function BtnSolicitar({ onClick, size = "sm" }) {
  return (
    <button className={"ep-btn ep-btn--teal ep-btn--" + size} onClick={onClick}>
      <Ico src="assets/ic-wa-btn.svg" w={16.617} h={16.667} style={{ margin: "1.667px" }} />
      Solicitar información
    </button>
  );
}

function Header({ onSolicitar, onHome }) {
  return (
    <header className="ep-header" style={{ height: 80 }}>
      <div className="ep-wrap ep-header__in">
        <a className="ep-logo" data-comment-anchor="logo-ep" href="#resumen" onClick={(e) => { e.preventDefault(); onHome(); }} aria-label="EP de México — inicio">
          <img src="assets/logo-ep-color.svg" alt="EP de México — Estudios de Postgrado de Excelencia" />
        </a>
        <button className="ep-btn ep-btn--teal" onClick={onSolicitar}>Solicitar información</button>
      </div>
    </header>
  );
}

function Hero({ onSolicitar }) {
  return (
    <section className="ep-hero" data-screen-label="Hero">
      <div className="ep-wrap ep-hero__grid">
        <div className="ep-hero__txt">
          <span className="ep-hero__eyebrow">Especialidad · Campus Posgrados Puebla</span>
          <h1>Especialidad en Enfermería Quirúrgica</h1>
          <p className="ep-hero__sub">Tu vocación te trajo hasta aquí. Da el siguiente paso y conviértete en la especialista que todo quirófano necesita, sin dejar tu trabajo.</p>
          <div className="ep-hero__ctas">
            <BtnSolicitar onClick={onSolicitar} size="xl" />
            <a className="ep-btn ep-btn--line ep-btn--xl" href="https://epdemexico.mx" target="_blank" rel="noopener">Ver similares <Arrow /></a>
          </div>
          <div className="ep-sellos">
            <span className="ep-sello">RVOE SEP</span>
            <span className="ep-sello">ISO 21001:2018</span>
            <span className="ep-sello">Inscripciones abiertas</span>
          </div>
        </div>
        <div className="ep-hero__img" role="img" aria-label="Profesional de enfermería en quirófano"></div>
      </div>
    </section>
  );
}

const TABS = [
  { id: "resumen", label: "Resumen" },
  { id: "curso", label: "Acerca del curso" },
  { id: "costo", label: "Costo y promociones" },
  { id: "institucion", label: "EP de México" },
];

function TabsBar({ activa, onCambiar, onSolicitar }) {
  const [cta, setCta] = React.useState(false);
  React.useEffect(() => {
    const h = document.querySelector(".ep-header");
    if (!h) return;
    const io = new IntersectionObserver(([e]) => setCta(!e.isIntersecting), { threshold: 0 });
    io.observe(h);
    return () => io.disconnect();
  }, []);
  return (
    <nav className="ep-tabs-zone" aria-label="Secciones del programa">
      <div className="ep-tabsbar">
        <div className="ep-tabs" role="tablist">
          {TABS.map((t) => (
            <button key={t.id} role="tab" aria-selected={activa === t.id} className="ep-tab" onClick={() => onCambiar(t.id)}>{t.label}</button>
          ))}
        </div>
      </div>
      <button className={"ep-btn ep-btn--teal ep-tabs-cta" + (cta ? " is-on" : "")} onClick={onSolicitar} tabIndex={cta ? 0 : -1} aria-hidden={!cta}>Solicitar información</button>
    </nav>
  );
}

const DATOS = [
  { k: "Inicio", v: "15 de agosto 2026" },
  { k: "Modalidad", v: "Presencial · 2 fines de semana al mes" },
  { k: "Duración", v: "3 semestres" },
  { k: "Horario", v: "Sáb 9:00–14:00 · Dom 8:00–13:00" },
  { k: "Reconocimiento", v: "RVOE · SEP" },
];

function Franja() {
  return (
    <div className="ep-franja">
      <div className="ep-franja__row">
        <div className="ep-franja__cell"><span className="ep-franja__prog">Especialidad en Enfermería Quirúrgica</span></div>
        {DATOS.map((d) => (
          <div className="ep-franja__cell" key={d.k}>
            <span className="ep-franja__k">{d.k}</span>
            <span className="ep-franja__v">{d.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Head({ eyebrow, titulo, lead, sm, center, style }) {
  return (
    <div className={"ep-head" + (center ? " ep-head--center" : "")} style={style}>
      <span className={"ep-eyebrow" + (sm ? " ep-eyebrow--sm" : "")}>{eyebrow}</span>
      {titulo ? <h2 className="ep-h2">{titulo}</h2> : null}
      {lead ? <p className="ep-lead">{lead}</p> : null}
    </div>
  );
}

function CTAFinal({ titulo, texto, onSolicitar, petrona }) {
  return (
    <section className={"ep-cta" + (petrona ? " ep-cta--petrona" : "")}>
      <div className="ep-cta__txt">
        <h2>{titulo}</h2>
        <p>{texto}</p>
      </div>
      <div className="ep-cta__btns">
        <BtnSolicitar onClick={onSolicitar} />
        <a className="ep-btn ep-btn--line-w ep-btn--sm" href="https://epdemexico.mx" target="_blank" rel="noopener">Ver más programas <Arrow /></a>
      </div>
      <span className="ep-cta__nota">Un asesor te contacta en menos de 24 horas.</span>
    </section>
  );
}

const ESTADOS_MX = ["Aguascalientes","Baja California","Baja California Sur","Campeche","Chiapas","Chihuahua","Ciudad de México","Coahuila","Colima","Durango","Estado de México","Guanajuato","Guerrero","Hidalgo","Jalisco","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"];

function FormularioModal({ abierto, onCerrar }) {
  const [d, setD] = React.useState({ nombre: "", correo: "", telefono: "", programa: "Especialidad en Enfermería Quirúrgica — Puebla", estado: "" });
  const [err, setErr] = React.useState({});
  const [ok, setOk] = React.useState(false);
  React.useEffect(() => { if (abierto) { setOk(false); setErr({}); } }, [abierto]);
  if (!abierto) return null;
  const set = (c) => (e) => setD({ ...d, [c]: e.target.value });
  const enviar = (e) => {
    e.preventDefault();
    const x = {};
    if (d.nombre.trim().length < 3) x.nombre = "Escribe tu nombre completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.correo)) x.correo = "Revisa tu correo.";
    if (!/^\d{10}$/.test(d.telefono.replace(/\D/g, ""))) x.telefono = "Escribe 10 dígitos.";
    if (!d.estado) x.estado = "Selecciona tu estado.";
    setErr(x);
    if (!Object.keys(x).length) setOk(true);
  };
  const campo = (id, label, props, e) => (
    <div className={"ep-field" + (e ? " ep-field--err" : "")}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      {e ? <span className="ep-field__err">{e}</span> : null}
    </div>
  );
  return (
    <div className="ep-modal-bg" onClick={(e) => { if (e.target === e.currentTarget) onCerrar(); }}>
      <div className="ep-modal" role="dialog" aria-modal="true" aria-label="Solicitar información">
        <div className="ep-modal__head">
          <div className="ep-modal__t">{ok ? "" : "Solicita información"}</div>
          <button className="ep-modal__x" onClick={onCerrar} aria-label="Cerrar">✕</button>
        </div>
        {ok ? (
          <div className="ep-ok">
            <div className="ep-ok__i">✓</div>
            <h3>¡Listo, {d.nombre.split(" ")[0]}!</h3>
            <p>Recibimos tu solicitud. Un asesor te contactará en menos de 24 horas.</p>
            <a className="ep-btn ep-btn--teal ep-btn--md" href={WA_URL} target="_blank" rel="noopener"><Ico src="assets/ic-wa-btn.svg" w={17} h={17} /> Escríbenos por WhatsApp</a>
          </div>
        ) : (
          <React.Fragment>
            <p className="ep-modal__sub">Déjanos tus datos y un asesor te contacta en menos de 24 horas.</p>
            <form className="ep-form" onSubmit={enviar} noValidate>
              {campo("f-n", "Nombre completo", { type: "text", value: d.nombre, onChange: set("nombre"), placeholder: "Ej. Mariana López García" }, err.nombre)}
              {campo("f-c", "Correo electrónico", { type: "email", value: d.correo, onChange: set("correo"), placeholder: "tucorreo@ejemplo.com" }, err.correo)}
              {campo("f-t", "Teléfono celular", { type: "tel", value: d.telefono, onChange: set("telefono"), placeholder: "10 dígitos" }, err.telefono)}
              <div className="ep-field">
                <label htmlFor="f-p">Programa de interés</label>
                <select id="f-p" value={d.programa} onChange={set("programa")}>
                  <option>Especialidad en Enfermería Quirúrgica — Puebla</option>
                  <option>Otro programa de EP de México</option>
                </select>
              </div>
              <div className={"ep-field" + (err.estado ? " ep-field--err" : "")}>
                <label htmlFor="f-e">Estado donde vives</label>
                <select id="f-e" value={d.estado} onChange={set("estado")}>
                  <option value="">Selecciona tu estado…</option>
                  {ESTADOS_MX.map((x) => <option key={x}>{x}</option>)}
                </select>
                {err.estado ? <span className="ep-field__err">{err.estado}</span> : null}
              </div>
              <button type="submit" className="ep-btn ep-btn--teal">Quiero que me contacten</button>
              <p className="ep-form__nota">Al enviar aceptas ser contactada por un asesor de EP de México.</p>
            </form>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function Flotantes({ onSolicitar }) {
  return (
    <React.Fragment>
      <a className="ep-wa" href={WA_URL} target="_blank" rel="noopener" aria-label="WhatsApp"><Ico src="assets/ic-wa-float.svg" w={21.6} h={21.67} /></a>
      <div className="ep-bar"><button className="ep-btn ep-btn--teal" onClick={onSolicitar}>Solicitar información</button></div>
    </React.Fragment>
  );
}

const Loc = ({ t, l }) => (<div className="ep-loc"><b>{t}</b>{l.map((x) => <span key={x}>{x}</span>)}</div>);

function Footer() {
  return (
    <footer className="ep-footer">
      <div className="ep-wrap ep-footer__in">
        <div className="ep-footer__top">
          <div>
            <h4>EP de México</h4>
            <div className="ep-footer__links">
              <a href="#">Acerca de nosotros</a>
              <a href="#">Todos los programas</a>
              <a href="#">Certificaciones</a>
              <a href="#">Sthetos- Revista Digital</a>
            </div>
          </div>
          <div>
            <h4>Campus Puebla</h4>
            <div className="ep-footer__cols">
              <div className="ep-footer__col" style={{ minWidth: 225 }}>
                <Loc t="Posgrados" l={["Av. 10 Oriente 410, Centro", "222 948 0240 ext. 49"]} />
                <Loc t="Educación Continua" l={["6 Norte 1610, Col. San Francisco", "222 294 9824"]} />
              </div>
              <div className="ep-footer__col">
                <Loc t="Horario" l={["Lun-Vie 8:00-19:00", "Sab 8:00-15:00"]} />
                <Loc t="Contacto" l={["22 9876 3652", "ep.puebla@epdemexico.mx"]} />
              </div>
            </div>
          </div>
          <div>
            <h4>Campus</h4>
            <div className="ep-footer__cols">
              <div className="ep-footer__col" style={{ minWidth: 257 }}>
                <Loc t="Guadalajara" l={["C. Madero 437, Col. Centro", "Sab 8:00-15:00"]} />
                <Loc t="Mérida" l={["Calle 42 No. 300, Col. Montes de Ame", "999 688 5410"]} />
              </div>
              <div className="ep-footer__col">
                <Loc t="Monterrey" l={["Miguel Hidalgo y Costilla 330", "814 264 6826"]} />
                <Loc t="Campus Virtual" l={[]} />
              </div>
            </div>
          </div>
          <div className="ep-footer__brand">
            <div className="ep-footer__logos">
              <span className="ep-footer__logo"><img src="assets/logo-ep-blanco.svg" alt="EP de México" /></span>
              <img className="ep-footer__escudo" src="assets/escudo-blanco.png" alt="Escudo EP de México" />
            </div>
            <div className="ep-social">
              <a href="#" aria-label="Instagram">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor"><path d="M 15.037 0.002 C 23.182 -0.096 30.042 6.79 30 15.072 C 29.959 23.214 23.171 30.042 14.917 30 C 6.773 29.959 -0.066 23.144 0 14.859 C 0.066 6.766 6.811 -0.119 15.037 0.002 Z M 6.42 14.941 C 6.512 16.458 6.429 17.927 6.624 19.379 C 6.868 21.215 7.835 22.506 9.61 23.146 C 10.129 23.333 10.668 23.422 11.209 23.446 C 13.929 23.565 16.652 23.658 19.363 23.369 C 21.221 23.171 22.517 22.157 23.159 20.362 C 23.339 19.857 23.426 19.333 23.449 18.807 C 23.565 16.071 23.663 13.329 23.37 10.599 C 23.172 8.759 22.166 7.472 20.39 6.833 C 19.871 6.646 19.332 6.557 18.791 6.534 C 16.072 6.417 13.35 6.346 10.636 6.602 C 8.647 6.79 7.117 8.165 6.71 10.112 C 6.374 11.723 6.55 13.37 6.419 14.941 L 6.42 14.941 Z" /><circle cx="15" cy="15" r="3.9" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="19.6" cy="10.4" r="1" /></svg>
              </a>
              <a href="#" aria-label="Facebook"><Ico src="assets/ic-facebook.svg" w={30} h={30} /></a>
              <a href="#" aria-label="TikTok"><Ico src="assets/ic-tiktok.svg" w={30} h={30} /></a>
              <a href="#" aria-label="YouTube" style={{ position: "relative" }}>
                <Ico src="assets/ic-youtube.svg" w={30} h={30} />
                <svg width="4.837" height="5.489" viewBox="0 0 4.837 5.489" fill="currentColor" style={{ position: "absolute", left: 13.084, top: 12.266 }}><path d="M 0.004 2.715 C 0.004 1.922 0.01 1.128 0.001 0.334 C -0.003 -0.005 0.097 -0.087 0.408 0.094 C 1.807 0.906 3.211 1.71 4.617 2.511 C 4.933 2.691 4.889 2.826 4.604 2.988 C 3.213 3.783 1.821 4.576 0.437 5.385 C 0.048 5.612 -0.004 5.444 0 5.096 C 0.011 4.303 0.003 3.509 0.004 2.715 Z" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="ep-footer__legal">
          <strong>EP de México 2026 ®</strong>
          Estudios de Postgrado de Excelencia, A.C.
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { WA_URL, Ico, Arrow, BtnSolicitar, Header, Hero, TabsBar, TABS, Franja, Head, CTAFinal, FormularioModal, Flotantes, Footer });
