import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/about", label: "О сервере", icon: "Info" },
    { path: "/forum", label: "Форум", icon: "MessageSquare" },
    { path: "/support", label: "Поддержка", icon: "HelpCircle" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-calamity-dark/95 backdrop-blur-sm border-b border-calamity-light-purple/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://cdn.poehali.dev/files/7a0cdc4f-aeb7-4946-90ca-153c116c96e8.jpg"
              alt="CALAMITYCRAFT Logo"
              className="w-8 h-8 rounded"
            />
            <span className="font-montserrat font-bold text-white text-lg">
              CALAMITYCRAFT
            </span>
          </Link>

          {/* Десктопная навигация */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors font-open-sans ${
                  isActive(item.path)
                    ? "bg-calamity-light-purple text-white"
                    : "text-gray-300 hover:text-white hover:bg-calamity-purple/30"
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* IP адрес сервера */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="bg-calamity-purple/30 px-4 py-2 rounded-md">
              <span className="font-open-sans text-sm text-gray-300">IP: </span>
              <span className="font-montserrat font-semibold text-calamity-light-purple">
                play.calamitycraft.ru
              </span>
            </div>
          </div>

          {/* Мобильное меню */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {/* Мобильная навигация */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-calamity-light-purple/30">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors font-open-sans ${
                    isActive(item.path)
                      ? "bg-calamity-light-purple text-white"
                      : "text-gray-300 hover:text-white hover:bg-calamity-purple/30"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon name={item.icon as any} size={20} />
                  <span>{item.label}</span>
                </Link>
              ))}
              <div className="px-4 py-3 bg-calamity-purple/30 rounded-md mt-4">
                <span className="font-open-sans text-sm text-gray-300">
                  IP:{" "}
                </span>
                <span className="font-montserrat font-semibold text-calamity-light-purple">
                  play.calamitycraft.ru
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
