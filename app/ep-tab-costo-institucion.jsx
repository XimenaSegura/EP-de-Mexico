function TabCosto({ onSolicitar }) {
  const promos = [
    { n: "Duplas", pct: "−20%", i: "$1,496.00", c: "$2,552.00", r: "Pagar ambas inscripciones en un mismo comprobante." },
    { n: "Sector Salud", pct: "−15%", i: "$1,589.50", c: "$2,711.50", r: "Adjuntar comprobante laboral vigente." },
    { n: "Ex Alumnos", pct: "−30%", i: "$1,309.00", c: "$2,233.00", r: "Adjuntar diploma del programa cursado anteriormente.", top: true },
  ];
  const pasos = [
    { t: "Deposita tu inscripción", p: "Por transferencia o depósito a la cuenta institucional a nombre de Estudios de Postgrado de Excelencia, A.C." },
    { t: "Envía tu comprobante por correo", p: "Manda el comprobante escaneado al correo de admisiones con: nombre completo, CURP, programa académico, lugar de residencia u hospital donde laboras, cómo te enteraste del programa, celular y correo. Recibirás confirmación en máximo 48 horas hábiles. No hay devoluciones." },
    { t: "Espera el correo de control escolar", p: "Una vez inscrita, recibirás indicaciones para el envío de tus documentos: escaneados en alta calidad, por ambos lados, en formato PDF." },
  ];
  return (
    <div className="ep-wrap ep-panel" data-screen-label="Tab Costo y promociones">
      <section className="ep-sec" style={{ alignItems: "center" }}>
        <Head center eyebrow="Inversión" titulo="Una inversión que impulsa tu carrera" />
        <div className="ep-inv">
          <div className="ep-inv__grid">
            <div className="ep-inv__it"><span className="ep-inv__k">Inscripción anual</span><span className="ep-inv__v">$1,870.00<small>MXN</small></span></div>
            <div className="ep-inv__it"><span className="ep-inv__k">Colegiatura mensual</span><span className="ep-inv__v">$3,190.00<small>MXN</small></span></div>
          </div>
          <div className="ep-inv__nota">*No incluye gastos de titulación ni costo de campos clínicos.</div>
        </div>
      </section>
      <section className="ep-sec" style={{ alignItems: "stretch" }}>
        <Head eyebrow="Promociones" titulo="Elige tu descuento" />
        <p className="ep-lead" style={{ fontSize: 18 }}>Las promociones no son acumulables entre sí.</p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 40 }}>
          <div className="ep-promos">
            {promos.map((p) => (
              <div className={"ep-promo" + (p.top ? " ep-promo--top" : "")} key={p.n}>
                <div className="ep-promo__top">
                  <span className="ep-promo__name">{p.n}</span>
                  <span className="ep-promo__pct">{p.pct}</span>
                </div>
                <div className="ep-promo__precios">
                  <span>Inscripción anual: <b>{p.i}</b></span>
                  <span>Colegiatura mensual: <b>{p.c}</b></span>
                </div>
                <div className="ep-promo__req">{p.r}</div>
                {p.top ? <span className="ep-promo__tag">Mayor descuento</span> : null}
              </div>
            ))}
          </div>
          <div className="ep-nota ep-nota--fit">
            <span className="ep-nota__i">i</span>
            <span>Toda promoción debe especificarse en tu correo de ingreso.</span>
          </div>
        </div>
      </section>
      <section className="ep-sec">
        <Head eyebrow="Proceso de inscripción" titulo="Inscríbete en 3 pasos" />
        <div className="ep-proc">
          <div className="ep-card ep-card--b ep-pasos">
            {pasos.map((p, i) => (
              <div className="ep-paso" key={p.t}>
                <span className="ep-paso__n">{i + 1}</span>
                <div><h3>{p.t}</h3><p>{p.p}</p></div>
              </div>
            ))}
          </div>
          <div className="ep-proc__img" role="img" aria-label="Proceso de inscripción"></div>
        </div>
      </section>
      <section className="ep-sec">
        <span className="ep-eyebrow">Puntos a considerar</span>
        <div className="ep-card ep-puntos">
          <ul className="ep-checks ep-checks--tick">
            <li>No se aceptan comprobantes de pago por WhatsApp.</li>
            <li>Para facturar, envía tus datos fiscales completos junto con tu constancia de situación fiscal y uso de CFDI.</li>
            <li>Solo se factura dentro del mes del pago; solicítala a más tardar 5 días hábiles antes de fin de mes.</li>
          </ul>
        </div>
      </section>
      <CTAFinal petrona titulo="¿Dudas sobre costos o promociones?" texto="Un asesor te ayuda a elegir la mejor opción para ti y te acompaña en el proceso de inscripción." onSolicitar={onSolicitar} />
    </div>
  );
}

function TabInstitucion({ onSolicitar }) {
  const cifras = [["+180", "programas académicos"], ["20", "estados con presencia"], ["5", "campus activos"], ["+24", "años de trayectoria"], ["+40,000", "egresados"]];
  const campus = ["Monterrey", "Mérida", "Occidente", "Puebla", "Virtual"];
  return (
    <div className="ep-wrap ep-panel" data-screen-label="Tab EP de México">
      <Head eyebrow="Quiénes somos" titulo="La institución de posgrados en salud con la oferta más grande de México" lead="Estudios de Posgrado de Excelencia nació en Puebla en 2001, especializada en educación médica continua y posgrados para profesionales de la salud." />
      <div className="ep-cifras">
        {cifras.map(([v, k]) => (
          <div className="ep-cifra" key={k}><span className="ep-cifra__v">{v}</span><span className="ep-cifra__k">{k}</span></div>
        ))}
      </div>
      <figure className="ep-lema">
        <blockquote>"Cuando se deja de aprender se deja de crecer"</blockquote>
        <figcaption>Lema institucional</figcaption>
      </figure>
      <div className="ep-mvv">
        <div className="ep-card ep-card--b ep-mvv__card">
          <span className="ep-mvv__k">Misión</span>
          <p className="ep-mvv__p">Ofrecer procesos educativos de excelencia que mejoren las competencias del personal de salud en beneficio de sus pacientes.</p>
        </div>
        <div className="ep-card ep-card--b ep-mvv__card">
          <span className="ep-mvv__k">Visión</span>
          <p className="ep-mvv__p">Consolidar y ampliar la oferta de educación continua y posgrados en salud con programas de vanguardia.</p>
        </div>
        <div className="ep-card ep-card--b ep-mvv__card">
          <span className="ep-mvv__k">Valores</span>
          <ul className="ep-valores">{["Pasión", "Honestidad", "Innovación", "Sinceridad", "Responsabilidad"].map((v) => <li key={v}>{v}</li>)}</ul>
        </div>
      </div>
      <section className="ep-campus">
        <span className="ep-eyebrow">Nuestros campus</span>
        <div className="ep-campus__row">
          {campus.map((c, i) => <img key={c} src={`assets/campus-${i + 1}.png`} alt={"Campus " + c} />)}
        </div>
      </section>
      <section className="ep-ident">
        <div className="ep-ident__escudo" role="img" aria-label="Escudo de los Leones"></div>
        <div className="ep-ident__txt">
          <Head eyebrow="Identidad" titulo="El Escudo de los Leones" />
          <div className="ep-ident__ps">
            <p>Conocido como el "Escudo de los Leones", representa la virtud suprema de nuestra institución: la EXCELENCIA.</p>
            <p>Dos leones coronados observándose de frente, con las siglas de la institución y una corona de hojas de laurel.</p>
            <p>Inspirado en Aristóteles: simboliza la Excelencia a través de dos fuerzas: el <strong>Intelecto</strong> y la <strong>Voluntad</strong>.</p>
          </div>
          <div className="ep-masc">
            <span className="ep-eyebrow ep-eyebrow--plain">Conoce a nuestras mascotas</span>
            <div className="ep-masc__row">
              <div className="ep-masc__it">
                <div className="ep-masc__img" style={{ background: "url(assets/doctor-pulso.png) 103.027% 0.301% / 90.058% 158.798% no-repeat" }}></div>
                <strong>Doctor Pulso</strong><span>Intelecto</span>
              </div>
              <div className="ep-masc__it">
                <div className="ep-masc__img" style={{ background: "url(assets/enfermera-nova.png) 35.304% -19.672% / 87.736% 150.832% no-repeat" }}></div>
                <strong>Enfermera Nova</strong><span>Voluntad</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="ep-sellos-of">
        <img src="assets/sello-rvoe.png" alt="RVOE — Reconocimiento de Validez Oficial de Estudios" />
        <img src="assets/sello-iso.png" alt="ISO 21001" />
      </div>
      <CTAFinal titulo="Forma parte de una comunidad que nunca deja de crecer" texto="Déjanos tus datos y conoce todos los detalles del programa y del campus." onSolicitar={onSolicitar} />
    </div>
  );
}

Object.assign(window, { TabCosto, TabInstitucion });
