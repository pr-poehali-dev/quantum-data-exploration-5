import { useReveal } from "@/hooks/use-reveal"

const services = [
  {
    number: "01",
    title: "Брендинг и логотип",
    description: "Разрабатываем фирменный стиль, который работает — не просто красиво, а системно и продаёт",
    formats: ["Логотип + 3 варианта", "Логотип + брендбук", "Полный фирменный стиль"],
    price: "от 15 000 ₽",
    direction: "top",
  },
  {
    number: "02",
    title: "Сайты в ТОП",
    description: "Создаём сайты и выводим их в поиск. SEO-стратегия, структура и тексты с первого дня",
    formats: ["Лендинг (1 страница)", "Сайт-визитка (до 5 стр.)", "Корпоративный сайт"],
    price: "от 25 000 ₽",
    direction: "right",
  },
  {
    number: "03",
    title: "Стратегия и маркетинг",
    description: "Формируем позиционирование, разрабатываем план продвижения и упаковку бренда под рынок",
    formats: ["Маркетинговый аудит", "Стратегия продвижения", "Полная упаковка бренда"],
    price: "от 20 000 ₽",
    direction: "left",
  },
  {
    number: "04",
    title: "Реклама и дизайн",
    description: "Разрабатываем дизайн для рекламы, настраиваем таргет и ведём соцсети под ключ",
    formats: ["Пакет рекламных макетов", "Настройка таргетированной рекламы", "Ведение соцсетей (в месяц)"],
    price: "от 10 000 ₽",
    direction: "bottom",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-10 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Услуги
          </h2>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">/ Форматы и цены</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-6 lg:gap-x-16">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: (typeof services)[0]
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left": return "-translate-x-16 opacity-0"
        case "right": return "translate-x-16 opacity-0"
        case "top": return "-translate-y-16 opacity-0"
        case "bottom": return "translate-y-16 opacity-0"
        default: return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group rounded-xl border border-foreground/10 bg-black/20 p-5 backdrop-blur-sm transition-all duration-700 hover:border-foreground/25 hover:bg-black/30 md:p-6 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="mb-3 flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <span className="font-mono text-xs text-foreground/40">{service.number}</span>
            <span className="h-px w-6 bg-foreground/20" />
          </div>
          <h3 className="font-sans text-lg font-semibold text-foreground md:text-xl">{service.title}</h3>
        </div>
        <span className="shrink-0 rounded-full bg-foreground/10 px-3 py-1 font-mono text-xs font-medium text-foreground/70">
          {service.price}
        </span>
      </div>

      <p className="mb-4 text-xs leading-relaxed text-foreground/65 md:text-sm">{service.description}</p>

      <div className="space-y-1.5">
        {service.formats.map((f, fi) => (
          <div key={fi} className="flex items-center gap-2">
            <span className="text-foreground/40">✓</span>
            <span className="font-mono text-xs text-foreground/60">{f}</span>
          </div>
        ))}
      </div>
    </div>
  )
}