const FAQ_DATA = [
  {q:"Hvilke rabataftaler har vi?",a:"Visma House har rabataftaler med stort set alle butikker og restaurationer i nærområdet samt en del i København og omegn. Alle rabataftaler kan ses via interne links.",c:"Info om huset"},
  {q:"Hvor mange selskaber er der i Visma House?",a:"Vi er 17 firmaer i huset.",c:"Info om huset"},
  {q:"Arbejder vi med ESG i Visma House?",a:"Ja, ESG er en integreret del af driften i Visma House. Vi arbejder med at reducere klimaaftryk gennem intelligent bygningsdrift og AI, der optimerer lys, varme og ventilation.",c:"Info om huset"},
  {q:"Har vi en arbejdsmiljøgruppe i Visma House?",a:"Ja, vi har en arbejdsmiljøgruppe på tværs af huset. Kontakt Marie Møgelvang eller Mikael Valfridsson ved spørgsmål.",c:"Info om huset"},
  {q:"Hvor sidder hjertestarteren i huset?",a:"Vi har tre hjertestartere: udenfor huset, i stueetagen ved kantinen og på 4. sal.",c:"Info om huset"},
  {q:"Hvor mange m2 er Visma House?",a:"Visma House er 20.000 m2.",c:"Info om huset"},
  {q:"Hvor mange medarbejdere arbejder her?",a:"Der er cirka 1100 medarbejdere tilknyttet Visma House, og dagligt møder cirka 600–650 ind.",c:"Info om huset"},
  {q:"Ejer Visma huset vi bor i?",a:"Nej, Visma lejer bygningen.",c:"Info om huset"},
  {q:"Hvem er kommunikation og PR-ansvarlig for Visma House?",a:"Det er Astrid Zimmer Nielsen og Iben Barsøe.",c:"Info om huset"},
  {q:"Kan man købe en aktie i Visma?",a:"Nej, Visma er ikke et børsnoteret selskab.",c:"Info om huset"},
  {q:"Hvem er overordnet ansvarlig for Facility i Visma House?",a:"Det er Facility Manager Mikael Valfridsson.",c:"Info om huset"},
  {q:"Hvornår og hvordan kan jeg tilgå huset?",a:"Det er muligt at tilgå huset 24/7 med dit adgangskort.",c:"Kontakt & Facility"},
  {q:"Hvad er receptionens åbningstid?",a:"Mandag–fredag kl. 07.30–16.00.",c:"Kontakt & Facility"},
  {q:"Hvordan kontakter jeg receptionen?",a:"Mail: reception.cby@visma.com / Tlf.: +45 31 46 93 96",c:"Kontakt & Facility"},
  {q:"Hvad gør jeg ved akutte driftsproblemer uden for åbningstid?",a:"Kontakt Asil på vagttelefon +45 53 69 37 03.",c:"Kontakt & Facility"},
  {q:"Hvornår skal jeg kontakte vagttelefonen?",a:"Kl. 15.00–07.00 på hverdage samt i weekender og helligdage.",c:"Kontakt & Facility"},
  {q:"Er det tilladt at få leveret private pakker til arbejdspladsen?",a:"Nej, det er ikke muligt grundet begrænset kapacitet i receptionen.",c:"Kontakt & Facility"},
  {q:"Hvem drifter husets tekniske anlæg?",a:"Asil varetager drift uden for normal åbningstid.",c:"Kontakt & Facility"},
  {q:"Hvordan fejlmelder jeg, når noget ikke virker?",a:"Send mail til receptionen med beskrivelse, lokation og rumnummer.",c:"Kontakt & Facility"},
  {q:"Hvad skal jeg huske ved fejlmelding?",a:"Angiv altid rumnummer eller vinduesnummer.",c:"Kontakt & Facility"},
  {q:"Hvad gør jeg ved vand, lys eller varme-problemer?",a:"Kontakt receptionen på reception.cby@visma.com",c:"Kontakt & Facility"},
  {q:"Hvordan bestiller man en taxi?",a:"Kontakt receptionen, så bestiller de en taxa for dig.",c:"Kontakt & Facility"},
  {q:"Hvor finder jeg IT Service?",a:"1. etage. Mandag–torsdag 08.00–16.00, fredag 08.00–15.00.",c:"IT & support"},
  {q:"Hvad kan IT Service hjælpe med?",a:"Adgangskort, IT-udstyr, netværk og AV.",c:"IT & support"},
  {q:"Hvordan opretter jeg en IT-sag?",a:"Via https://service.visma.com",c:"IT & support"},
  {q:"Hvilken mail kan IT kontaktes på?",a:"service@visma.com",c:"IT & support"},
  {q:"Hvad gør jeg ved akut IT-nedbrud?",a:"Ring +45 71 96 91 12 (hverdage 08.00–15.00).",c:"IT & support"},
  {q:"Hvornår er frokostservering?",a:"Kl. 11.00–13.00.",c:"Kantine & mad"},
  {q:"Hvem driver kantinen?",a:"ISS – The Food Place.",c:"Kantine & mad"},
  {q:"Hvordan fungerer frokost?",a:"Du vælger én hovedret og tilbehør fra stationerne.",c:"Kantine & mad"},
  {q:"Hvilke madstationer findes der?",a:"Go Green (vegetar), World of Flavour (varm ret), The Deli (kolde retter), Harvest (salater).",c:"Kantine & mad"},
  {q:"Hvad er fast track frokost?",a:"En hurtig frokostløsning til take-away mellem møder.",c:"Kantine & mad"},
  {q:"Hvordan får jeg min frokost?",a:"Træk en billet i terminalen ved elevatorerne eller i stueetagen.",c:"Kantine & mad"},
  {q:"Hvor finder jeg terminaler?",a:"Ved elevatorerne på alle etager samt i Green Space.",c:"Kantine & mad"},
  {q:"Kan jeg trække billet til andre?",a:"Nej, kun til dig selv.",c:"Kantine & mad"},
  {q:"Er maden i kantinen økologisk?",a:"Ja, ISS har bronzemærket (minimum 30 % økologi).",c:"Kantine & mad"},
  {q:"Hvordan gør jeg, når jeg har gæster til frokost?",a:"Bestil en virksomhedsbetalt gæstebillet via portalen og hent fysisk billet i receptionen.",c:"Kantine & mad"},
  {q:"Hvad gør jeg hvis jeg mister min billet?",a:"Træk en ny billet. Ved Ad Hoc betaling betales to gange.",c:"Kantine & mad"},
  {q:"Hvad gør jeg ved glemt adgangskort til frokost?",a:"Bestil 'Glemt kort' billet via portalen og hent i receptionen.",c:"Kantine & mad"},
  {q:"Må jeg tage børn med i kantinen?",a:"Ja, men der skal købes gæstebillet.",c:"Kantine & mad"},
  {q:"Kan jeg købe takeaway?",a:"Ja, overskydende mad sælges kl. 13.00–13.10 for 40 kr via MobilePay.",c:"Kantine & mad"},
  {q:"Hvor kan jeg købe frostmad i kantinen?",a:"Ved takeaway-køleskabene. Betales via MobilePay.",c:"Kantine & mad"},
  {q:"Må jeg reservere bord i kantinen?",a:"Ja, med begrænsninger afhængigt af antal personer. Kontakt receptionen.",c:"Kantine & mad"},
  {q:"Hvor længe må man reservere bord?",a:"Maksimalt 30 minutter.",c:"Kantine & mad"},
  {q:"Hvornår må +10 gæster sidde i kantinen?",a:"Fra kl. 12.30.",c:"Kantine & mad"},
  {q:"Kan jeg bestille forplejning til mit møde?",a:"Ja, via interne bestillingsmuligheder.",c:"Kantine & mad"},
  {q:"Hvad bruger jeg mit adgangskort til?",a:"Adgangskort bruges til alle yderdøre og indvendige døre uden for åbningstid. Husk at afslutte med #.",c:"Adgang & sikkerhed"},
  {q:"Må jeg låne mit kort ud?",a:"Nej, adgangskort er personligt.",c:"Adgang & sikkerhed"},
  {q:"Hvad gør jeg hvis jeg mister kort?",a:"Kontakt IT med det samme.",c:"Adgang & sikkerhed"},
  {q:"Hvad gør jeg hvis jeg glemmer kort?",a:"Receptionen kan udlåne et kort, som skal returneres samme dag.",c:"Adgang & sikkerhed"},
  {q:"Hvad gør jeg hvis jeg har glemt min kode?",a:"Kontakt IT Service via en ticket.",c:"Adgang & sikkerhed"},
  {q:"Hvad sker der hvis en dør ikke lukkes?",a:"Der kan gå alarm.",c:"Adgang & sikkerhed"},
  {q:"Må flere gå igennem speedgate samtidig?",a:"Nej, det aktiverer alarm.",c:"Adgang & sikkerhed"},
  {q:"Hvorfor skal man bruge adgangskort til mødelokalerne i stueetagen?",a:"Af sikkerhedsmæssige årsager, da gæster har adgang til området.",c:"Adgang & sikkerhed"},
  {q:"Hvor mange alarmer har vi i huset?",a:"Vi har 4 alarmer, herunder brand- og tyverialarm.",c:"Alarmer & beredskab"},
  {q:"Hvornår aktiveres alarmen i huset?",a:"Uden for arbejdstid kører alarmen i 2-timers intervaller.",c:"Alarmer & beredskab"},
  {q:"Kan man slukke alarmen i huset?",a:"Ja, midlertidigt via adgangskort ved trappeopgang.",c:"Alarmer & beredskab"},
  {q:"Hvad skal jeg gøre hvis der går en brandalarm?",a:"Forlad området straks og følg talevarslingen. Samlingssted: Ny Carlsberg Vej 50.",c:"Alarmer & beredskab"},
  {q:"Hvorfor har vi ikke ildslukkere i Visma House?",a:"Fordi huset er udstyret med sprinklersystem.",c:"Alarmer & beredskab"},
  {q:"Har vi en beredskabsplan?",a:"Ja, der findes en plan internt i huset.",c:"Alarmer & beredskab"},
  {q:"Hvornår er fitness åbent?",a:"24/7 for medarbejdere.",c:"Fitness & faciliteter"},
  {q:"Hvor ligger fitness?",a:"Stueetagen bag mødecentret.",c:"Fitness & faciliteter"},
  {q:"Hvor kan jeg bade?",a:"I kælderen i omklædningsfaciliteter.",c:"Fitness & faciliteter"},
  {q:"Hvad gør jeg hvis jeg glemmer noget i fitness?",a:"Kontakt receptionen.",c:"Fitness & faciliteter"},
  {q:"Hvordan registrerer jeg gæster?",a:"Gæster skal tjekke ind i receptionen. Du får besked via SMS/mail.",c:"Gæster & registrering"},
  {q:"Kan gæster få adgangskort?",a:"Som udgangspunkt nej. Kontakt receptionen ved behov.",c:"Gæster & registrering"},
  {q:"Hvem har ansvar for gæsten?",a:"Den medarbejder der inviterer gæsten.",c:"Gæster & registrering"},
  {q:"Hvad gælder ved +10 gæster?",a:"Gæster skal pre-registreres, og du står selv for check-in.",c:"Gæster & registrering"},
  {q:"Må gæster være i hele huset?",a:"Kun hvis de ledsages af en medarbejder.",c:"Gæster & registrering"},
  {q:"Hvem bestiller adgangskort til nye medarbejdere?",a:"Det gør den ansvarlige via IT.",c:"Nye medarbejdere"},
  {q:"Skal receptionen informeres om nye medarbejdere?",a:"Ja, send navn og tidspunkt.",c:"Nye medarbejdere"},
  {q:"Hvordan booker jeg mødelokaler?",a:"Via Google Calendar.",c:"Mødelokaler"},
  {q:"Må jeg booke alle mødelokaler ved eksterne møder?",a:"Stueetagen er forbeholdt eksterne møder.",c:"Mødelokaler"},
  {q:"Hvad hvis jeg ikke bruger lokalet?",a:"Du skal annullere det.",c:"Mødelokaler"},
  {q:"Hvad sker der hvis jeg ikke tjekker ind?",a:"Lokalet frigives automatisk.",c:"Mødelokaler"},
  {q:"Må jeg booke store lokaler til små møder?",a:"Nej, størrelsen skal matche behovet.",c:"Mødelokaler"},
  {q:"Kan man booke en muteboks?",a:"Nej, de fungerer efter først-til-mølle.",c:"Mødelokaler"},
  {q:"Hvordan booker jeg Earth (auditorium)?",a:"Send mail til earth.cby@visma.com",c:"Auditorium"},
  {q:"Hvornår skal Earth bookes?",a:"Senest 48 timer før ved behov for opsætning.",c:"Auditorium"},
  {q:"Må man spise i Earth?",a:"Nej, brug Green Space.",c:"Auditorium"},
  {q:"Hvordan håndteres gæster i Earth?",a:"Du står selv for check-in og badges.",c:"Auditorium"},
  {q:"Hvor finder jeg kontorartikler?",a:"Depotrum på etagerne samt centralt lager i stueetagen.",c:"Etager & faciliteter"},
  {q:"Hvor printer jeg?",a:"På din egen etage.",c:"Etager & faciliteter"},
  {q:"Kan jeg få hjælp til intern flytning?",a:"Ja, kontakt Facility.",c:"Etager & faciliteter"},
  {q:"Må man bruge alle køkkener?",a:"Brug primært dit eget områdes køkken.",c:"Etager & faciliteter"},
  {q:"Hvordan bruges lockers?",a:"Scan kort ved åbning for at låse.",c:"Etager & faciliteter"},
  {q:"Hvornår gøres der rent?",a:"Hverdage 17–22, lørdag 00–18.",c:"Etager & faciliteter"},
  {q:"Hvordan sorterer jeg affald?",a:"Via separate beholdere (bio, rest, plast, glas, papir).",c:"Etager & faciliteter"},
  {q:"Hvor kan jeg parkere?",a:"Via selskabets egne parkeringsaftaler.",c:"Parkering"},
  {q:"Kan jeg booke gæsteparkering?",a:"Nej, det er ikke muligt.",c:"Parkering"},
  {q:"Hvordan oplader jeg elbil?",a:"Via Norlys app.",c:"Parkering"},
  {q:"Har Visma rabataftaler med p-huse?",a:"Nej.",c:"Parkering"},
  {q:"Hvor parkerer jeg cykel?",a:"I kælderen med adgangskort.",c:"Cykelparkering"},
  {q:"Hvor parkerer jeg scooter?",a:"Sammen med cykler i kælderen.",c:"Cykelparkering"},
  {q:"Hvordan planlægger jeg et event?",a:"Følg interne guides og kontakt events mail.",c:"Arrangementer & events"},
  {q:"Må jeg holde fest i huset?",a:"Kun for Visma medarbejdere.",c:"Arrangementer & events"},
  {q:"Hvad gælder for events udenfor åbningstid?",a:"Kontakt receptionen og koordinér rengøring og vagt.",c:"Arrangementer & events"},
  {q:"Kan jeg bestille catering?",a:"Ja via ISS i kantinen.",c:"Arrangementer & events"},
  {q:"Hvor må man ryge?",a:"Kun ved p-kælder området.",c:"Husregler"},
  {q:"Må man drikke alkohol?",a:"Ja, primært på kontoretager.",c:"Husregler"},
  {q:"Må jeg have kæledyr med?",a:"Afhænger af virksomhedens regler.",c:"Husregler"},
  {q:"Må man bruge kafferiet?",a:"Ja, det er et fællesområde.",c:"Husregler"},
  {q:"Hvad er Galleriet?",a:"Et udstillingsområde med kunst i huset.",c:"Husregler"},
  {q:"Hvordan bestiller man ekstra rengøring?",a:"Kontakt receptionen.",c:"Husregler"},
  {q:"Hvilke leverandører har vi i huset?",a:"ISS (rengøring/kantine), ASIL (teknik), Deichmann (planter), Sluk Tørsten (drikkevarer).",c:"Husregler"}
];

const SYSTEM_PROMPT = `Du er en venlig og hjælpsom FAQ-assistent for Visma House i København.
Svar KUN baseret på nedenstående FAQ-data. Hvis du ikke kan finde svaret, siger du det ærligt og foreslår at kontakte receptionen på reception.cby@visma.com eller +45 31 46 93 96.
Svar altid på dansk. Vær kort, præcis og imødekommende.

FAQ-DATA:
${FAQ_DATA.map(i => `[${i.c}] ${i.q}: ${i.a}`).join('\n')}`;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { message, history = [] } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Manglende besked' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        messages: [...history, { role: 'user', content: message }]
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Anthropic API fejl:', err);
      return res.status(500).json({ error: 'API fejl' });
    }

    const data = await response.json();
    res.json({ reply: data.content[0].text });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Serverfejl' });
  }
};
