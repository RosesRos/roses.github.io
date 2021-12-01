const select = document.querySelector('select');
const allLang = ['en', 'ru', 'es'];

const langArr = {
    'title': {
        'en': 'Fabio >> Web_Developer',
        'ru': 'Фабио >> Веб-Разработчик',
        'es': 'Fabio >> Desarrollador Web',
    },
    'header': {
        'en': 'Web Developer | UX/UI Designer',
        'ru': 'Веб-Разработчик | UX/UI Дизайнер',
        'es': 'Desarrollador Web | UX/UI Diseñador',
    },
    'name': {
        'en': 'Fabio Rostran',
        'ru': 'Фабио Ростран',
        'es': 'Fabio Rostran',
    },
    'hire': {
        'en': 'Hire Me',
        'ru': 'Найми Меня',
        'es': 'Contratame',
    },
    'navbar': {
        'en': 'FABIO_WEB_DEVELOPER',
        'ru': 'ФАБИО_ВЕБ_РАЗРАБОТЧИК',
        'es': 'FABIO_DESARROLLADOR_WEB',
    },
    'home': {
        'en': 'Home',
        'ru': 'Главная',
        'es': 'Hogar',
    },
    'about': {
        'en': 'About',
        'ru': 'Обо мне',
        'es': 'Sobre Mi',
    },
    'service': {
        'en': 'Services',
        'ru': 'Услуги',
        'es': 'Servicios',
    },
    'portfolio': {
        'en': 'Portfolio',
        'ru': 'Портфолио',
        'es': 'Portfolio',
    },
    'contact': {
        'en': 'Contact',
        'ru': 'Контакты',
        'es': 'Contactos',
    },
    'main': {
        'en': 'About Me',
        'ru': 'Обо Мне',
        'es': 'Sobre Mi',
    },
    'main_one': {
        'en': 'WEB DEVELOPMENT WELCOME TO MY PAGE',
        'ru': 'ДОБРО ПОЖАЛОВАТЬ НА МОЮ СТРАНИЦУ ВЕБ-РАЗРАБОТКА',
        'es': 'DESARROLLO WEB BIENVENIDOS A MI PAGINA',
    },
    'main_two': {
        'en': `We’re the perfect blend of creative and technical. If you need flawless product execution and jaw-dropping design that
            entices your audience — then hello, it’s nice to meet you.`,
        'ru': `Мы - идеальное сочетание творчества и техники. Если вам нужно безупречное исполнение продукта и потрясающий дизайн, который привлекает вашу аудиторию - тогда привет, приятно познакомиться.`,
        'es': `Somos la combinación perfecta de creatividad y técnica. Si necesita una ejecución impecable del producto y un diseño asombroso que atraiga a su audiencia, entonces hola, es un placer conocerte.`,
    },
    'main_three': {
        'en': `I'm Web Developer JavaScript and PHP, UX/UI Design. I am enthusiastic about programming languages ​​and obsessed with
            the quality of the code. You can view source codes of me in my`,
        'ru': `Я веб-разработчик JavaScript и PHP, UX / UI дизайнер. Я с энтузиазмом отношусь к языкам программирования и одержин качеством кода. Вы можете посмотреть мои исходные коды в моем`,
        'es': `Soy Desarrollador Web JavaScript y PHP, Diseñador UX / UI. Me entusiasman los lenguajes de programación y me obsesiona la calidad del código. Puedes ver mis códigos fuente en mi`,
    },
    'servic': {
        'en': 'What I Do',
        'ru': 'Что Я Делаю',
        'es': 'Que Yo Hago',
    },
    'servic_one': {
        'en': 'CUSTOM ECOMMERCE',
        'ru': 'САЙТ-КОММЕРЦИЯ',
        'es': 'SITIO COMMERCIAL',
    },
    'servic_two': {
        'en': 'WEBSITE',
        'ru': 'ВЕБ-САЙТ',
        'es': 'SITIO WEB',
    },
    'servic_three': {
        'en': 'LANDING PAGE',
        'ru': 'ЛЕЙДИНГ',
        'es': 'LANDING PAGE',
    },
    'servic_four': {
        'en': 'WEB APP',
        'ru': 'ВЕБ-ПРИЛОЖЕНИЕ',
        'es': 'APLICACION WEB',
    },
    'servic_five': {
        'en': 'RESPONSIVE WEBSITE',
        'ru': 'АДАПТИВНЫЙ САЙТ',
        'es': 'SITIO ADAPTIVO',
    },
    'servic_six': {
        'en': 'BRAND IDENTITY',
        'ru': 'ФИРМЕННЫЙ СТИЛЬ',
        'es': 'ESTILO PROPIO',
    },
    'servic_about_one': {
        'en': `When it comes to eCommerce, user experience (UX) is paramount. Let me customize the perfect online store that matches
              your brand voice and your product,build solution to achieve your goals`,
        'ru': `Когда дело доходит до электронной коммерции, пользовательский интерфейс (UX) имеет первостепенное значение. Позвольте мне создать идеальный интернет-магазин, соответствующий голосу вашего бренда и продукта`,
        'es': `Cuando se trata de comercio electrónico, la experiencia del usuario (UX) es primordial. Permítame personalizar la tienda en línea perfecta que coincida con la voz de su marca y su producto`,
    },
    'servic_about_two': {
        'en': `Website development is one of my main areas of expertise. I understand the value of a beautiful, well executed website
              and know what it takes to present your business from the best side`,
        'ru': `Разработка веб-сайтов - одна из основных моих специализаций. Я понимаю ценность красивого, хорошо оформленного веб-сайта и знаю, что нужно, чтобы представить ваш бизнес с лучшей стороны`,
        'es': `El desarrollo de sitios web es una de mis principales áreas de especialización. Entiendo el valor de un sitio web hermoso y bien ejecutado y sé lo que se necesita para presentar su negocio de la mejor manera`,
    },
    'servic_about_three': {
        'en': `Landing page is a standalone web page, created specifically for a marketing or advertising campaign. It’s where a
              visitor “lands” after they click on a link in an email, or similar places on the web`,
        'ru': `Целевая страница - это отдельная веб-страница, созданная специально для маркетинговой или рекламной кампании. Это то место, где посетитель «приземляется» после того, как щелкнет ссылку в аналогичных местах в Интернете`,
        'es': `Es una página web independiente, creada específicamente para marketing o publicidad. Es donde un visitante "aterriza" después de hacer clic en un enlace, lugares similares en la web`,
    },
    'servic_about_four': {
        'en': `From the initial design to the final development stage,my team of specialists will build your application
              to reflect your business goals and user needs`,
        'ru': `Я создам ваше приложение, от начального дизайна до финального этапа разработки, в соответствии с вашими бизнес-целями и потребностями пользователей`,
        'es': `Desde el diseño inicial hasta la etapa de desarrollo final,Yo creare su aplicación para reflejar sus objetivos comerciales y las necesidades del usuario`,
    },
    'servic_about_five': {
        'en': `Your website is your digital first impression. That's why you need a responsive and conversion-oriented site, matched
              with great user experience and class design`,
        'ru': `Ваш веб-сайт - ваше первое цифровое впечатление. Вот почему вам нужен адаптивный сайт, сочетающийся с отличным пользовательским интерфейсом и классным дизайном`,
        'es': `Su sitio web es su primera impresión digital. Es por eso que necesita un sitio adaptivo, combinado con excelente experiencia de usuario y diseño de clase`,
    },
    'servic_about_six': {
        'en': `Who you are informs what you build. That’s why we thread your digital product and your brand identity together, always
              instilling product integrity`,
        'ru': `Что вы строите, говорит о том, Кто вы. Вот почему мы объединяем ваш цифровой продукт и идентичность вашего бренда, всегда прививая целостность продукта`,
        'es': `Lo que construyes informa, Quién eres. Es por eso que unimos su producto digital y su identidad de marca, siempre inculcando la integridad del producto`,
    },
    'project': {
        'en': 'My Projects',
        'ru': 'Мои Проекты',
        'es': 'Mis Projectos',
    },
    'project_all': {
        'en': 'Skills',
        'ru': 'Навыки',
        'es': 'Habilidad',
    },
    'project_one': {
        'en': 'Features',
        'ru': 'Функция',
        'es': 'Funcion',
    },
    'project_two': {
        'en': 'Sites',
        'ru': 'Сайты',
        'es': 'Sites',
    },
    'project_three': {
        'en': 'Desing',
        'ru': 'Дизайн',
        'es': 'Diseño',
    },
    'typescript': {
        'en': 'JavaScript With Syntax For Types',
        'ru': 'JavaScript С Синтаксисом Для Типов',
        'es': 'JavaScript Con Sintaxis Para Tipos',
    },
    'sql': {
        'en': 'Database Service',
        'ru': 'Служба базы данных',
        'es': 'Servicio de Base de Datos',
    },
    'react': {
        'en': 'The Progressive JavaScript Frameworks',
        'ru': 'Прогрессивные фреймворки JavaScript',
        'es': 'Los Marcos de JavaScript Progresivos',
    },
    'html': {
        'en': 'HyperText Markup Language and Cascading Style Sheets',
        'ru': 'Язык разметки гипертекста и Каскадные таблицы стилей',
        'es': 'Lenguaje de Marcado de Hipertexto y Hojas de Estilo en Cascada',
    },
    'sass': {
        'en': 'Syntactically Awesome Style Sheets and Leaner Style Sheets',
        'ru': 'Синтаксически Потрясающие Таблицы стилей и более тонкие Таблицы стилей',
        'es': 'Hojas de Estilo Sintácticamente Impresionantes y Hojas de Estilo Más Magras',
    },
    'php': {
        'en': 'Hypertext Preprocessor',
        'ru': 'Препроцессор гипертекста',
        'es': 'Preprocesador de Hipertexto',
    },
    'angular': {
        'en': 'Framework for building mobile and desktop web applications / JavaScript library / CSS framework directed at responsive',
        'ru': `Фреймворк для создания мобильных и настольных веб-приложений / Библиотека JavaScript / фреймворк CSS, ориентированный на адаптивный`,
        'es': 'Framework para crear aplicaciones web móviles y de escritorio / Libreria de JavaScript / CSS framework dirigido a adaptivo',
    },
    'contacto': {
        'en': 'Contact Me',
        'ru': `Свяжитесь со Мной`,
        'es': 'Contacteme',
    },
    'submit': {
        'en': 'Submit',
        'ru': 'Отправить',
        'es': 'Enviar',
    },
    'cancel': {
        'en': 'Cancel',
        'ru': 'Отменить',
        'es': 'Cancelar',
    },
    'web': {
        'en': 'Web Developer | UX/UI Designer',
        'ru': 'Веб-Разработчик | UX/UI Дизайнер',
        'es': 'Desarrollador Web | UX/UI Diseñador',
    },
    'password': {
        'en': 'How to Generate Random Password with PHP',
        'ru': 'Как Сгенерировать cлучайный Пароль с помощью PHP',
        'es': 'Como Generar una Clave Casual con PHP',
    },
    'password_demo': {
        'en': 'Version Demo',
        'ru': 'Версия Демо',
        'es': 'Version Demo',
    },
    'generator': {
        'en': 'Generator Pasword',
        'ru': 'Генератор Паролей',
        'es': 'Generador de Claves',
    },
}

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);

    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    document.querySelector('.title').innerHTML = langArr['title'][hash];

    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

changeLanguage();