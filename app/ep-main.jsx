function App() {
  const valid = (x) => TABS.some((t) => t.id === x);
  const [tab, setTab] = React.useState(() => {
    const h = (location.hash || "").slice(1);
    if (valid(h)) return h;
    const s = localStorage.getItem("ep_eq_tab_v1");
    return valid(s) ? s : "resumen";
  });
  const [form, setForm] = React.useState(false);

  const cambiar = (id) => {
    setTab(id);
    localStorage.setItem("ep_eq_tab_v1", id);
    history.replaceState(null, "", "#" + id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const abrir = () => setForm(true);

  return (
    <React.Fragment>
      <Header onSolicitar={abrir} onHome={() => cambiar("resumen")} />
      {tab === "resumen" ? <Hero onSolicitar={abrir} /> : null}
      <TabsBar activa={tab} onCambiar={cambiar} onSolicitar={abrir} />
      <Franja />
      <main key={tab}>
        {tab === "resumen" ? <TabResumen onSolicitar={abrir} irA={cambiar} /> : null}
        {tab === "curso" ? <TabCurso onSolicitar={abrir} /> : null}
        {tab === "costo" ? <TabCosto onSolicitar={abrir} /> : null}
        {tab === "institucion" ? <TabInstitucion onSolicitar={abrir} /> : null}
      </main>
      <Footer />
      <Flotantes onSolicitar={abrir} />
      <FormularioModal abierto={form} onCerrar={() => setForm(false)} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
