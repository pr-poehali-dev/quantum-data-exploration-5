import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const projects = [
  {
    number: "01",
    title: "Artisán Coffee",
    category: "Брендинг · Упаковка · Стратегия",
    year: "2025",
    description:
      "Разработали полную систему бренда для сети кофеен: от нейминга и логотипа до упаковки и стандартов оформления точек. Позиционирование «ремесленный кофе для деловых людей» позволило поднять средний чек на 34%.",
    tags: ["Логотип", "Упаковка", "Брендбук", "Вывески"],
    link: "#",
    color: "from-amber-900/40 to-stone-900/40",
  },
  {
    number: "02",
    title: "Северный путь",
    category: "Фирменный стиль · Позиционирование",
    year: "2025",
    description:
      "Транспортная компания без лица и стратегии. За 2 месяца выстроили позиционирование, создали фирменный стиль и сайт. Через 4 месяца после запуска — рост входящих заявок на 60%, выход на новые регионы.",
    tags: ["Стратегия", "Логотип", "Сайт", "SEO"],
    link: "#",
    color: "from-stone-800/40 to-amber-950/40",
  },
  {
    number: "03",
    title: "Клиника Здоровье+",
    category: "Логотип · Сайт · Реклама",
    year: "2024",
    description:
      "Ребрендинг частной клиники: новый логотип, сайт с онлайн-записью и рекламные материалы. Запустили контекстную рекламу и разработали стратегию продвижения. Запись через сайт выросла в 3 раза за первый квартал.",
    tags: ["Ребрендинг", "Сайт", "Реклама", "Маркетинг"],
    link: "#",
    color: "from-rose-950/30 to-stone-900/40",
  },
  {
    number: "04",
    title: "СтройМастер",
    category: "Упаковка бренда · Управление процессом",
    year: "2024",
    description:
      "Строительная компания без системы и смысла. Создали историю бренда, разработали фирменный стиль и обучили управляющего выстраивать процессы. Компания вышла на тендеры государственного уровня.",
    tags: ["Нейминг", "Стиль", "Презентация", "Обучение"],
    link: "#",
    color: "from-amber-950/40 to-zinc-900/40",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.2)
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length)
  const next = () => setCurrent((c) => (c + 1) % projects.length)

  const project = projects[current]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div
          className={`mb-8 flex items-end justify-between transition-all duration-700 md:mb-10 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <div>
            <h2 className="mb-1 font-sans text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Портфолио
            </h2>
            <p className="font-mono text-xs text-foreground/50 md:text-sm">/ Избранные проекты</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-foreground/40">
              {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Slider card */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.color} border border-foreground/10 backdrop-blur-sm`}
          >
            <div className="grid gap-0 md:grid-cols-[1fr_1.2fr]">
              {/* Left */}
              <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-mono text-xs text-foreground/40">{project.number}</span>
                    <span className="h-px flex-1 bg-foreground/20" />
                    <span className="font-mono text-xs text-foreground/40">{project.year}</span>
                  </div>
                  <h3 className="mb-1 font-sans text-2xl font-semibold text-foreground md:text-3xl lg:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mb-4 font-mono text-xs text-foreground/50 md:text-sm">{project.category}</p>
                  <p className="text-sm leading-relaxed text-foreground/80 md:text-base">{project.description}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-foreground/20 px-3 py-1 font-mono text-xs text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col items-end justify-between border-l border-foreground/10 p-6 md:p-8 lg:p-10">
                <a
                  href={project.link}
                  className="group flex items-center gap-2 rounded-full border border-foreground/30 px-4 py-2 font-mono text-xs text-foreground/70 transition-all hover:border-foreground/60 hover:text-foreground"
                >
                  Смотреть кейс
                  <Icon name="ArrowUpRight" size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <div className="w-full">
                  <div className="mb-6 h-px w-full bg-foreground/10" />
                  <p className="font-mono text-xs italic text-foreground/40">
                    «Мы не просто делаем красиво — мы погружаемся в ваш бизнес и создаём систему, которая работает и масштабируется.»
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div
          className={`mt-6 flex items-center justify-between transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          {/* Dots */}
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-foreground/70" : "w-1.5 bg-foreground/25 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/25 text-foreground/60 transition-all hover:border-foreground/60 hover:text-foreground"
            >
              <Icon name="ArrowLeft" size={16} />
            </button>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/25 text-foreground/60 transition-all hover:border-foreground/60 hover:text-foreground"
            >
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
