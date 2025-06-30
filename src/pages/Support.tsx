import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Support = () => {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  const faqItems = [
    {
      id: 1,
      question: "Как присоединиться к серверу?",
      answer:
        "Для подключения к серверу используйте IP адрес: play.calamitycraft.ru. Убедитесь, что у вас установлена версия Minecraft 1.21.4 с NeoForge.",
    },
    {
      id: 2,
      question: "Как создать свою нацию?",
      answer:
        "После входа на сервер найдите свободную территорию и используйте команду /nation create [название]. Следуйте инструкциям в игре для завершения процесса.",
    },
    {
      id: 3,
      question: "Какие моды требуются для игры?",
      answer:
        "Сервер использует платформу NeoForge. Список обязательных модов можно получить при подключении к серверу или в нашем Discord канале.",
    },
    {
      id: 4,
      question: "Как работает экономическая система?",
      answer:
        "Экономика основана на бартерной системе. Игроки обмениваются ресурсами между собой и нациями. Золото используется как универсальная валюта.",
    },
    {
      id: 5,
      question: "Что делать, если я потерял свои вещи?",
      answer:
        "Обратитесь к администрации через форум или Discord с подробным описанием ситуации. Восстановление возможно только при технических сбоях сервера.",
    },
    {
      id: 6,
      question: "Как присоединиться к существующей нации?",
      answer:
        "Свяжитесь с лидером нации через игровой чат или Discord. Каждая нация имеет свои требования для вступления.",
    },
  ];

  const supportChannels = [
    {
      name: "Discord",
      description: "Быстрая помощь от сообщества и модераторов",
      icon: "MessageCircle",
      link: "#",
      status: "Онлайн",
      responseTime: "< 5 минут",
    },
    {
      name: "Форум",
      description: "Подробные обсуждения и решения проблем",
      icon: "MessageSquare",
      link: "/forum",
      status: "Активен",
      responseTime: "< 2 часов",
    },
    {
      name: "Email",
      description: "Официальные запросы и жалобы",
      icon: "Mail",
      link: "mailto:support@calamitycraft.ru",
      status: "Доступен",
      responseTime: "< 24 часов",
    },
    {
      name: "Telegram",
      description: "Новости и уведомления",
      icon: "Send",
      link: "#",
      status: "Активен",
      responseTime: "Мгновенно",
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-calamity-dark to-calamity-dark-purple">
      <div className="container mx-auto px-6 py-12">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-4">
            Поддержка
          </h1>
          <p className="font-open-sans text-xl text-gray-300 max-w-3xl mx-auto">
            Получите помощь, найдите ответы на вопросы или свяжитесь с нашей
            командой
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Основной контент */}
          <div className="lg:col-span-2 space-y-8">
            {/* FAQ */}
            <Card className="bg-white/10 backdrop-blur-sm border border-calamity-light-purple/30 p-8">
              <h2 className="font-montserrat font-bold text-2xl text-white mb-6 flex items-center">
                <Icon
                  name="HelpCircle"
                  className="mr-3 text-calamity-light-purple"
                  size={32}
                />
                Часто задаваемые вопросы
              </h2>

              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div
                    key={item.id}
                    className="border border-calamity-light-purple/20 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setSelectedFaq(selectedFaq === item.id ? null : item.id)
                      }
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                    >
                      <h3 className="font-montserrat font-medium text-white">
                        {item.question}
                      </h3>
                      <Icon
                        name={
                          selectedFaq === item.id ? "ChevronUp" : "ChevronDown"
                        }
                        className="text-calamity-light-purple flex-shrink-0 ml-2"
                        size={20}
                      />
                    </button>
                    {selectedFaq === item.id && (
                      <div className="p-4 pt-0">
                        <Separator className="mb-4 bg-calamity-light-purple/30" />
                        <p className="font-open-sans text-gray-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Форма обратной связи */}
            <Card className="bg-white/10 backdrop-blur-sm border border-calamity-light-purple/30 p-8">
              <h2 className="font-montserrat font-bold text-2xl text-white mb-6 flex items-center">
                <Icon
                  name="MessageSquare"
                  className="mr-3 text-calamity-light-purple"
                  size={32}
                />
                Связаться с нами
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-open-sans font-medium text-gray-300 mb-2">
                      Игровой никнейм
                    </label>
                    <Input
                      placeholder="Ваш никнейм в игре"
                      className="bg-calamity-dark/50 border-calamity-light-purple/30 text-white placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block font-open-sans font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="ваш@email.com"
                      className="bg-calamity-dark/50 border-calamity-light-purple/30 text-white placeholder-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-open-sans font-medium text-gray-300 mb-2">
                    Тема обращения
                  </label>
                  <Input
                    placeholder="Кратко опишите проблему"
                    className="bg-calamity-dark/50 border-calamity-light-purple/30 text-white placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block font-open-sans font-medium text-gray-300 mb-2">
                    Подробное описание
                  </label>
                  <Textarea
                    placeholder="Опишите вашу проблему или вопрос подробно..."
                    rows={5}
                    className="bg-calamity-dark/50 border-calamity-light-purple/30 text-white placeholder-gray-500 resize-none"
                  />
                </div>

                <Button className="w-full bg-calamity-light-purple hover:bg-calamity-purple text-white font-montserrat text-lg py-3">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>

          {/* Боковая панель */}
          <div className="lg:col-span-1 space-y-6">
            {/* Каналы поддержки */}
            <Card className="bg-white/10 backdrop-blur-sm border border-calamity-light-purple/30 p-6">
              <h3 className="font-montserrat font-bold text-xl text-white mb-4">
                Каналы поддержки
              </h3>

              <div className="space-y-4">
                {supportChannels.map((channel) => (
                  <div
                    key={channel.name}
                    className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <Icon
                          name={channel.icon as any}
                          className="text-calamity-light-purple"
                          size={24}
                        />
                        <div>
                          <h4 className="font-montserrat font-medium text-white">
                            {channel.name}
                          </h4>
                          <Badge
                            variant="secondary"
                            className="bg-green-600 text-white text-xs"
                          >
                            {channel.status}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="font-open-sans text-sm text-gray-400 mb-2">
                      {channel.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="font-open-sans text-xs text-gray-500">
                        Ответ: {channel.responseTime}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-calamity-light-purple/30 text-calamity-light-purple hover:bg-calamity-light-purple hover:text-white"
                      >
                        <Icon name="ExternalLink" size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Полезные ссылки */}
            <Card className="bg-white/10 backdrop-blur-sm border border-calamity-light-purple/30 p-6">
              <h3 className="font-montserrat font-bold text-xl text-white mb-4">
                Полезные ссылки
              </h3>

              <div className="space-y-3">
                <a
                  href="/about"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="Info"
                      className="text-calamity-light-purple"
                      size={20}
                    />
                    <span className="font-open-sans text-gray-300 group-hover:text-white">
                      О сервере
                    </span>
                  </div>
                  <Icon
                    name="ChevronRight"
                    className="text-gray-500 group-hover:text-calamity-light-purple"
                    size={16}
                  />
                </a>

                <a
                  href="/forum"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="MessageSquare"
                      className="text-calamity-light-purple"
                      size={20}
                    />
                    <span className="font-open-sans text-gray-300 group-hover:text-white">
                      Форум
                    </span>
                  </div>
                  <Icon
                    name="ChevronRight"
                    className="text-gray-500 group-hover:text-calamity-light-purple"
                    size={16}
                  />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="FileText"
                      className="text-calamity-light-purple"
                      size={20}
                    />
                    <span className="font-open-sans text-gray-300 group-hover:text-white">
                      Правила сервера
                    </span>
                  </div>
                  <Icon
                    name="ChevronRight"
                    className="text-gray-500 group-hover:text-calamity-light-purple"
                    size={16}
                  />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="Download"
                      className="text-calamity-light-purple"
                      size={20}
                    />
                    <span className="font-open-sans text-gray-300 group-hover:text-white">
                      Скачать моды
                    </span>
                  </div>
                  <Icon
                    name="ChevronRight"
                    className="text-gray-500 group-hover:text-calamity-light-purple"
                    size={16}
                  />
                </a>
              </div>
            </Card>

            {/* Статус сервера */}
            <Card className="bg-white/10 backdrop-blur-sm border border-calamity-light-purple/30 p-6">
              <h3 className="font-montserrat font-bold text-xl text-white mb-4 flex items-center">
                <Icon
                  name="Activity"
                  className="mr-2 text-calamity-light-purple"
                  size={24}
                />
                Статус сервера
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-open-sans text-gray-300">Сервер:</span>
                  <Badge className="bg-green-600 text-white">Онлайн</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-open-sans text-gray-300">Игроки:</span>
                  <span className="font-montserrat font-medium text-white">
                    23/100
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-open-sans text-gray-300">Версия:</span>
                  <span className="font-montserrat font-medium text-calamity-light-purple">
                    1.21.4
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-open-sans text-gray-300">Пинг:</span>
                  <span className="font-montserrat font-medium text-green-400">
                    15ms
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
