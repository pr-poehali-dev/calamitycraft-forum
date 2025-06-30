import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: "Discord",
      icon: "MessageCircle",
      description: "Основное сообщество игроков",
      link: "#",
      color: "bg-indigo-600 hover:bg-indigo-700",
    },
    {
      name: "Telegram",
      icon: "Send",
      description: "Новости и обновления",
      link: "#",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "YouTube",
      icon: "Play",
      description: "Видео и трансляции",
      link: "#",
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      name: "Почта",
      icon: "Mail",
      description: "Связь с администрацией",
      link: "mailto:admin@calamitycraft.ru",
      color: "bg-gray-600 hover:bg-gray-700",
    },
    {
      name: "Поддержка",
      icon: "HelpCircle",
      description: "Техническая помощь",
      link: "#",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      name: "Форум",
      icon: "Users",
      description: "Обсуждения и предложения",
      link: "#",
      color: "bg-calamity-purple hover:bg-calamity-purple/80",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-calamity-dark to-purple-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-4">
            Присоединяйся к сообществу
          </h2>
          <p className="font-open-sans text-lg text-gray-300 max-w-2xl mx-auto">
            Будь в курсе последних событий, общайся с игроками и получай
            поддержку
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {socialPlatforms.map((platform) => (
            <Card
              key={platform.name}
              className="bg-white/10 backdrop-blur-sm border border-calamity-light-purple/30 hover:border-calamity-light-purple/50 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${platform.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      name={platform.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-calamity-light-purple hover:text-white hover:bg-calamity-light-purple/20"
                    onClick={() =>
                      platform.link !== "#"
                        ? window.open(platform.link, "_blank")
                        : null
                    }
                  >
                    <Icon name="ExternalLink" size={16} />
                  </Button>
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-white mb-2">
                  {platform.name}
                </h3>
                <p className="font-open-sans text-gray-300 text-sm leading-relaxed">
                  {platform.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* IP адрес сервера */}
        <div className="mt-16 text-center">
          <Card className="bg-white/5 backdrop-blur-sm border border-calamity-light-purple/30 max-w-md mx-auto">
            <div className="p-6">
              <h3 className="font-montserrat font-semibold text-lg text-white mb-2">
                IP адрес сервера
              </h3>
              <div className="bg-calamity-dark/50 rounded-lg p-3 font-mono text-calamity-light-purple text-lg tracking-wider">
                play.calamitycraft.ru
              </div>
              <p className="font-open-sans text-sm text-gray-400 mt-2">
                Скопируй и вставь в Minecraft
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
