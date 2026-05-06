export default function FloorPlan2() {
  return (
    <div style={{ width: "100%", overflowX: "auto", marginTop: 32 }}>
      <h2 style={{ textAlign: "center", marginBottom: 12, fontSize: 20 }}>
        2. sal – Visma House
      </h2>
      <svg
        viewBox="0 0 1400 760"
        style={{ width: "100%", minWidth: 700, display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Building base fill ── */}
        <polygon
          points="25,300 25,665 1385,665 1385,188 1265,152 1050,112 750,82 430,62 430,22 345,22 265,62"
          fill="#f9f9f9"
          stroke="none"
        />

        {/* ══════════════════════════════════════
            COMPANY AREAS
        ══════════════════════════════════════ */}

        {/* TimeMsystem – pink/magenta */}
        <polygon
          points="25,300 265,62 345,22 430,22 430,315 25,315"
          fill="#FF77BB"
          stroke="#333"
          strokeWidth="1.5"
        />
        <text x="205" y="178" textAnchor="middle" fill="#000" fontSize="17" fontWeight="bold">TimeMsystem</text>
        <text x="205" y="198" textAnchor="middle" fill="#000" fontSize="12">inkl. Temponizer</text>
        <text x="205" y="213" textAnchor="middle" fill="#000" fontSize="12">209 m²</text>

        {/* Intempus – blue/purple */}
        <polygon
          points="25,315 232,315 232,570 25,570"
          fill="#7766CC"
          stroke="#333"
          strokeWidth="1.5"
        />
        <text x="128" y="440" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="bold">Intempus</text>
        <text x="128" y="460" textAnchor="middle" fill="#fff" fontSize="12">25 m²</text>

        {/* Meebook – olive green */}
        <polygon
          points="232,315 430,315 430,570 232,570"
          fill="#88BB44"
          stroke="#333"
          strokeWidth="1.5"
        />
        <text x="331" y="440" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="bold">Meebook</text>
        <text x="331" y="460" textAnchor="middle" fill="#fff" fontSize="12">87 m²</text>

        {/* Penneo – bright green (left-centre block) */}
        <polygon
          points="430,62 745,82 745,570 430,570 430,62"
          fill="#44BB55"
          stroke="#333"
          strokeWidth="1.5"
        />
        <text x="588" y="310" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="bold">Penneo</text>
        <text x="588" y="334" textAnchor="middle" fill="#fff" fontSize="14">481 m²</text>

        {/* Fælles – light steel blue (right-centre block) */}
        <polygon
          points="745,82 1050,112 1095,118 1235,152 1235,570 745,570 745,82"
          fill="#7BAFD4"
          stroke="#333"
          strokeWidth="1.5"
        />
        <text x="990" y="340" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="bold">Fælles</text>
        <text x="990" y="364" textAnchor="middle" fill="#fff" fontSize="14">513 m²</text>

        {/* Likvido – cyan (overlay on Fælles, top-right pocket) */}
        <polygon
          points="1095,118 1235,152 1235,358 1095,358"
          fill="#00CCCC"
          stroke="#333"
          strokeWidth="1.5"
        />
        <text x="1165" y="245" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="bold">Likvido</text>
        <text x="1165" y="264" textAnchor="middle" fill="#fff" fontSize="12">59 m²</text>

        {/* Acubiz – red (right column) */}
        <polygon
          points="1235,152 1385,188 1385,665 1235,665"
          fill="#CC3333"
          stroke="#333"
          strokeWidth="1.5"
        />
        <text x="1310" y="410" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="bold">Acubiz</text>
        <text x="1310" y="430" textAnchor="middle" fill="#fff" fontSize="12">281 m²</text>

        {/* ── BOTTOM CORRIDOR (y 570 → 665) ── */}

        {/* Visma Software – salmon */}
        <polygon points="25,570 338,570 338,665 25,665" fill="#FF9980" stroke="#333" strokeWidth="1.5"/>
        <text x="182" y="620" textAnchor="middle" fill="#333" fontSize="13" fontWeight="bold">Visma Software</text>
        <text x="182" y="637" textAnchor="middle" fill="#333" fontSize="11">101 m²</text>

        {/* House of Control – orange */}
        <polygon points="338,570 458,570 458,665 338,665" fill="#FF9900" stroke="#333" strokeWidth="1.5"/>
        <text x="398" y="616" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">HoC</text>
        <text x="398" y="632" textAnchor="middle" fill="#333" fontSize="11">33 m²</text>

        {/* VML – hot pink */}
        <polygon points="458,570 515,570 515,665 458,665" fill="#FF44AA" stroke="#333" strokeWidth="1.5"/>
        <text x="487" y="616" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">VML</text>
        <text x="487" y="631" textAnchor="middle" fill="#fff" fontSize="10">19 m²</text>

        {/* Resolve – dark magenta */}
        <polygon points="515,570 582,570 582,665 515,665" fill="#BB0077" stroke="#333" strokeWidth="1.5"/>
        <text x="549" y="614" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Resolve</text>
        <text x="549" y="630" textAnchor="middle" fill="#fff" fontSize="10">25 m²</text>

        {/* HQ – bright green */}
        <polygon points="582,570 638,570 638,665 582,665" fill="#22AA00" stroke="#333" strokeWidth="1.5"/>
        <text x="610" y="616" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">HQ</text>
        <text x="610" y="631" textAnchor="middle" fill="#fff" fontSize="10">19 m²</text>

        {/* AI – teal */}
        <polygon points="638,570 690,570 690,665 638,665" fill="#44CCBB" stroke="#333" strokeWidth="1.5"/>
        <text x="664" y="616" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">AI</text>
        <text x="664" y="631" textAnchor="middle" fill="#fff" fontSize="10">22 m²</text>

        {/* Rackbeat – medium blue */}
        <polygon points="690,570 1235,570 1235,665 690,665" fill="#5577BB" stroke="#333" strokeWidth="1.5"/>
        <text x="963" y="620" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">Rackbeat</text>
        <text x="963" y="640" textAnchor="middle" fill="#fff" fontSize="13">227 m²</text>

        {/* ── Building outline on top ── */}
        <polygon
          points="25,300 25,665 1385,665 1385,188 1265,152 1050,112 750,82 430,62 430,22 345,22 265,62"
          fill="none"
          stroke="#222"
          strokeWidth="3"
        />

        {/* ── Legend ── */}
        <g transform="translate(30, 690)">
          {[
            { color: "#FF77BB", label: "TimeMsystem" },
            { color: "#7766CC", label: "Intempus" },
            { color: "#88BB44", label: "Meebook" },
            { color: "#44BB55", label: "Penneo" },
            { color: "#7BAFD4", label: "Fælles" },
            { color: "#00CCCC", label: "Likvido" },
            { color: "#CC3333", label: "Acubiz" },
            { color: "#FF9980", label: "Visma Software" },
            { color: "#FF9900", label: "HoC" },
            { color: "#FF44AA", label: "VML" },
            { color: "#BB0077", label: "Resolve" },
            { color: "#22AA00", label: "HQ" },
            { color: "#44CCBB", label: "AI" },
            { color: "#5577BB", label: "Rackbeat" },
          ].map((item, i) => (
            <g key={item.label} transform={`translate(${i * 96}, 0)`}>
              <rect width="14" height="14" fill={item.color} rx="2"/>
              <text x="18" y="12" fontSize="11" fill="#333">{item.label}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
