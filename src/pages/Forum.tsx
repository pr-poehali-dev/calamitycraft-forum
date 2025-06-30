import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все темы", icon: "MessageSquare", count: 156 },
    { id: "news", name: "Новости", icon: "Newspaper", count: 23 },
    { id: "general", name: "Общее обсуждение", icon: "Users", count: 45 },
    { id: "politics", name: "Политика", icon: "Crown", count: 34 },
    { id: "trade", name: "Торговля", icon: "Coins", count: 28 },
    { id: "support", name: "Техподдержка", icon: "HelpCircle", count: 26 },
  ];

  const forumPosts = [
    {
      id: 1,
      title: "Обновление сервера до версии 1.21.4",
      author: "Администрация",
      category: "news",
      replies: 12,
      views: 245,
      lastActivity: "2 часа назад",
      pinned: true,
      locked: false,
    },
    {
      id: 2,
      title: "Основание Великой Империи Севера",
      author: "Emperor_North",
      category: "politics",
      replies: 8,
      views: 89,
      lastActivity: "3 часа назад",
      pinned: false,
      locked: false,
    },
    {
      id: 3,
      title: "Торговый альянс южных государств",
      author: "Merchant_King",
      category: "trade",
      replies: 15,
      views: 156,
      lastActivity: "5 часов назад",
      pinned: false,
      locked: false,
    },
    {
      id: 4,
      title: "Проблема с подключением к серверу",
      author: "Player123",
      category: "support",
      replies: 3,
      views: 34,
      lastActivity: "1 день назад",
      pinned: false,
      locked: true,
    },
    {
      id: 5,
      title: "Предложения по улучшению экономической системы",
      author: "EconoMaster",
      category: "general",
      replies: 22,
      views: 187,
      lastActivity: "1 день назад",
      pinned: false,
      locked: false,
    },
    {
      id: 6,
      title: "Война за Западные Земли - итоги",
      author: "WarChronicler",
      category: "politics",
      replies: 31,
      views: 298,
      lastActivity: "2 дня назад",
      pinned: false,
      locked: false,
    },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? forumPosts
      : forumPosts.filter((post) => post.category === selectedCategory);

  const getCategoryBadgeColor = (category: string) => {
    const colors = {
      news: "bg-blue-600",
      general: "bg-gray-600",
      politics: "bg-purple-600",
      trade: "bg-green-600",
      support: "bg-red-600",
    };
    return colors[category as keyof typeof colors] || "bg-gray-600";
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-calamity-dark to-calamity-dark-purple">
      <div className="container mx-auto px-6 py-12">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-4">
            Форум
          </h1>
          <p className="font-open-sans text-xl text-gray-300 max-w-3xl mx-auto">
            Обсуждения, новости и взаимодействие с игроками сервера
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Боковая панель с категориями */}
          <div className="lg:col-span-1">
            <Card className="bg-white/10 backdrop-blur-sm border border-calamity-light-purple/30 p-6">
              <h2 className="font-montserrat font-bold text-xl text-white mb-4">
                Категории
              </h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? "bg-calamity-light-purple text-white"
                        : "hover:bg-white/10 text-gray-300"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name={category.icon as any} size={20} />
                      <span className="font-open-sans">{category.name}</span>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white"
                    >
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>

              <Separator className="my-6 bg-calamity-light-purple/30" />

              <Button className="w-full bg-calamity-light-purple hover:bg-calamity-purple text-white font-montserrat">
                <Icon name="Plus" className="mr-2" size={16} />
                Создать тему
              </Button>
            </Card>
          </div>

          {/* Основной контент */}
          <div className="lg:col-span-3">
            <Card className="bg-white/10 backdrop-blur-sm border border-calamity-light-purple/30">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                  <h2 className="font-montserrat font-bold text-xl text-white mb-4 sm:mb-0">
                    {selectedCategory === "all"
                      ? "Все темы"
                      : categories.find((c) => c.id === selectedCategory)?.name}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className="font-open-sans text-sm text-gray-300">
                      Сортировка:
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-calamity-light-purple/30 text-gray-300"
                    >
                      <Icon name="Clock" className="mr-1" size={14} />
                      По времени
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors border border-transparent hover:border-calamity-light-purple/30"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {post.pinned && (
                              <Icon
                                name="Pin"
                                className="text-calamity-light-purple"
                                size={16}
                              />
                            )}
                            {post.locked && (
                              <Icon
                                name="Lock"
                                className="text-gray-400"
                                size={16}
                              />
                            )}
                            <Badge
                              className={`${getCategoryBadgeColor(post.category)} text-white`}
                            >
                              {
                                categories.find((c) => c.id === post.category)
                                  ?.name
                              }
                            </Badge>
                          </div>

                          <h3 className="font-montserrat font-semibold text-lg text-white mb-2 hover:text-calamity-light-purple cursor-pointer">
                            {post.title}
                          </h3>

                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span className="flex items-center">
                              <Icon name="User" className="mr-1" size={14} />
                              {post.author}
                            </span>
                            <span className="flex items-center">
                              <Icon
                                name="MessageSquare"
                                className="mr-1"
                                size={14}
                              />
                              {post.replies} ответов
                            </span>
                            <span className="flex items-center">
                              <Icon name="Eye" className="mr-1" size={14} />
                              {post.views} просмотров
                            </span>
                            <span className="flex items-center">
                              <Icon name="Clock" className="mr-1" size={14} />
                              {post.lastActivity}
                            </span>
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-white"
                        >
                          <Icon name="ChevronRight" size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Пагинация */}
                <div className="flex items-center justify-center space-x-2 mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-calamity-light-purple/30 text-gray-300"
                  >
                    <Icon name="ChevronLeft" size={16} />
                  </Button>
                  <Button className="bg-calamity-light-purple text-white">
                    1
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-calamity-light-purple/30 text-gray-300"
                  >
                    2
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-calamity-light-purple/30 text-gray-300"
                  >
                    3
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-calamity-light-purple/30 text-gray-300"
                  >
                    <Icon name="ChevronRight" size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
