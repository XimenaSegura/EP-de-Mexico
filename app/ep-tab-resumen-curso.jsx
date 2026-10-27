function TabResumen({ onSolicitar, irA }) {
  const razones = [
    { t: "Validez oficial RVOE SEP", p: "Al egresar obtienes tu Diploma de Especialista con registro ante la DGP para tramitar tu cédula." },
    { t: "Compatible con tu trabajo", p: "Solo dos fines de semana al mes. Sigues en tu hospital mientras te especializas." },
    { t: "24 años formando al sector salud", p: "Más de 18,000 profesionales de la salud han crecido con nosotros desde 2001." },
    { t: "Enfoque humanista y evidencia", p: "Cuidado centrado en el paciente con práctica clínica basada en evidencia." },
  ];
  return (
    <div className="ep-wrap ep-panel ep-panel--resumen" data-screen-label="Tab Resumen" style={{ alignItems: "center" }}>
      <Head sm eyebrow="Lo esencial en un vistazo" titulo="Forma tu perfil como profesional de enfermería especialista en el área quirúrgica" lead="Formación clínica de alto nivel para el cuidado integral del paciente en los procesos perioperatorios." />
      <section className="ep-para">
        <div className="ep-para__img" role="img" aria-label="Cuidado del paciente"></div>
        <div className="ep-para__col">
          <h3>Hecha para profesionales de enfermería que ya están en el campo</h3>
          <ul className="ep-checks">
            <li>Inicio el 15 de agosto de 2026 en Campus Posgrados Puebla.</li>
            <li>Presencial, solo dos fines de semana al mes.</li>
            <li>3 semestres: sábados 9:00–14:00 y domingos 8:00–13:00.</li>
            <li>Reconocimiento de Validez Oficial de Estudios (RVOE).</li>
          </ul>
          <button className="ep-btn ep-btn--teal ep-btn--md" onClick={() => irA("curso")} style={{ gap: 5 }}>Ver perfil de egreso <Arrow s={24} /></button>
        </div>
      </section>
      <section className="ep-sec" style={{ gap: 40 }}>
        <Head sm eyebrow="Por qué estudiar aquí" titulo="Cuatro razones para decidirte" />
        <div className="ep-grid4">
          {razones.map((r, i) => (
            <div className="ep-razon" key={r.t}>
              <span className="ep-razon__n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{r.t}</h3>
              <p>{r.p}</p>
            </div>
          ))}
        </div>
      </section>
      <CTAFinal titulo="Tu siguiente nivel profesional empieza este agosto" texto="Cupo limitado por grupo. Déjanos tus datos y resolvemos todas tus dudas sin compromiso." onSolicitar={onSolicitar} />
    </div>
  );
}

const PLAN = [
  { t: "Semestre 1 — Fundamentos", m: ["Introducción a la Enfermería Quirúrgica", "Proceso Enfermero", "Bioética y Legislación", "Instrumentación Quirúrgica I", "Modelo del Cuidado en Enfermería Quirúrgica"] },
  { t: "Semestre 2 — Gestión, Seguridad e Instrumentación Avanzada", m: ["Gestión y Administración en el Quirófano", "Proceso Salud Enfermedad", "Metodología de la Investigación I", "Instrumentación Quirúrgica II", "Calidad y Seguridad en el Paciente"] },
  { t: "Semestre 3 — Habilidades Avanzadas y Práctica Clínica", m: ["Psicología Social", "Habilidades y Destrezas Quirúrgicas", "Metodología de la Investigación II", "Instrumentación Quirúrgica III", "Prácticas Clínicas Profesionales"] },
];

function CheckCard({ cols }) {
  return (
    <div className="ep-card ep-checkgrid">
      {cols.map((c, i) => (
        <ul className="ep-checks" key={i}>{c.map((x) => <li key={x}>{x}</li>)}</ul>
      ))}
    </div>
  );
}

function TabCurso({ onSolicitar }) {
  return (
    <div className="ep-wrap ep-panel" data-screen-label="Tab Acerca del curso">
      <Head eyebrow="Acerca del curso" titulo="Un programa pensado para el quirófano real" lead="Formación con perfil humanista que desarrolla tus competencias en técnicas y procedimientos médico-quirúrgicos y en la atención perioperatoria. Al concluir, te titulas con Diploma de Especialista y registro ante la DGP." />
      <section className="ep-obj">
        <div className="ep-card ep-card--b ep-obj__card">
          <span className="ep-eyebrow">Objetivo general</span>
          <p>Formar profesionales especialistas en el cuidado quirúrgico con sentido humanista y de calidad, capaces de intervenir en los procesos perioperatorios con alto nivel de competencia.</p>
        </div>
        <div className="ep-obj__img" role="img" aria-label="Profesionales de enfermería de EP de México frente al campus"></div>
      </section>
      <section className="ep-sec">
        <Head eyebrow="Perfil de ingreso" titulo="¿Es para ti?" />
        <CheckCard cols={[
          ["Licenciatura en Enfermería con título y cédula profesional vigente.", "Disposición para desempeñarte en áreas quirúrgicas y perioperatorias.", "Conocimientos básicos de anatomía, fisiología y procedimientos clínicos."],
          ["Capacidad de trabajo en equipo multidisciplinario.", "Compromiso ético con el cuidado humanista del paciente.", "Interés en la investigación y la práctica basada en evidencia."],
        ]} />
      </section>
      <section className="ep-sec">
        <Head eyebrow="Plan de estudios" titulo="3 semestres, paso a paso" />
        <div className="ep-plan">
          {PLAN.map((s, i) => (
            <div className="ep-sem" key={s.t}>
              <div className="ep-sem__head">
                <span className="ep-sem__num">{i + 1}</span>
                <span className="ep-sem__t"><strong>{s.t}</strong><span>{s.m.length} materias</span></span>
              </div>
              <ul>{s.m.map((m) => <li key={m}>{m}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>
      <section className="ep-sec">
        <Head eyebrow="Perfil de egreso" titulo="Lo que sabrás hacer al terminar" />
        <CheckCard cols={[
          ["Intervenir en el pre, trans y postoperatorio con alto nivel de competencia.", "Aplicar métodos de esterilización e instrumentación quirúrgica.", "Usar instrumentos de valoración y diagnóstico del paciente quirúrgico."],
          ["Gestionar el quirófano con criterios de calidad y seguridad.", "Desarrollar investigación cuantitativa y cualitativa.", "Trabajar en equipo con liderazgo y ética profesional."],
        ]} />
      </section>
      <div className="ep-nota">
        <span className="ep-nota__i">i</span>
        <span className="ep-nota__t">El programa es presencial en Campus Posgrados Puebla. Si vienes de otro estado, te compartimos información para foraneos.</span>
        <a href="#">Conoce más</a>
      </div>
      <CTAFinal titulo="Resuelve tus dudas con un asesor académico" texto="Te explicamos el plan de estudios, los campos clínicos y el proceso de titulación." onSolicitar={onSolicitar} />
    </div>
  );
}

Object.assign(window, { TabResumen, TabCurso });
