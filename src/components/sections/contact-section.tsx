import Icon from "@/components/ui/icon"
import { useReveal } from "@/hooks/use-reveal"
import { useState, type FormEvent } from "react"
import { MagneticButton } from "@/components/magnetic-button"

const socials = [
  { name: "Telegram", icon: "Send", href: "https://t.me/masterskaya_gorbunova" },
  { name: "ВКонтакте", icon: "Users", href: "https://vk.com/masterskaya_gorbunova" },
  { name: "Instagram", icon: "Instagram", href: "https://instagram.com/masterskaya_gorbunova" },
]

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.name || !formData.message) return

    setIsSubmitting(true)
    setSubmitError(false)

    try {
      const res = await fetch("https://functions.poehali.dev/a9093d13-1e2e-4736-99c2-9fbd4d876f95", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitSuccess(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
        setTimeout(() => setSubmitSuccess(false), 6000)
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-20">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Оставьте
                <br />
                заявку
              </h2>
              <p className="font-mono text-xs text-foreground/50 md:text-sm">/ Точка сборки · Енакиево</p>
            </div>

            <div className="space-y-5 md:space-y-7">
              <a
                href="tel:+79934466204"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="Phone" size={12} className="text-foreground/50" />
                  <span className="font-mono text-xs text-foreground/50">Телефон</span>
                </div>
                <p className="text-base font-medium text-foreground transition-colors group-hover:text-foreground/70 md:text-xl">
                  +7 (993) 446-62-04
                </p>
              </a>

              <a
                href="mailto:djgorbunov@gmail.com"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "250ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="Mail" size={12} className="text-foreground/50" />
                  <span className="font-mono text-xs text-foreground/50">Email</span>
                </div>
                <p className="text-base font-medium text-foreground transition-colors group-hover:text-foreground/70 md:text-xl">
                  djgorbunov@gmail.com
                </p>
              </a>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="MapPin" size={12} className="text-foreground/50" />
                  <span className="font-mono text-xs text-foreground/50">Адрес</span>
                </div>
                <p className="text-base font-medium text-foreground md:text-xl">г. Енакиево, ул. Тиунова, 97</p>
              </div>

              <div
                className={`flex items-center gap-3 pt-1 transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/25 text-foreground/60 transition-all hover:border-foreground/60 hover:text-foreground"
                  >
                    <Icon name={s.icon} size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/50 md:mb-2">Имя *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground/60 focus:outline-none md:py-2 md:text-base"
                  placeholder="Ваше имя"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/50 md:mb-2">Телефон или Email</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground/60 focus:outline-none md:py-2 md:text-base"
                  placeholder="+7 (___) ___-__-__ или email"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/50 md:mb-2">Расскажите о задаче *</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground/60 focus:outline-none md:py-2 md:text-base"
                  placeholder="Что за бизнес, что нужно сделать..."
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "550ms" }}
              >
                <MagneticButton variant="primary" size="lg" className="w-full disabled:opacity-50">
                  {isSubmitting ? "Отправляем..." : "Отправить заявку"}
                </MagneticButton>
                {submitSuccess && (
                  <p className="mt-3 text-center font-mono text-sm text-foreground/80">
                    ✓ Заявка отправлена! Свяжемся с вами в ближайшее время.
                  </p>
                )}
                {submitError && (
                  <p className="mt-3 text-center font-mono text-sm text-red-400/80">
                    Ошибка отправки. Позвоните нам: +7 (993) 446-62-04
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}