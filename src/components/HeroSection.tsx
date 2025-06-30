import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-calamity-dark via-purple-900/50 to-calamity-dark flex items-center justify-center relative overflow-hidden">
      {/* Звездное небо */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-calamity-light-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/5 right-1/4 w-1 h-1 bg-calamity-light-purple rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        {/* Логотип */}
        <div className="mb-8">
          <img
            src="https://cdn.poehali.dev/files/7a0cdc4f-aeb7-4946-90ca-153c116c96e8.jpg"
            alt="CALAMITYCRAFT Logo"
            className="w-32 h-32 mx-auto rounded-lg shadow-2xl shadow-calamity-purple/50"
          />
        </div>

        {/* Название сервера */}
        <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-white mb-4 tracking-wider">
          CALAMITYCRAFT
        </h1>
        <h2 className="font-montserrat font-medium text-2xl md:text-3xl text-calamity-light-purple mb-6 tracking-wide">
          IMPERIALISM
        </h2>

        {/* Описание */}
        <p className="font-open-sans text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Военно-политический Minecraft сервер, где игроки создают собственные
          страны, ведут дипломатию и строят империи через бартерную экономику
        </p>

        {/* Кнопки действий */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-calamity-purple hover:bg-calamity-purple/80 text-white font-montserrat font-medium px-8 py-4 text-lg"
          >
            <Icon name="Gamepad2" className="mr-2" size={20} />
            Начать играть
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-calamity-light-purple text-calamity-light-purple hover:bg-calamity-light-purple hover:text-calamity-dark font-montserrat font-medium px-8 py-4 text-lg"
          >
            <Icon name="Info" className="mr-2" size={20} />О сервере
          </Button>
        </div>

        {/* Статистика сервера */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-calamity-light-purple/30">
            <div className="text-2xl font-montserrat font-bold text-calamity-light-purple">
              24/7
            </div>
            <div className="text-sm font-open-sans text-gray-300">Онлайн</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-calamity-light-purple/30">
            <div className="text-2xl font-montserrat font-bold text-calamity-light-purple">
              PVP
            </div>
            <div className="text-sm font-open-sans text-gray-300">Режим</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-calamity-light-purple/30">
            <div className="text-2xl font-montserrat font-bold text-calamity-light-purple">
              1.20.1
            </div>
            <div className="text-sm font-open-sans text-gray-300">Версия</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
