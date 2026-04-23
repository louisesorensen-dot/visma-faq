import { useState, useMemo } from "react";
import { data } from "./faqdata";

function groupByCategory(items) {
  const groups = {};
  for (const item of items) {
    if (!groups[item.c]) groups[item.c] = [];
    groups[item.c].push(item);
  }
  return groups;
}

export default function App() {
  const [search, setSearch] = useState("");
  const [openCategories, setOpenCategories] = useState(new Set());

  const q = search.toLowerCase().trim();
  const isSearching = q.length > 0;

  const filtered = useMemo(() =>
    data.filter(i =>
      i.q.toLowerCase().includes(q) ||
      i.a.toLowerCase().includes(q) ||
      i.c.toLowerCase().includes(q)
    ),
    [q]
  );

  const grouped = useMemo(() => groupByCategory(filtered), [filtered]);
  const categories = Object.keys(grouped);

  function toggleCategory(cat) {
    setOpenCategories(prev => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  }

  return (
    <div style={{ fontFamily: "Arial", background: "#f4f4f4", minHeight: "100vh", padding: "40px 16px" }}>
      <div style={{
        maxWidth: 900, margin: "0 auto", background: "#fff",
        padding: 28, borderRadius: 12, boxShadow: "0 2px 16px rgba(0,0,0,0.07)"
      }}>
        <h1 style={{ margin: "0 0 6px 0", fontSize: 26 }}>Visma House FAQ</h1>
        <p style={{ margin: "0 0 20px 0", color: "#666", fontSize: 15 }}>
          Søg i praktisk information eller fold en kategori ud
        </p>

        <div style={{ position: "relative", marginBottom: 24 }}>
          <svg
            width={18} height={18} viewBox="0 0 24 24" fill="none"
            stroke="#999" strokeWidth={2}
            style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
          >
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            placeholder="Søg fx kantine, IT, adgang..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%", padding: "13px 14px 13px 42px", fontSize: 16,
              border: "1px solid #ddd", borderRadius: 8, outline: "none",
              boxSizing: "border-box"
            }}
          />
        </div>

        {categories.length === 0 ? (
          <div style={{ color: "#999", textAlign: "center", padding: "32px 0", fontSize: 15 }}>
            Ingen resultater for "{search}".
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {categories.map(cat => {
              const isOpen = isSearching || openCategories.has(cat);
              const items = grouped[cat];
              return (
                <div key={cat} style={{ border: "1px solid #e0e0e0", borderRadius: 8, overflow: "hidden" }}>
                  <div
                    onClick={() => toggleCategory(cat)}
                    style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "14px 18px", background: "#f7f7f7", cursor: "pointer",
                      fontWeight: "bold", fontSize: 15, userSelect: "none"
                    }}
                  >
                    <span>{cat}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#555" }}>
                      <span style={{
                        fontSize: 12, fontWeight: "normal", background: "#e2e2e2",
                        padding: "2px 8px", borderRadius: 20
                      }}>
                        {items.length} spørgsmål
                      </span>
                      <span style={{
                        fontSize: 12, color: "#888",
                        display: "inline-block", transform: isOpen ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s"
                      }}>▼</span>
                    </div>
                  </div>

                  {isOpen && (
                    <div>
                      {items.map((item, i) => (
                        <div key={i} style={{ borderTop: "1px solid #efefef", padding: "14px 18px" }}>
                          <div style={{ fontWeight: "bold", fontSize: 15, marginBottom: 4 }}>{item.q}</div>
                          <div style={{ color: "#444", lineHeight: 1.5, fontSize: 14 }}>{item.a}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
