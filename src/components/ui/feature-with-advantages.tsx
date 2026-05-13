import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function Feature() {
  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 flex-col items-start lg:py-0">
          <div>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">Слайд 1–2</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Когда нужен собственный склад — и почему без WMS не обойтись
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              Собственный склад оправдан при высоких объёмах и специфичных процессах. Но без профессиональной системы управления он превращается в источник потерь.
            </p>
          </div>

          <div className="flex gap-10 pt-8 flex-col w-full">
            <div>
              <p className="text-white/60 text-xs font-open-sans-custom uppercase tracking-widest mb-4">Когда склад оправдан</p>
              <div className="grid grid-cols-2 items-start lg:grid-cols-4 gap-6">
                <div className="flex flex-row gap-4 w-full items-start">
                  <Check className="w-[1.05rem] h-[1.05rem] mt-1 text-white flex-shrink-0" strokeWidth={3} />
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-open-sans-custom text-sm">Пороговые объёмы</p>
                    <p className="text-gray-300 text-xs font-open-sans-custom">Хранение и отгрузка достигают критической массы</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start">
                  <Check className="w-[1.05rem] h-[1.05rem] mt-1 text-white flex-shrink-0" strokeWidth={3} />
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-open-sans-custom text-sm">Критичность отгрузки</p>
                    <p className="text-gray-300 text-xs font-open-sans-custom">Качество сборки напрямую влияет на бизнес</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start">
                  <Check className="w-[1.05rem] h-[1.05rem] mt-1 text-white flex-shrink-0" strokeWidth={3} />
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-open-sans-custom text-sm">Специфичные товары</p>
                    <p className="text-gray-300 text-xs font-open-sans-custom">Раздельное хранение, многоместность, ОТК, Честный Знак</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start">
                  <Check className="w-[1.05rem] h-[1.05rem] mt-1 text-white flex-shrink-0" strokeWidth={3} />
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-open-sans-custom text-sm">Сложные процессы</p>
                    <p className="text-gray-300 text-xs font-open-sans-custom">Волновой сбор, ТСД, автоматическое размещение товара</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-white/60 text-xs font-open-sans-custom uppercase tracking-widest mb-4">Главные боли без WMS</p>
              <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-6">
                <div className="flex flex-row gap-4 w-full items-start">
                  <Check className="w-[1.05rem] h-[1.05rem] mt-1 text-white flex-shrink-0" strokeWidth={3} />
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-open-sans-custom text-sm">Расхождение остатков</p>
                    <p className="text-gray-300 text-xs font-open-sans-custom">Данные в системе не совпадают с реальностью</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start">
                  <Check className="w-[1.05rem] h-[1.05rem] mt-1 text-white flex-shrink-0" strokeWidth={3} />
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-open-sans-custom text-sm">Нет цикличной инвентаризации</p>
                    <p className="text-gray-300 text-xs font-open-sans-custom">Пересчёт только с остановкой склада</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start">
                  <Check className="w-[1.05rem] h-[1.05rem] mt-1 text-white flex-shrink-0" strokeWidth={3} />
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-open-sans-custom text-sm">Ошибки комплектации</p>
                    <p className="text-gray-300 text-xs font-open-sans-custom">Пересортица, недовложения, возвраты</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 w-full items-start">
                  <Check className="w-[1.05rem] h-[1.05rem] mt-1 text-white flex-shrink-0" strokeWidth={3} />
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-open-sans-custom text-sm">Нет контроля производительности</p>
                    <p className="text-gray-300 text-xs font-open-sans-custom">Невозможно оценить эффективность персонала</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start">
                  <Check className="w-[1.05rem] h-[1.05rem] mt-1 text-white flex-shrink-0" strokeWidth={3} />
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-open-sans-custom text-sm">Нет расчёта сдельной оплаты</p>
                    <p className="text-gray-300 text-xs font-open-sans-custom">Зарплата не привязана к реальным результатам</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start">
                  <Check className="w-[1.05rem] h-[1.05rem] mt-1 text-white flex-shrink-0" strokeWidth={3} />
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-open-sans-custom text-sm">Зависимость от людей</p>
                    <p className="text-gray-300 text-xs font-open-sans-custom">Уход сотрудника — потеря ключевых знаний о складе</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }
