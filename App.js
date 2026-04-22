import { useState } from "react";
import { data } from "./faqdata";
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
  <div style={{ fontFamily: "Arial", padding: 24, maxWidth: 900, margin: "0 auto" }}>
    
    <h1 style={{ textAlign: "center", marginBottom: 20 }}>
      Visma House FAQ
    </h1>

    <input
      placeholder="Søg i FAQ..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: 14,
        width: "100%",
        marginBottom: 25,
        borderRadius: 10,
        border: "1px solid #ddd",
        fontSize: 16
      }}
    />

    <div style={{ display: "grid", gap: 12 }}>
      {filtered.map((item, i) => (
        <div
          key={i}
          style={{
            background: "#fff",
            padding: 18,
            borderRadius: 12,
            boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
            transition: "0.2s ease"
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: 16 }}>
            {item.q}
          </div>

          <div style={{ marginTop: 8, lineHeight: 1.5 }}>
            {item.a}
          </div>

          <div style={{ marginTop: 10, fontSize: 12, color: "gray" }}>
            {item.c}
          </div>
        </div>
      ))}
    </div>
  </div>
);
