import {
  Building2,
  CheckCircle,
  Clock,
  Euro as EuroSign,
  GraduationCap,
  Mail,
  Phone,
  Shield,
  Wallet,
  Zap,
  Handshake,
  FileText
} from 'lucide-react';


function App() {

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-yellow-500" />
            <h1 className="text-2xl font-bold text-gray-900">ЭлектроПоиск</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#benefits" className="text-gray-600 hover:text-gray-900">Преимущества</a></li>
              <li><a href="#requirements" className="text-gray-600 hover:text-gray-900">Требования</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Контакты</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl mb-6">
                  Легальная работа в Европе для электриков
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Стабильная зарплата от 12 евро в час нетто, официальное трудоустройство и профессиональное развитие в
                  ЕС. Спец предложение для предпринимателей с собственным юр. лицом.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScotdJYhdWmLnYJcB7e4dFxJx84AjfMJY7IYkp257iZ-c1STA/viewform?usp=header"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center"
                  >
                    <FileText className="h-5 w-5 mr-2"/>
                    Заполнить форму
                  </a>
                </div>

              </div>
              <div className="mt-12 lg:mt-0">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-xl">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Почему стоит выбрать работу в ЕС?
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <EuroSign className="h-6 w-6 text-blue-600"/>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900"> от 12 евро в час нетто</h4>
                        <p className="text-gray-600">Стабильная оплата, много часов</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Building2 className="h-6 w-6 text-green-600"/>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Официальное трудоустройство</h4>
                        <p className="text-gray-600">Помощь с визами и ВМЖ</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-yellow-100 p-3 rounded-full">
                        <GraduationCap className="h-6 w-6 text-yellow-600"/>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Обучение и развитие</h4>
                        <p className="text-gray-600">Повышение квалификации в ЕС</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-red-100 p-3 rounded-full">
                        <Handshake className="h-6 w-6 text-red-600"/>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Спец предложение для предпринимателей с собственным
                          юр. лицом.</h4>
                        <p className="text-gray-600">При желании откроем бесплатно</p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <p className="text-center text-gray-600">Свяжитесь с нами для подробной информации:</p>
                      <div className="mt-4 space-y-3">
                        <a href="tel:+XXXXXXXXXXX"
                           className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700">
                          <Phone className="h-5 w-5"/>
                          <span>+48 884 845 787</span>
                        </a>
                        <a href="mailto:hr@elektropoisk.ru"
                           className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700">
                          <Mail className="h-5 w-5"/>
                          <span>siliconart.office@gmail.com</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Трудоустроенных специалистов</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Стран ЕС</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">3 года</div>
                <div className="text-gray-600">Успешной работы</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-center mb-12">Преимущества работы в ЕС</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Wallet className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4">Достойная оплата</h3>
                </div>
                <p className="text-gray-600">От 12 евро в час.Много часов работы. Бонусы за эффективность.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4">Стабильный график</h3>
                </div>
                <p className="text-gray-600">40-часовая рабочая неделя. Официальные выходные.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Shield className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4">Социальные гарантии</h3>
                </div>
                <p className="text-gray-600">Медицинская страховка. Помощь с жильем. Поддержка в оформлении документов.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements with Image */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-8">Требования к кандидатам</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold mb-2">Опыт работы</h4>
                      <p className="text-gray-600">Практический опыт работы электриком</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold mb-2">Безопасность</h4>
                      <p className="text-gray-600">Знание и соблюдение европейских стандартов электробезопасности</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold mb-2">Профессиональная подготовка</h4>
                      <p className="text-gray-600">Профильное образование или действующие сертификаты будет плюсом</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3" 
                    alt="Электрик за работой" 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Zap className="h-8 w-8 text-yellow-500" />
                <span className="text-2xl font-bold">ЭлектроПоиск</span>
              </div>
              <p className="text-gray-400">Ведущая платформа для трудоустройства электриков в странах ЕС. Мы помогаем специалистам найти достойную работу в Европе.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Контакты</h4>
              <div className="space-y-4">
                <p className="flex items-center text-gray-400">
                  <Phone className="h-5 w-5 mr-3 text-blue-500" />
                  +48 884 845 787
                </p>
                <p className="flex items-center text-gray-400">
                  <Mail className="h-5 w-5 mr-3 text-blue-500" />
                  siliconart.office@gmail.com
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Режим работы</h4>
              <div className="space-y-4 text-gray-400">
                <p>Пн-Пт: 8:00 - 16:00</p>
                <p>Сб-Вс: Выходной</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2024 ЭлектроПоиск. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;