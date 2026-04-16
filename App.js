import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  const data = [
    { q: "Reception åbningstid", a: "07.30–16.00", c: "Kontakt" },
    { q: "Kantine åbningstid", a: "11.00–13.00", c: "Kantine" },
    { q: "IT support", a: "service.visma.com", c: "IT" },
    { q: "Fitness", a: "24/7 adgang", c: "Faciliteter" },
    { q: "Parkering", a: "Carlsberg Byen områder", c: "Parkering" }
  ];

  const filtered = data.filter(i =>
    i.q.toLowerCase().includes(search.toLowerCase()) ||
    i.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>Visma House FAQ</h1>

      <input
        placeholder="Søg..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 10, width: "100%", marginBottom: 20 }}
      />

      {filtered.map((item, i) => (
        <div key={i} style={{ background: "#f5f5f5", padding: 10, marginBottom: 10 }}>
          <b>{item.q}</b>
          <div>{item.a}</div>
          <small>{item.c}</small>
        </div>
      ))}
    </div>
  );
}
