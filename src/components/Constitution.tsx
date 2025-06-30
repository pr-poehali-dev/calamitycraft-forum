import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Constitution = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/30 to-calamity-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-4">
            Конституция сервера
          </h2>
          <p className="font-open-sans text-lg text-gray-300 max-w-2xl mx-auto">
            Правила и основные положения CALAMITYCRAFT: IMPERIALISM
          </p>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border border-calamity-light-purple/30 max-w-4xl mx-auto">
          <div className="p-8">
            <div className="space-y-8">
              {/* Глава 1 */}
              <div>
                <h3 className="font-montserrat font-bold text-2xl text-calamity-light-purple mb-4">
                  ГЛАВА 1: ОСНОВНОЕ ПОЛОЖЕНИЕ
                </h3>
                <div className="space-y-3 font-open-sans text-gray-300 leading-relaxed">
                  <p>
                    • Цель сервера - создание дружеского коллектива и
                    увлекательного пространства для имитации роли-плей
                    военно-политического проекта.
                  </p>
                  <p>
                    • Применение правил - все участники автоматически принимают
                    конституцию при присоединении. Незнание конституции не
                    освобождает от ответственности.
                  </p>
                  <p>
                    • Власть команды разработчиков и модерации - все участники
                    автоматически принимают абсолютную власть и правоту
                    "верхушки" сервера.
                  </p>
                  <p>
                    • Изменение конституции - конституция в любой момент может
                    измениться, изменять конституцию может команда
                    разработчиков.
                  </p>
                  <p>
                    • Обжаловать наказание можно в течении 48-ми часов. (В ЛС
                    одного из модераторов/разработчиков)
                  </p>
                  <p>
                    • Разработчики/модерация выдаёт наказание по своему
                    усмотрению.
                  </p>
                </div>
              </div>

              <Separator className="bg-calamity-light-purple/30" />

              {/* Глава 2 */}
              <div>
                <h3 className="font-montserrat font-bold text-2xl text-calamity-light-purple mb-4">
                  ГЛАВА 2: ОБЩЕНИЕ
                </h3>
                <div className="space-y-3 font-open-sans text-gray-300 leading-relaxed">
                  <p>
                    • Оскорбление - то есть унижение чести и достоинства другого
                    лица, выраженное в неприличной или иной противоречащей
                    общепринятым нормам морали и нравственности форме -
                    наказуемо.
                  </p>
                  <p>• Флуд и спам строго запрещены во всём сервере.</p>
                  <p>
                    • NSFW (небезопасный для работы), 18+ и порнографический
                    контент строго запрещены во всём сервере.
                  </p>
                  <p>
                    • Реклама без предварительного согласия разработчиков или
                    модерации строго запрещена во всём сервере.
                  </p>
                  <p>
                    • Чрезмерное использование заглавных букв (CAPS) строго
                    запрещено во всём сервере.
                  </p>
                </div>
              </div>

              <Separator className="bg-calamity-light-purple/30" />

              {/* Глава 3 */}
              <div>
                <h3 className="font-montserrat font-bold text-2xl text-calamity-light-purple mb-4">
                  ГЛАВА 3: ИГРОВОЙ ПРОЦЕСС
                </h3>
                <div className="space-y-3 font-open-sans text-gray-300 leading-relaxed">
                  <p>
                    • Использование, распространение и хранение читов, хаков и
                    любого стороннего программного обеспечения строго запрещено
                    на сервере.
                  </p>
                  <p>
                    • Абьюз (злоупотребление) плагинов, датапаков, текстурпаков,
                    модов и багов строго запрещен.
                  </p>
                  <p>
                    • Заход на чужие аккаунты и использование твинков (вторичных
                    аккаунтов) строго запрещены.
                  </p>
                  <p>
                    • Грифирство, не связанное с ролевым взаимодействием (не по
                    РП), строго запрещено.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Constitution;
