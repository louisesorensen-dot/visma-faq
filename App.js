import { useMemo, useState } from "react";

const FAQS = [
  // Kontakt
  { q: "Hvad er receptionens åbningstid?", a: "Mandag–fredag kl. 07.30–16.00.", c: "Kontakt" },
  { q: "Hvordan kontakter jeg receptionen?", a: "reception.cby@visma.com / +45 31 46 93 96", c: "Kontakt" },
  { q: "Hvem kontakter jeg ved akutte problemer?", a: "Asil på +45 53 69 37 03 udenfor åbningstid.", c: "Kontakt" },

  // IT
  { q: "Hvordan får jeg IT hjælp?", a: "Kontakt IT Service via service.visma.com", c: "IT" },
  { q: "Hvad hjælper IT med?", a: "Netværk, PC, AV og udstyr.", c: "IT" },

  // Kantine
  { q: "Hvornår er frokost?", a: "Kl. 11.00–13.00.", c: "Kantine" },
  { q: "Hvem driver kantinen?", a: "ISS – The Food Place.", c: "Kantine" },
  { q: "Hvordan får jeg mad?", a: "Du trækker en frokostbillet i terminalen.", c: "Kantine" },
  { q: "Må jeg tage mad med hjem?", a: "Ja, fra 13.00–13.10 mod betaling.", c: "Kantine" },

  // Adgang
  { q: "Hvad bruger jeg adgangskort til?", a: "Døre, elevatorer, kantine og mere.", c: "Adgang" },
  { q: "Må jeg låne mit kort ud?", a: "Nej, det er personligt.", c: "Adgang" },
  { q: "Hvad gør jeg hvis jeg mister kort?", a: "Kontakt IT Service med det samme.", c: "Adgang" },

  // Faciliteter
  { q: "Er der fitness i huset?", a: "Ja, i stueetagen – åbent 24/7.", c: "Faciliteter" },
  { q: "Hvor kan jeg bade?", a: "I kælderen.", c: "Faciliteter" },

  // Gæster
  { q: "Hvordan registrerer jeg gæster?", a: "Alle gæster skal igennem receptionen.", c: "Gæster" },

  // Parkering
  { q: "Er der parkering?", a: "Ja, i området omkring Carlsberg Byen.", c: "Parkering" },
  { q: "Er der el-ladere?", a: "Ja, i p-kælderen.", c: "Parkering" }
];

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Alle");

  const categories = ["Alle", "Kontakt", "IT", "Kantine", "Adgang", "Faciliteter", "Gæster", "Parkering"];

  const filtered = useMemo(() => {
    return FAQS.filter((item) => {
      const matchesQuery =
        item.q.toLowerCase().includes(query.toLowerCase()) ||
        item.a.toLowerCase().includes(query.toLowerCase());

      const matchesCategory = category === "Alle" || item.c === category;

      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <div style={{ fontFamily: "Arial", padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1>Visma House FAQ</h1>
      <p>Søg i praktisk information om huset</p>

      <input
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
        placeholder="Søg fx kantine, IT, adgang..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div style={{ marginBottom: 20 }}>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            style={{
              marginRight: 5,
              marginBottom: 5,
              padding: "6px 10px",
              cursor: "pointer",
              background: category === c ? "#111" : "#eee",
              color: category === c ? "#fff" : "#000",
              border: "none",
              borderRadius: 4
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div>
        {filtered.map((item, i) => (
          <div
            key={i}
            style={{
              padding: 12,
              border: "1px solid #ddd",
              borderRadius: 6,
              marginBottom: 10
            }}
          >
            <strong>{item.q}</strong>
            <p style={{ marginTop: 5 }}>{item.a}</p>
            <small style={{ color: "gray" }}>{item.c}</small>
          </div>
        ))}

        {filtered.length === 0 && <p>Ingen resultater fundet.</p>}
      </div>
    </div>
  );
}
