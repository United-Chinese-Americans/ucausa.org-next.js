import Link from "next/link";
import { programs } from "@/lib/data/programs";
import styles from "./Program.module.css";

const [
  civilRights,
  convention,
  waves,
  nextGen,
  cultureHeritage,
  civicForums,
  foodOfLove,
  summerUniversity,
] = programs;

function ProgramLink({ link }: { link: NonNullable<(typeof programs)[number]["link"]> }) {
  const content = (
    <>
      {link.label}{" "}
      <span className="material-symbols-outlined text-base">
        {link.external ? "arrow_forward" : "open_in_new"}
      </span>
    </>
  );
  return link.external ? (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-bold text-navy hover:gap-2 transition-all"
    >
      {content}
    </a>
  ) : (
    <Link href={link.href} className="inline-flex items-center gap-1 font-bold text-navy hover:gap-2 transition-all">
      {content}
    </Link>
  );
}

export default function ProgramPage() {
  return (
    <>
      <section className={styles.programHero}>
        <div className={styles.heroContent}>
          <h1>UCA PROGRAMS</h1>
          <p>
            Defending rights, nurturing leadership, and celebrating heritage.
            Discover the core programs driving our community&apos;s
            collective progress.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 my-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Defending Civil Rights */}
          <div className="md:col-span-4 bg-white rounded-xl p-8 shadow-lg border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-navy text-3xl">
                  {civilRights.icon}
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-magenta">
                  {civilRights.eyebrow}
                </span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                {civilRights.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{civilRights.description}</p>
            </div>
          </div>

          {/* Chinese American Convention */}
          <div className="md:col-span-2 bg-navy rounded-xl p-8 shadow-lg text-white flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">{convention.icon}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">{convention.title}</h3>
              <p className="text-white/80 leading-relaxed mb-8">{convention.description}</p>
            </div>
            {convention.link && (
              <Link
                href={convention.link.href}
                className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all"
              >
                {convention.link.label}{" "}
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </Link>
            )}
          </div>

          {/* WAVES */}
          <div className="md:col-span-3 bg-white rounded-xl p-8 shadow-lg border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 text-magenta">
                <span className="material-symbols-outlined">{waves.icon}</span>
                <span className="text-xs font-bold tracking-widest uppercase">{waves.eyebrow}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3">{waves.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{waves.description}</p>
            </div>
            {waves.link && <ProgramLink link={waves.link} />}
          </div>

          {/* Next Generation Programs */}
          <div className="md:col-span-3 bg-white rounded-xl p-8 shadow-lg border border-gray-100 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-magenta mb-4 block">{nextGen.icon}</span>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-2">{nextGen.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{nextGen.description}</p>
            </div>
            {nextGen.link && <ProgramLink link={nextGen.link} />}
          </div>

          {/* Culture & Heritage */}
          <div className="md:col-span-2 bg-magenta/10 rounded-xl p-8 shadow-lg">
            <span className="material-symbols-outlined text-magenta mb-4 block">
              {cultureHeritage.icon}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-2">
              {cultureHeritage.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{cultureHeritage.description}</p>
          </div>

          {/* Civic Leadership Forums */}
          <div className="md:col-span-2 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <span className="material-symbols-outlined text-navy mb-4 block">
              {civicForums.icon}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-2">
              {civicForums.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{civicForums.description}</p>
          </div>

          {/* Food of Love */}
          <div className="md:col-span-2 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <span className="material-symbols-outlined text-navy mb-4 block">
              {foodOfLove.icon}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-2">
              {foodOfLove.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{foodOfLove.description}</p>
          </div>

          {/* UCA Summer University */}
          <div className="md:col-span-6 bg-navy rounded-xl p-8 shadow-lg flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-3xl text-white">
                {summerUniversity.icon}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {summerUniversity.title}
              </h3>
              <p className="text-white/80 max-w-2xl">{summerUniversity.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
