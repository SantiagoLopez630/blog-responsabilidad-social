import { useState } from "react"

type IconName = "arrow" | "building" | "calendar" | "chevron" | "clock" | "food" | "instagram" | "leaf" | "linkedin" | "map" | "menu" | "people" | "quote" | "store" | "x"

function Icon({
  name,
  className = "size-5",
}: {
  name: IconName
  className?: string
}) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    building: (
      <>
        <path d="M3 21h18M6 21V6l6-3 6 3v15M9 9h.01M9 13h.01M15 9h.01M15 13h.01M10 21v-4h4v4" />
      </>
    ),
    calendar: (
      <>
        <path d="M6 2v3M18 2v3M3 9h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z" />
        <path d="M7 13h3v3H7z" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    food: (
      <>
        <path d="M6 3v8M3.5 3v5A2.5 2.5 0 0 0 6 10.5 2.5 2.5 0 0 0 8.5 8V3M6 10.5V21M16 3c-2 2-3 5-3 8h5V3h-2ZM18 11v10" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    leaf: (
      <>
        <path d="M20 4C12 4 6 7 6 13c0 3 2 5 5 5 6 0 9-7 9-14Z" />
        <path d="M4 21c2-6 6-9 12-12" />
      </>
    ),
    linkedin: (
      <>
        <path d="M7 9v12H3V9h4ZM5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM11 21V9h4v2c1-1.5 2.5-2.5 4.5-2 2 .5 2.5 2 2.5 5v7h-4v-6c0-2-.5-3-1.5-3S15 13 15 15v6h-4Z" />
      </>
    ),
    map: (
      <>
        <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" />
        <path d="M9 3v15M15 6v15" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-4 2-7 6-7s6 3 6 7M16 5a3 3 0 0 1 0 6M16 13c3 0 5 2 5 6" />
      </>
    ),
    quote: (
      <>
        <path d="M5 11h5v8H3v-6c0-5 2-8 6-9M16 11h5v8h-7v-6c0-5 2-8 6-9" />
      </>
    ),
    store: (
      <>
        <path d="M3 9h18l-2-5H5L3 9ZM5 9v11h14V9M9 20v-6h6v6" />
        <path d="M3 9c0 2 3 3 4.5 1.5C9 12 12 12 13.5 10.5 15 12 18 11 18 9" />
      </>
    ),
    x: (
      <>
        <path d="M5 5l14 14M19 5 5 19" />
      </>
    ),
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const posts = [
  {
    no: "01",
    title: "El desperdicio también deja huella",
    type: "Concientización",
    color: "bg-[#DFF3E8]",
    icon: "leaf" as IconName,
  },
  {
    no: "02",
    title: "Así funciona la conexión solidaria",
    type: "App mockup",
    color: "bg-[#FFF0DF]",
    icon: "map" as IconName,
  },
  {
    no: "03",
    title: "Tu comercio puede ser parte del cambio",
    type: "Comerciantes",
    color: "bg-[#E5EEF0]",
    icon: "store" as IconName,
  },
  {
    no: "04",
    title: "Alianzas que alimentan comunidad",
    type: "Albergues",
    color: "bg-[#F5E9DC]",
    icon: "people" as IconName,
  },
  {
    no: "05",
    title: "Cuando lo circular se vuelve cotidiano",
    type: "Economía circular",
    color: "bg-[#E9F2DB]",
    icon: "arrow" as IconName,
  },
  {
    no: "06",
    title: "Sé parte de nuestra primera ruta",
    type: "Lanzamiento beta",
    color: "bg-[#FDE8D6]",
    icon: "calendar" as IconName,
  },
]

function AppMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-[500px] py-6 lg:py-0"
      aria-label="Prototipo visual de la aplicación Rescate Alimentario"
    >
      <div className="absolute left-0 top-20 hidden rounded-2xl bg-white p-4 shadow-xl sm:block">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-[#E4F7EC] text-[#168C4A]">
            <Icon name="food" />
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#82908B]">
              Alimentos disponibles
            </p>
            <p className="text-lg font-extrabold text-[#19342A]">24 kg</p>
          </div>
        </div>
      </div>
      <div className="phone relative z-10 mx-auto w-[270px] rounded-[2.9rem] border-[7px] border-[#19342A] bg-white p-2 shadow-[0_28px_70px_rgba(24,65,48,.22)] sm:w-[300px]">
        <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-[#19342A]" />
        <div className="overflow-hidden rounded-[2.25rem] bg-[#F5F7F3]">
          <div className="flex items-center justify-between bg-white px-5 pb-3 pt-8">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-widest text-[#819188]">
                Buenos días
              </span>
              <h3 className="text-base font-extrabold text-[#19342A]">
                Encuentra y rescata
              </h3>
            </div>
            <span className="grid size-9 place-items-center rounded-full bg-[#E6F7ED] text-[#168C4A]">
              <Icon name="leaf" className="size-4" />
            </span>
          </div>
          <div className="relative h-[310px] overflow-hidden bg-[#E8EFE8]">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 300 310"
              fill="none"
            >
              <path
                d="M-20 68C65 85 86 2 170 28s76 81 159 58M-20 239c71-29 86 28 147-7s109-12 194 7"
                stroke="#D4DED5"
                strokeWidth="22"
              />
              <path
                d="M-20 68C65 85 86 2 170 28s76 81 159 58M-20 239c71-29 86 28 147-7s109-12 194 7"
                stroke="white"
                strokeWidth="15"
              />
              <path
                d="M67-10c-11 51 30 79 13 129s-38 85-13 201M236-10c-30 43-7 84-25 125s-15 115 7 195"
                stroke="white"
                strokeWidth="12"
              />
              <path
                d="M74 233c8-50 34-76 73-82 43-7 69-37 76-83"
                stroke="#2ECC71"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="7 7"
              />
              {[
                ["74", "230"],
                ["146", "151"],
                ["222", "70"],
              ].map(([x, y], i) => (
                <g key={i} transform={`translate(${x} ${y})`}>
                  <path
                    d="M0 0c-12 0-20 9-20 19 0 14 20 31 20 31s20-17 20-31C20 9 12 0 0 0Z"
                    fill={i === 1 ? "#E67E22" : "#2ECC71"}
                  />
                  <circle cy="18" r="7" fill="white" />
                </g>
              ))}
            </svg>
            <div className="absolute left-4 top-4 right-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-md">
              <Icon name="map" className="size-4 text-[#1A9D57]" />
              <span className="text-[11px] font-semibold text-[#74817B]">
                Buscar donaciones cercanas...
              </span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-white p-3 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-[#FFF0DF] text-[#E67E22]">
                  <Icon name="store" className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-extrabold text-[#19342A]">
                    Panadería La Esperanza
                  </p>
                  <p className="text-[9px] font-semibold text-[#82908B]">
                    8.2 kg · a 1.4 km
                  </p>
                </div>
                <span className="rounded-full bg-[#2ECC71] px-2 py-1 text-[8px] font-extrabold uppercase text-white">
                  Disponible
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-around bg-white px-4 py-3 text-[#97A39D]">
            <span className="text-[#1A9D57]">
              <Icon name="map" className="size-5" />
            </span>
            <Icon name="food" className="size-5" />
            <Icon name="people" className="size-5" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-16 right-0 z-20 hidden rounded-2xl bg-[#19342A] p-4 text-white shadow-xl sm:block">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#9FDAB9]">
          Ruta optimizada
        </p>
        <p className="mt-1 text-sm font-extrabold">12 min · 3 paradas</p>
      </div>
      <div className="absolute -right-5 top-6 size-24 rounded-full border border-[#B9E7CD]" />
      <div className="absolute bottom-5 left-3 size-14 rounded-full bg-[#F4C795]/40" />
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activePost, setActivePost] = useState(0)

  const nav = [
    ["Problemática", "#problematica"],
    ["Plan de trabajo", "#plan"],
    ["Reflexión", "#reflexion"],
  ]

  return (
    <div className="min-h-screen bg-[#FBFCF8] text-[#243D34]">
      <header className="sticky top-0 z-50 border-b border-[#DDE8E1] bg-[#FBFCF8]/95 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a
            href="#"
            className="flex items-center gap-3"
            aria-label="Rescate Alimentario, inicio"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-[#2ECC71] text-white">
              <Icon name="leaf" />
            </span>
            <span className="leading-tight">
              <strong className="block text-sm font-extrabold tracking-tight text-[#19342A]">
                RESCATE ALIMENTARIO
              </strong>
              <span className="text-[11px] font-bold uppercase tracking-[.18em] text-[#E67E22]">
                Conexión solidaria
              </span>
            </span>
          </a>
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Navegación principal"
          >
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-bold text-[#50665D] transition hover:text-[#168C4A]"
              >
                {label}
              </a>
            ))}
            <a
              href="#plan"
              className="rounded-full bg-[#19342A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2B5746]"
            >
              Semana 2 <span className="ml-2 text-[#6EE29D]">→</span>
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid size-11 place-items-center rounded-xl border border-[#D8E4DC] md:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#DDE8E1] bg-white px-5 py-4 md:hidden">
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-[#EDF2EE] py-3 font-bold"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="hero-grid absolute inset-0 opacity-50" />
          <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-24">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C5E8D3] bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.16em] text-[#168C4A]">
                <span className="size-2 rounded-full bg-[#2ECC71]" /> Práctica
                en responsabilidad social
              </div>
              <h1 className="max-w-3xl font-display text-[2.9rem] font-bold leading-[1.02] tracking-[-.045em] text-[#19342A] sm:text-6xl lg:text-[4.7rem]">
                Humanidades Digitales:{" "}
                <span className="text-[#168C4A]">innovación social</span> contra
                el desperdicio
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#62756D]">
                Una plataforma digital para conectar en tiempo real comercios
                locales con albergues y fundaciones comunitarias.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#plan"
                  className="group flex items-center justify-center gap-3 rounded-full bg-[#E67E22] px-6 py-4 text-sm font-extrabold text-white shadow-[0_10px_25px_rgba(230,126,34,.2)] transition hover:-translate-y-0.5 hover:bg-[#D66E13]"
                >
                  Explorar plan de trabajo{" "}
                  <Icon
                    name="arrow"
                    className="size-4 transition group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="#prototipo"
                  className="flex items-center justify-center gap-3 rounded-full border border-[#C8D7CE] bg-white px-6 py-4 text-sm font-extrabold text-[#19342A] transition hover:border-[#2ECC71]"
                >
                  <Icon name="map" className="size-4 text-[#168C4A]" /> Ver
                  prototipo de la app
                </a>
              </div>
              <div className="mt-11 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#DCE7E0] pt-6">
                <div>
                  <strong className="block text-xl font-extrabold text-[#19342A]">
                    Bogotá D.C.
                  </strong>
                  <span className="text-xs font-semibold text-[#7B8B84]">
                    Territorio de impacto
                  </span>
                </div>
                <div>
                  <strong className="block text-xl font-extrabold text-[#19342A]">
                    ODS 2 · 12
                  </strong>
                  <span className="text-xs font-semibold text-[#7B8B84]">
                    Hambre cero y consumo responsable
                  </span>
                </div>
              </div>
            </div>
            <div id="prototipo">
              <AppMockup />
            </div>
          </div>
        </section>

        <section
          id="problematica"
          className="scroll-mt-20 bg-[#19342A] py-24 text-white lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <span className="eyebrow text-[#68DB98]">
                  Entrada 01 del blog
                </span>
                <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                  Comprender el problema es el primer rescate.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-[#B8CBC2] lg:justify-self-end">
                El desperdicio y la inseguridad alimentaria no son realidades
                aisladas: conviven en la misma ciudad, separadas por barreras de
                información, logística y coordinación.
              </p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <article className="group rounded-[2rem] border border-white/10 bg-[#24483A] p-7 transition hover:-translate-y-1 hover:border-[#51D087]/50 sm:p-9">
                <div className="flex items-start justify-between">
                  <span className="grid size-14 place-items-center rounded-2xl bg-[#2ECC71] text-[#19342A]">
                    <Icon name="store" className="size-7" />
                  </span>
                  <span className="font-display text-5xl text-white/10">
                    01
                  </span>
                </div>
                <p className="mt-10 text-xs font-extrabold uppercase tracking-[.18em] text-[#68DB98]">
                  Problemática ambiental
                </p>
                <h3 className="mt-3 text-2xl font-extrabold leading-snug">
                  Desperdicio comercial y saturación del Relleno Sanitario Doña
                  Juana.
                </h3>
                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Emisión de CH₄",
                    "Huella hídrica",
                    "Descarte preventivo",
                    "Impacto ambiental",
                  ].map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-[#D4E1DB]"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </article>
              <article className="group rounded-[2rem] border border-white/10 bg-[#E67E22] p-7 text-white transition hover:-translate-y-1 sm:p-9">
                <div className="flex items-start justify-between">
                  <span className="grid size-14 place-items-center rounded-2xl bg-white/20 text-white">
                    <Icon name="people" className="size-7" />
                  </span>
                  <span className="font-display text-5xl text-white/20">
                    02
                  </span>
                </div>
                <p className="mt-10 text-xs font-extrabold uppercase tracking-[.18em] text-[#FFE0C1]">
                  Problemática social
                </p>
                <h3 className="mt-3 text-2xl font-extrabold leading-snug">
                  Inseguridad alimentaria en albergues, geriátricos y
                  fundaciones vulnerables.
                </h3>
                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Pobreza urbana",
                    "Barreras logísticas",
                    "Proximidad",
                    "Vulnerabilidad social",
                  ].map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-white/25 bg-white/10 px-3 py-2 text-xs font-bold"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </article>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {[
                [
                  "700+",
                  "palabras de análisis local, nacional y latinoamericano",
                ],
                ["3 escalas", "una lectura territorial conectada"],
                ["1 propósito", "convertir excedentes en oportunidades"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-2xl border border-white/10 p-6"
                >
                  <strong className="font-display text-3xl text-[#68DB98]">
                    {value}
                  </strong>
                  <p className="mt-2 text-sm leading-6 text-[#AFC3BA]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="plan" className="scroll-mt-16 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <span className="eyebrow text-[#E67E22]">
                  Entrada 02 del blog
                </span>
                <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-tight text-[#19342A] sm:text-5xl">
                  Un plan para mover ideas y alimentos.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#6C7E76]">
                Estrategia de comunicación, conversación experta y validación
                comunitaria.
              </p>
            </div>

            <div className="mt-14 overflow-hidden rounded-[2rem] border border-[#D8E5DD] bg-white">
              <div className="flex flex-col justify-between gap-4 border-b border-[#E1EAE4] p-6 sm:flex-row sm:items-center sm:p-8">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#168C4A]">
                    Fanpage · Calendario editorial
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold text-[#19342A]">
                    6 publicaciones para activar la conversación
                  </h3>
                </div>
                <span className="w-fit rounded-full bg-[#E8F7EE] px-4 py-2 text-xs font-extrabold text-[#168C4A]">
                  Plan de 3 semanas
                </span>
              </div>
              <div className="grid md:grid-cols-[.95fr_1.05fr]">
                <div
                  className={`${posts[activePost].color} relative min-h-[390px] overflow-hidden p-8 sm:p-10`}
                >
                  <span className="absolute right-5 top-2 font-display text-[9rem] leading-none text-[#19342A]/5">
                    {posts[activePost].no}
                  </span>
                  <div className="relative flex h-full flex-col justify-between">
                    <span className="grid size-16 place-items-center rounded-2xl bg-white/80 text-[#19342A] shadow-sm">
                      <Icon name={posts[activePost].icon} className="size-8" />
                    </span>
                    <div>
                      <span className="rounded-full bg-white/75 px-3 py-2 text-[10px] font-extrabold uppercase tracking-widest text-[#4D665C]">
                        {posts[activePost].type}
                      </span>
                      <h4 className="mt-5 max-w-md font-display text-4xl leading-tight text-[#19342A]">
                        {posts[activePost].title}
                      </h4>
                      <p className="mt-4 max-w-md text-sm leading-6 text-[#536A60]">
                        Contenido educativo que traduce el impacto social y
                        ambiental en acciones cotidianas, cercanas y posibles.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="divide-y divide-[#E8EEE9]">
                  {posts.map((post, i) => (
                    <button
                      key={post.no}
                      onClick={() => setActivePost(i)}
                      className={`flex w-full items-center gap-4 px-6 py-4 text-left transition sm:px-8 ${
                        i === activePost ? "bg-[#F5FAF6]" : "hover:bg-[#FAFCFA]"
                      }`}
                      aria-pressed={i === activePost}
                    >
                      <span
                        className={`text-xs font-extrabold ${
                          i === activePost ? "text-[#E67E22]" : "text-[#A0ADA7]"
                        }`}
                      >
                        {post.no}
                      </span>
                      <span className="flex-1">
                        <strong className="block text-sm text-[#19342A]">
                          {post.title}
                        </strong>
                        <span className="mt-1 block text-[11px] font-bold text-[#809089]">
                          {post.type}
                        </span>
                      </span>
                      <Icon
                        name="chevron"
                        className={`size-4 ${
                          i === activePost ? "text-[#168C4A]" : "text-[#B2BDB8]"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-7 lg:grid-cols-2">
              <article className="rounded-[2rem] bg-[#EAF6EE] p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-[#2ECC71] text-white">
                    <Icon name="calendar" />
                  </span>
                  <span className="rounded-full bg-white px-3 py-2 text-[10px] font-extrabold uppercase tracking-widest text-[#168C4A]">
                    Evento online
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-extrabold leading-snug text-[#19342A]">
                  Tecnologías para la reducción del desperdicio alimentario y la
                  economía solidaria
                </h3>
                <div className="mt-5 flex flex-wrap gap-4 text-xs font-bold text-[#667A70]">
                  <span className="flex items-center gap-2">
                    <Icon name="calendar" className="size-4 text-[#168C4A]" />{" "}
                    17 de mayo, 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <Icon name="clock" className="size-4 text-[#168C4A]" /> 60
                    minutos
                  </span>
                </div>
                <ol className="mt-8 grid grid-cols-3 border-t border-[#CDE3D5] pt-6">
                  {[
                    ["01", "Inicio", "10 min"],
                    ["02", "Desarrollo", "40 min"],
                    ["03", "Cierre", "10 min"],
                  ].map(([n, t, d]) => (
                    <li key={n}>
                      <span className="text-[10px] font-extrabold text-[#168C4A]">
                        {n}
                      </span>
                      <strong className="mt-1 block text-sm text-[#19342A]">
                        {t}
                      </strong>
                      <span className="text-xs text-[#71827A]">{d}</span>
                    </li>
                  ))}
                </ol>
              </article>
              <article className="rounded-[2rem] bg-[#FFF1E3] p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-[#E67E22] text-white">
                    <Icon name="people" />
                  </span>
                  <span className="rounded-full bg-white px-3 py-2 text-[10px] font-extrabold uppercase tracking-widest text-[#C8640D]">
                    Voz experta
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-extrabold text-[#19342A]">
                  Entrevista: logística de rescate con enfoque comunitario
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#6D766C]">
                  Líder social con experiencia articulando comercios, bancos de
                  alimentos y organizaciones territoriales.
                </p>
                <div className="mt-6 rounded-2xl bg-white/70 p-5">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#C8640D]">
                    3 preguntas clave
                  </p>
                  <ul className="mt-3 space-y-2 text-xs font-bold text-[#4E6259]">
                    <li>¿Dónde se rompe hoy la cadena de donación?</li>
                    <li>¿Cómo construimos confianza entre actores?</li>
                    <li>¿Qué tecnología necesita realmente el territorio?</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          id="reflexion"
          className="scroll-mt-20 px-5 py-12 lg:px-8 lg:py-20"
        >
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#E67E22] px-7 py-16 text-white sm:px-14 lg:px-20 lg:py-24">
            <Icon
              name="quote"
              className="absolute right-10 top-8 size-36 text-white/10"
            />
            <div className="relative max-w-4xl">
              <span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#FFE0C0]">
                Reflexión personal · Responsabilidad social
              </span>
              <blockquote className="mt-7 font-display text-3xl leading-[1.25] tracking-tight sm:text-4xl lg:text-5xl">
                “Entendí que la tecnología no transforma por sí sola: transforma
                cuando escucha, conecta y pone la dignidad humana en el centro.”
              </blockquote>
              <p className="mt-8 max-w-2xl text-base leading-7 text-[#FFF1E5]">
                Como estudiante de Ingeniería de Software, este proyecto me
                invita a diseñar con empatía. Cada decisión técnica también es
                una decisión ética: puede acercar recursos, reconocer realidades
                y fortalecer redes de cuidado.
              </p>
              <div className="mt-9 flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-white font-display text-lg font-bold text-[#E67E22]">
                  SL
                </span>
                <div>
                  <strong className="block">
                    Santiago Steven López Sanabria
                  </strong>
                  <span className="text-xs font-semibold text-[#FFE0C0]">
                    Ingeniería de Software · ID 1115785
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 bg-[#122C23] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.6fr] lg:px-8">
          <div>
            <a href="#" className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-[#2ECC71]">
                <Icon name="leaf" />
              </span>
              <strong className="text-sm tracking-wide">
                RESCATE ALIMENTARIO
              </strong>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#9FB6AD]">
              Humanidades digitales al servicio de una Bogotá más solidaria,
              circular y consciente.
            </p>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#67D996]">
              Afiliación
            </p>
            <p className="mt-4 text-sm font-bold">UNIMINUTO</p>
            <p className="mt-1 text-sm text-[#9FB6AD]">
              Práctica en Responsabilidad Social
            </p>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white underline decoration-[#E67E22] underline-offset-4"
            >
              Referencias APA <Icon name="arrow" className="size-4" />
            </a>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#67D996]">
              Sigue la campaña
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="grid size-11 place-items-center rounded-full border border-white/20 transition hover:border-[#2ECC71] hover:text-[#67D996]"
              >
                <Icon name="instagram" className="size-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid size-11 place-items-center rounded-full border border-white/20 transition hover:border-[#2ECC71] hover:text-[#67D996]"
              >
                <Icon name="linkedin" className="size-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-[11px] font-semibold text-[#79948A] sm:flex-row sm:justify-between lg:px-8">
            <span>© 2025 Rescate Alimentario: Conexión Solidaria</span>
            <span>Proyecto académico · Semana 2</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
