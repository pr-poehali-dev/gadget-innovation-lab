import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, SparklesIcon } from "lucide-react"
import DotPattern from "@/components/ui/dot-pattern"

type PricingCardProps = {
  titleBadge: string
  priceLabel: string
  priceSuffix?: string
  features: string[]
  cta?: string
  className?: string
}

function PricingCard({
  titleBadge,
  priceLabel,
  priceSuffix = "",
  features,
  cta = "Узнать подробнее",
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "bg-white/5 border-white/10 relative overflow-hidden rounded-md border-2",
        "backdrop-blur-sm",
        className,
      )}
    >
      <DotPattern width={5} height={5} />
      <div className="flex items-center gap-3 p-3">
        <Badge variant="secondary" className="bg-white/10 text-white border-white/20 font-open-sans-custom text-xs">
          {titleBadge}
        </Badge>
        <div className="ml-auto">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/5 text-white border-white/20 hover:bg-white/10 font-open-sans-custom text-xs"
          >
            {cta}
          </Button>
        </div>
      </div>

      <div className="flex items-end gap-2 px-3 py-1">
        <span className="font-mono text-3xl font-semibold tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
          {priceLabel}
        </span>
        {priceSuffix && (
          <span className="text-gray-300 text-xs font-open-sans-custom">{priceSuffix}</span>
        )}
      </div>

      <ul className="text-gray-300 grid gap-2 p-3 text-xs font-open-sans-custom">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="w-[1.05rem] h-[1.05rem] text-white flex-shrink-0" strokeWidth={3} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function BentoPricing() {
  return (
    <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 lg:grid-cols-8">
      {/* Слайд 3: WMS vs Excel */}
      <div
        className={cn(
          "bg-white/5 border-white/10 relative w-full overflow-hidden rounded-md border-2",
          "backdrop-blur-sm",
          "lg:col-span-5",
        )}
      >
        <DotPattern width={5} height={5} />
        <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
          <div className="from-white/5 to-white/2 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 size-full mix-blend-overlay",
                "bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)]",
                "bg-[size:24px]",
              )}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 p-3">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 font-open-sans-custom text-xs">
            WMS vs Excel
          </Badge>
          <Badge
            variant="outline"
            className="hidden lg:flex bg-white/5 text-white border-white/20 font-open-sans-custom text-xs"
          >
            <SparklesIcon className="me-1 size-3" /> Слайд 3
          </Badge>
          <div className="ml-auto">
            <Button size="sm" className="bg-white text-black hover:bg-gray-100 font-open-sans-custom text-xs">
              Запросить демо
            </Button>
          </div>
        </div>
        <div className="flex flex-col p-3 lg:flex-row">
          <div className="pb-2 lg:w-[40%]">
            <p className="font-open-sans-custom text-sm font-semibold text-white leading-snug [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              WMS — это система управления процессами, а не учёта данных
            </p>
            <p className="text-gray-400 text-xs font-open-sans-custom mt-2">
              Excel, «самописные» таблицы и простая 1С фиксируют факт. WMS управляет каждым шагом в реальном времени.
            </p>
          </div>
          <ul className="text-gray-300 grid gap-2 text-xs lg:w-[60%] font-open-sans-custom">
            {[
              "Адресное хранение и контроль каждой ячейки",
              "Управление задачами персонала через ТСД",
              "Волновой сбор и оптимизация маршрутов",
              "Автоматический расчёт сдельной оплаты труда",
              "Интеграция с Честным Знаком и маркетплейсами",
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-[1.05rem] h-[1.05rem] text-white flex-shrink-0" strokeWidth={3} />
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Слайд 4: Эффект */}
      <PricingCard
        titleBadge="ЭФФЕКТ"
        priceLabel="99,9%"
        priceSuffix="точность"
        features={[
          "Снижение ошибок комплектации до 99,9%",
          "Ускорение сборки заказов в 2–3 раза",
          "Прозрачность для налоговой и маркетплейсов",
          "Цикличная инвентаризация без остановки склада",
        ]}
        className="lg:col-span-3"
        cta="Подробнее"
      />

      {/* Слайд 6: Рынок WMS */}
      <PricingCard
        titleBadge="РЫНОК РФ 2025"
        priceLabel="21 день"
        priceSuffix="внедрение"
        features={[
          "Рынок складских площадей РФ превысил 50 млн м² в 2025 году",
          "Повышенный спрос на WMS сохраняется на фоне роста e-commerce",
          "МАЙА — готовый SaaS, не лицензия с доработками",
          "Предсказуемые затраты на внедрение и поддержку",
          "Всегда актуальная версия без затрат на обновление",
        ]}
        className="lg:col-span-4"
        cta="Узнать больше"
      />

      {/* Слайд 7: Итог */}
      <PricingCard
        titleBadge="ИТОГ"
        priceLabel="Ваш выбор"
        priceSuffix=""
        features={[
          "❌ Без WMS: расхождения, ошибки, зависимость от людей — «чёрная дыра» для денег",
          "✅ С МАЙА WMS: прозрачный, управляемый, высокоэффективный складской актив",
          "Быстрая реализация специфичных функций под ваши процессы",
          "Персональное сопровождение на каждом этапе",
        ]}
        className="lg:col-span-4"
        cta="Связаться"
      />
    </div>
  )
}
