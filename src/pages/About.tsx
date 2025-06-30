import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-calamity-dark to-calamity-dark-purple">
      <div className="container mx-auto px-6 py-12">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-4">
            О сервере
          </h1>
          <p className="font-open-sans text-xl text-gray-300 max-w-3xl mx-auto">
            CALAMITYCRAFT: IMPERIALISM — уникальный военно-политический
            Minecraft сервер
          </p>
        </div>

        {/* Основная информация */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border border-calamity-light-purple/30 p-8">
            <Icon
              name="Crown"
              className="mb-4 text-calamity-light-purple"
              size={48}
            />
            <h2 className="font-montserrat font-bold text-2xl text-white mb-4">
              Концепция сервера
            </h2>
            <p className="font-open-sans text-gray-300 leading-relaxed mb-4">
              Наш сервер создан для тех, кто хочет окунуться в мир политических
              интриг, дипломатии и военных конфликтов. Здесь каждый игрок может
              создать свою собственную нацию и вести её к процветанию.
            </p>
            <p className="font-open-sans text-gray-300 leading-relaxed">
              Система основана на реалистичной экономике, где ресурсы имеют
              настоящую ценность, а каждое решение влияет на судьбу вашей
              империи.
            </p>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border border-calamity-light-purple/30 p-8">
            <Icon
              name="Gamepad2"
              className="mb-4 text-calamity-light-purple"
              size={48}
            />
            <h2 className="font-montserrat font-bold text-2xl text-white mb-4">
              Игровой процесс
            </h2>
            <ul className="font-open-sans text-gray-300 space-y-3">
              <li className="flex items-start">
                <Icon
                  name="ChevronRight"
                  className="mt-1 mr-2 text-calamity-light-purple flex-shrink-0"
                  size={16}
                />
                Создание и развитие собственных государств
              </li>
              <li className="flex items-start">
                <Icon
                  name="ChevronRight"
                  className="mt-1 mr-2 text-calamity-light-purple flex-shrink-0"
                  size={16}
                />
                Дипломатические отношения между нациями
              </li>
              <li className="flex items-start">
                <Icon
                  name="ChevronRight"
                  className="mt-1 mr-2 text-calamity-light-purple flex-shrink-0"
                  size={16}
                />
                Экономическая система на основе бартера
              </li>
              <li className="flex items-start">
                <Icon
                  name="ChevronRight"
                  className="mt-1 mr-2 text-calamity-light-purple flex-shrink-0"
                  size={16}
                />
                Военные конфликты и стратегические альянсы
              </li>
              <li className="flex items-start">
                <Icon
                  name="ChevronRight"
                  className="mt-1 mr-2 text-calamity-light-purple flex-shrink-0"
                  size={16}
                />
                Система законов и управления
              </li>
            </ul>
          </Card>
        </div>

        {/* Технические характеристики */}
        <Card className="bg-white/10 backdrop-blur-sm border border-calamity-light-purple/30 p-8 mb-16">
          <div className="text-center mb-8">
            <Icon
              name="Server"
              className="mx-auto mb-4 text-calamity-light-purple"
              size={48}
            />
            <h2 className="font-montserrat font-bold text-2xl text-white mb-4">
              Технические характеристики
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-calamity-dark/50 rounded-lg p-4 mb-3">
                <p className="font-montserrat font-bold text-xl text-calamity-light-purple">
                  1.21.4
                </p>
              </div>
              <p className="font-open-sans text-gray-300">Версия Minecraft</p>
            </div>

            <div className="text-center">
              <div className="bg-calamity-dark/50 rounded-lg p-4 mb-3">
                <p className="font-montserrat font-bold text-xl text-calamity-light-purple">
                  NeoForge
                </p>
              </div>
              <p className="font-open-sans text-gray-300">Платформа модов</p>
            </div>

            <div className="text-center">
              <div className="bg-calamity-dark/50 rounded-lg p-4 mb-3">
                <p className="font-montserrat font-bold text-xl text-calamity-light-purple">
                  24/7
                </p>
              </div>
              <p className="font-open-sans text-gray-300">Время работы</p>
            </div>

            <div className="text-center">
              <div className="bg-calamity-dark/50 rounded-lg p-4 mb-3">
                <p className="font-montserrat font-bold text-xl text-calamity-light-purple">
                  PVP
                </p>
              </div>
              <p className="font-open-sans text-gray-300">Режим игры</p>
            </div>
          </div>
        </Card>

        {/* Правила и особенности */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border border-calamity-light-purple/30 p-8">
            <Icon
              name="Shield"
              className="mb-4 text-calamity-light-purple"
              size={48}
            />
            <h2 className="font-montserrat font-bold text-2xl text-white mb-4">
              Основные правила
            </h2>
            <ul className="font-open-sans text-gray-300 space-y-3">
              <li className="flex items-start">
                <Icon
                  name="Check"
                  className="mt-1 mr-2 text-green-400 flex-shrink-0"
                  size={16}
                />
                Уважение к другим игрокам
              </li>
              <li className="flex items-start">
                <Icon
                  name="Check"
                  className="mt-1 mr-2 text-green-400 flex-shrink-0"
                  size={16}
                />
                Запрет на использование читов
              </li>
              <li className="flex items-start">
                <Icon
                  name="Check"
                  className="mt-1 mr-2 text-green-400 flex-shrink-0"
                  size={16}
                />
                Следование ролевой игре
              </li>
              <li className="flex items-start">
                <Icon
                  name="Check"
                  className="mt-1 mr-2 text-green-400 flex-shrink-0"
                  size={16}
                />
                Конструктивное общение
              </li>
            </ul>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border border-calamity-light-purple/30 p-8">
            <Icon
              name="Star"
              className="mb-4 text-calamity-light-purple"
              size={48}
            />
            <h2 className="font-montserrat font-bold text-2xl text-white mb-4">
              Особенности
            </h2>
            <ul className="font-open-sans text-gray-300 space-y-3">
              <li className="flex items-start">
                <Icon
                  name="Sparkles"
                  className="mt-1 mr-2 text-yellow-400 flex-shrink-0"
                  size={16}
                />
                Уникальные кастомные плагины
              </li>
              <li className="flex items-start">
                <Icon
                  name="Sparkles"
                  className="mt-1 mr-2 text-yellow-400 flex-shrink-0"
                  size={16}
                />
                Динамичная карта мира
              </li>
              <li className="flex items-start">
                <Icon
                  name="Sparkles"
                  className="mt-1 mr-2 text-yellow-400 flex-shrink-0"
                  size={16}
                />
                Система рангов и достижений
              </li>
              <li className="flex items-start">
                <Icon
                  name="Sparkles"
                  className="mt-1 mr-2 text-yellow-400 flex-shrink-0"
                  size={16}
                />
                Активное сообщество
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
