import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const projects = [
  {
    number: "01",
    title: "РосиПомидоси",
    category: "Пиццерия · Таганрог",
    year: "2024",
    description:
      "Создали полный фирменный стиль для пиццерии с дровяной печью: логотип, меню, упаковку и брендбук. Разработали и вывели сайт в ТОП по ключевым запросам города. Запустили рекламу в соцсетях — поток гостей вырос на 45% за первые 3 месяца.",
    tags: ["Логотип", "Сайт", "Меню", "SMM", "Реклама"],
    link: "https://rosipomidosi.ru/",
    screenshot: "https://api.microlink.io/?url=https://rosipomidosi.ru&screenshot=true&meta=false&embed=screenshot.url",
    color: "from-red-950/40 to-amber-950/30",
  },
  {
    number: "02",
    title: "Студия массажа ВИКИ",
    category: "Массажный кабинет · Енакиево",
    year: "2024",
    description:
      "Разработали бренд «с нуля»: нейминг, логотип, фирменный стиль и упаковку подарочных сертификатов. Создали сайт с онлайн-записью и стратегию продвижения. Через 2 месяца запись заполнена на 3 недели вперёд.",
    tags: ["Нейминг", "Логотип", "Сайт", "Упаковка", "Сертификаты"],
    link: "https://xn--e1afmkjd0b.xn--p1acf/",
    screenshot: "https://api.microlink.io/?url=https://xn--e1afmkjd0b.xn--p1acf&screenshot=true&meta=false&embed=screenshot.url",
    color: "from-purple-950/30 to-stone-900/40",
  },
  {
    number: "03",
    title: "Гостевой Двор Подворье",
    category: "Гостевой дом · Таганрог",
    year: "2024",
    description:
      "Полное позиционирование загородного гостевого двора с банями и коттеджами. Разработали логотип в русском стиле, создали сайт с системой бронирования, запустили контекстную рекламу. Загрузка объекта — 90% в сезон.",
    tags: ["Логотип", "Брендинг", "Сайт", "Бронирование", "Реклама"],
    link: "https://podvorye-taganrog.ru/",
    screenshot: "https://api.microlink.io/?url=https://podvorye-taganrog.ru&screenshot=true&meta=false&embed=screenshot.url",
    color: "from-amber-900/40 to-stone-900/40",
  },
  {
    number: "04",
    title: "NeoStandard",
    category: "Бизнес · Фирменный стиль",
    year: "2023",
    description:
      "Выстроили систему бренда для коммерческой компании: логотип, фирменный стиль, корпоративные документы и презентации. Создали сайт с SEO-продвижением и стратегию позиционирования на рынке. Выход на новых B2B-партнёров.",
    tags: ["Логотип", "Стиль", "Сайт", "Презентация", "SEO"],
    link: "https://neostandard.ru/",
    screenshot: "https://api.microlink.io/?url=https://neostandard.ru&screenshot=true&meta=false&embed=screenshot.url",
    color: "from-blue-950/30 to-stone-900/40",
  },
  {
    number: "05",
    title: "Радио 101.9 FM",
    category: "Радиостанция · Таганрог",
    year: "2023",
    description:
      "Разработали обновлённый бренд городской радиостанции: логотип, фирменный стиль в эфире и вне эфира, рекламные макеты. Создали сайт с онлайн-трансляцией. Узнаваемость бренда среди жителей города выросла с 38% до 71%.",
    tags: ["Логотип", "Редизайн", "Сайт", "Эфирный стиль", "Рекламные макеты"],
    link: "https://1019fm.ru/",
    screenshot: "https://api.microlink.io/?url=https://1019fm.ru&screenshot=true&meta=false&embed=screenshot.url",
    color: "from-orange-950/30 to-zinc-900/40",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.2)
  const [current, setCurrent] = useState(0)
  const [imgError, setImgError] = useState<Record<number, boolean>>({})

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
          className={`mb-6 flex items-end justify-between transition-all duration-700 md:mb-8 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <div>
            <h2 className="mb-1 font-sans text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Портфолио
            </h2>
            <p className="font-mono text-xs text-foreground/50 md:text-sm">/ Избранные проекты</p>
          </div>
          <span className="font-mono text-sm text-foreground/40">
            {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Slider card */}
        <div
          key={current}
          className={`transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.color} border border-foreground/10 backdrop-blur-sm`}
          >
            <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
              {/* Left — text */}
              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-mono text-xs text-foreground/40">{project.number}</span>
                    <span className="h-px flex-1 bg-foreground/20" />
                    <span className="font-mono text-xs text-foreground/40">{project.year}</span>
                  </div>
                  <h3 className="mb-1 font-sans text-xl font-semibold text-foreground md:text-2xl lg:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mb-4 font-mono text-xs text-foreground/50">{project.category}</p>
                  <p className="text-sm leading-relaxed text-foreground/80 md:text-[15px]">{project.description}</p>
                </div>

                <div className="mt-5">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-foreground/20 px-3 py-1 font-mono text-xs text-foreground/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-foreground/30 px-4 py-2 font-mono text-xs text-foreground/70 transition-all hover:border-foreground/70 hover:text-foreground"
                  >
                    Открыть сайт
                    <Icon name="ArrowUpRight" size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Right — screenshot */}
              <div className="relative hidden overflow-hidden border-l border-foreground/10 md:block">
                {!imgError[current] ? (
                  <img
                    src={project.screenshot}
                    alt={project.title}
                    className="h-full w-full object-cover object-top opacity-80 transition-opacity duration-500 hover:opacity-100"
                    onError={() => setImgError((prev) => ({ ...prev, [current]: true }))}
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
                    <Icon name="Globe" size={32} className="text-foreground/20" />
                    <span className="font-mono text-xs text-foreground/30">{project.link}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div
          className={`mt-5 flex items-center justify-between transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
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
