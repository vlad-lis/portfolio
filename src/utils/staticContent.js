const navLinksEN = {
  home: 'Home',
  projects: 'Projects',
  about: 'About',
};

const navLinksRU = {
  home: 'Главная',
  projects: 'Проекты',
  about: 'Инфо',
};

const projectContent = {
  toolsEN: 'Core tools and languages used:',
  descriptionEN: 'Description:',
  githubEN: 'Github link',
  detailsBtnPlus: '+',
  detailsBtnMinus: '-',
  detailsBtnTextEN: 'Details',
  toolsRU: 'Основной стек:',
  descriptionRU: 'Описание:',
  githubRU: 'Ссылка на GitHub',
  detailsBtnTextRU: 'Подробнее',
};

const footerContent = {
  year: '2023',
  github_text_EN: 'Vladislav Lis GitHub Profile',
  github_text_RU: 'Профиль на GitHub',
  github_link: 'https://github.com/vlad-lis',
};

const projects = [
  {
    id: 1,
    name: 'Lenta project (Hackathon)',
    brief: 'TypeScript',
    tools: 'TypeScript, React, CSS (SCSS), HTML',
    detailsEN:
      'This project was developed for the retail company "Lenta." Its primary purpose is to visualize actual sales data and forecasts. Data visualization is achieved using the Chart.js and React-table libraries. The application receives data from the backend, processes it, and then displays corresponding tables and charts with an option to import data into an .xlsx file. \n\nCurrently, due to the absence of complete forecast data provided by the API, the Excel import functionality is limited to actual data, and the charts display data stored in a local JSON file. The description of the project can be found in the README file of the repository.',
    detailsRU:
      'Проект разработан для компании "Лента". Его основная цель - визуализация фактических данных о продажах и прогнозов. Визуализация данных осуществляется с использованием библиотек Chart.js и React-table. Приложение получает данные с бэкенда, обрабатывает их, а затем отображает соответствующие таблицы и графики с возможностью импорта данных в файл .xlsx. \n\nВ настоящее время из-за отсутствия полных данных о прогнозах, предоставляемых API, функциональность импорта в Excel ограничивается фактическими данными, а графики отображают данные, хранящиеся в локальном файле JSON. Описание проекта также можно найти в README',
    link: 'https://github.com/Hackathon-Lenta-Team2/frontend',
    readme_link: 'https://github.com/Hackathon-Lenta-Team2/frontend#readme',
  },
  {
    id: 2,
    name: 'BotDepot',
    brief: 'JavaScript',
    tools: 'JavaScript, React, CSS (SCSS), HTML',
    detailsEN:
      "BotsDepot is an application that serves as a marketplace for transport bots. Made by a small team consisting of frontend and backend developers, UX/UI designers, and QA specialists. The project's primary objective is to provide a platform for bot creators to list their products on the marketplace, and for potential buyers to browse, review, and purchase the bots they require. \n\nMy role was focused on the main page, which includes the list of available bots and carousels for banners and categories. These carousels are implemented using the react-multi-carousel library.",
    detailsRU:
      'BotsDepot - это приложение-маркетплейс для ботов в сфере транспорта. Сделано командой, включающей в себя фронтенд и бэкенд разработчиков, UX/UI дизайнеров и QA специалистов. Основная цель проекта заключается в предоставлении платформы для создателей ботов, где они могут размещать свои продукты на рынке, а потенциальные покупатели могут просматривать, оценивать и покупать необходимые боты. \n\nМоя роль в процессе разработки была сосредоточена на главной странице, которая включает в себя список доступных ботов и карусели (слайдеры) для баннеров и категорий. Эти карусели реализованы с использованием библиотеки react-multi-carousel.',
    link: 'https://github.com/Marketplace-telegram-bots-for-transport/frontend/tree/develop',
    readme_link:
      'https://github.com/Marketplace-telegram-bots-for-transport/frontend/tree/develop#readme',
  },
  {
    id: 3,
    name: 'Card Hub',
    brief: 'JavaScript',
    tools: 'JavaScript, React, Node.js (Express.js), HTML, CSS',
    detailsEN:
      'The repository contains both the back-end (API) and front-end components of the application. This application allows users to create cards, which include a name, image, a like button, and a likes counter. The back-end component features several endpoints for saving, liking, and deleting cards, as well as user registration, login, logout, and profile or avatar editing. \n\nThe project is deployed on a virtual machine (VM). During the deployment process, the VM (Ubuntu) was configured by setting up an SSH key pair, installing core packages such as Node.js, MongoDB, and Git, and configuring Nginx, PM2, and Certbot. \nThe deployment links, instructions on how to run the project locally, and screenshots of the project can be found in the README file of the GitHub repository.',
    detailsRU:
      'Репозиторий содержит как фронтенд, так и бэкенд (API) компоненты проекта. Это приложение позволяет пользователям создавать карточки, которые включают в себя имя, изображение, кнопку "Нравится" и счетчик лайков. Бэкенд-часть включает в себя несколько эндпоинтов для сохранения, оценки и удаления карточек, а также для регистрации пользователей, входа в систему, выхода из системы и редактирования профиля или аватара. \n\nПроект развернут на виртуальной машине (ВМ). В процессе развертывания ВМ (Ubuntu) была настроена с использованием SSH-ключей, установлены основные пакеты, такие как Node.js, MongoDB и Git, а также настроены Nginx, PM2 и Certbot. Ссылки на развернутый проект, инструкции по запуску проекта локально и скриншоты приложения можно найти в файле README репозитория GitHub',
    link: 'https://github.com/vlad-lis/react-mesto-api-full-gha',
    readme_link: 'https://github.com/vlad-lis/react-mesto-api-full-gha#readme',
  },
  {
    id: 4,
    name: 'Blogicum',
    brief: 'Python',
    tools: 'Python (Django), Bootstrap',
    detailsEN:
      'Application for creating posts/publications with an image, description, and a comment section. \n\nThe application utilizes Django ORM for database handling (SQLite) and also allows users to create scheduled publications by setting the publication date in the future. The project is deployed via pythonanywhere.com, and the link can be found in the README file of the repository.',
    detailsRU:
      'Приложение для создания постов/публикаций с изображением, описанием и секцией для комментариев. \n\nПриложение использует Django ORM для работы с базой данных (SQLite) и также позволяет пользователям создавать запланированные публикации, устанавливая дату публикации в будущем. Проект развернут с использованием pythonanywhere.com. Ссылка на развернутый проект в README репозитория.',
    link: 'https://github.com/vlad-lis/blogicum',
    readme_link: 'https://github.com/vlad-lis/blogicum#readme',
  },
  {
    id: 5,
    name: 'Movies Explorer Front-end',
    brief: 'JavaScript',
    tools: 'JavaScript, React, HTML, CSS',
    detailsEN:
      'This is the front-end component of the movies-explorer application. In addition to the developed API, the application also integrates with a third-party API for searching movies by name. The home page of the project includes information about the project and the author. To access the movie search feature, users need to sign up or sign in first. Once authenticated, they will be redirected to the movie search page where they can search for movies by name and save them to favorites by clicking on the like button. On the saved movies page, users can then browse their saved movies or remove them from favorites. \n\nThe project is deployed on a virtual machine (VM). During the deployment process, the VM (Ubuntu) was configured by setting up an SSH key pair, installing core packages such as Node.js, MongoDB, and Git, and configuring Nginx, PM2, and Certbot. \nThe deployment link, instructions on how to run the project locally, and screenshots of the project can be found in the README file of the GitHub repository.',
    detailsRU:
      'Фронтенд-часть приложения Movies-explorer. Помимо разработанного API, приложение также интегрирует сторонний API для поиска фильмов по названию. Домашняя страница проекта содержит информацию о самом проекте и его авторе. Для доступа к функции поиска фильмов пользователи должны сначала зарегистрироваться или войти в систему. После аутентификации их перенаправляет на страницу поиска фильмов, где они могут искать фильмы по названию и добавлять их в избранное, нажимая на кнопку-лайк. На странице сохраненных фильмов пользователи могут просматривать список своих сохраненных фильмов или удалять их из избранного. \n\nПроект развернут на виртуальной машине (ВМ). В процессе развертывания ВМ (Ubuntu) была настроена с помощью установки SSH-ключа, установки основных пакетов, таких как Node.js, MongoDB и Git, а также конфигурации Nginx, PM2 и Certbot. Ссылку на развернутый проект, инструкции по запуску проекта локально и снимки экрана проекта можно найти в файле README репозитория.',
    link: 'https://github.com/vlad-lis/movies-explorer-frontend',
    readme_link: 'https://github.com/vlad-lis/movies-explorer-frontend#readme',
  },
  {
    id: 6,
    name: 'Movies Explorer API',
    brief: 'JavaScript',
    tools: 'JavaScript, Node.js (Express.js), MongoDB).',
    detailsEN:
      'This is the back-end component of the final project for the web development course, which is an API that has been deployed and contains multiple endpoints. The API is designed to store new user credentials, allow for profile editing, check login status, process user logout, save movies to favorites, and delete movies from favorites. \n\nThe project is deployed on a virtual machine (VM). During the deployment process, the VM (Ubuntu) was configured by setting up an SSH key pair, installing core packages such as Node.js, MongoDB, and Git, and configuring Nginx, PM2, and Certbot. \nThe deployment link, instructions on how to run the project locally, and a screenshot of a sample request made via Postman can be found in the README file of the GitHub repository.',
    detailsRU:
      'Бэкенд-часть приложения Movies-explorer, которая представляет собой API, развернутый и содержащий несколько эндпоинтов. API предназначен для хранения учетных данных новых пользователей, позволяет редактировать профили, проверять статус входа в систему, выполнять выход из системы, сохранять фильмы в избранное и удалять фильмы из избранного. \n\nПроект развернут на виртуальной машине (ВМ). В процессе развертывания ВМ (Ubuntu) была настроена с помощью установки SSH-ключей, установки основных пакетов, таких как Node.js, MongoDB и Git, а также настройки Nginx, PM2 и Certbot. Ссылку на развернутый проект, инструкции по запуску проекта локально и скриншот примерного запроса, выполненного с помощью Postman, можно найти в файле README репозитория GitHub',
    link: 'https://github.com/vlad-lis/movies-explorer-api',
    readme_link: 'https://github.com/vlad-lis/movies-explorer-api#readme',
  },
  {
    id: 7,
    name: 'ML - Assessment of Vulnerability',
    brief: 'Python, JavaScript',
    tools:
      'Python (Scikit-learn, Pandas, Numpy), JavaScript (React, Express.js), HTML, CSS.',
    detailsEN:
      'A machine learning model (random forest classifier), which was trained on a dataset from a school-based survey conducted in Argentina in 2018. The model attempts to predict the vulnerability to bullying (target variable) based on provided inputs. It is important to note that the model is created solely for demonstration purposes and does not claim to provide any insights on the issue. \n\nTo facilitate the input process during the demonstration, a simple React application was developed along with an API that features a single endpoint. This endpoint receives inputs, processes them using the Python script (model), and outputs the resulting probability of the target variable being equal to one. \n\nThe project can be run locally as a web application or viewed as a Jupyter Notebook. The creation of the ML model was divided into separate notebooks for data cleaning and model creation. \nScreenshots of the project, instructions on how to run the project locally or view the notebooks, can be found in the README file of the GitHub repository.',
    detailsRU:
      'Модель машинного обучения (random forest classifier), обученная на данных из опроса, проведенного в Аргентине в 2018 году. Модель пытается предсказать уязвимость к буллингу (целевая переменная) на основе предоставленных входных данных. Важно отметить, что модель создана исключительно в демонстрационных целях и не претендует на предоставление каких-либо инсайтов по данной проблеме. \n\nДля облегчения процесса ввода данных во время демонстрации было разработано простое приложение React с API, включающим один эндпоинт. Этот эндпоинт получает входные данные, обрабатывает их с использованием Python-скрипта (модели) и выводит вероятность равенства целевой переменной единице. \n\nПроект можно запустить локально как веб-приложение или просмотреть в виде блокнота Jupyter. Создание модели машинного обучения было разделено на отдельные блокноты для очистки данных и создания модели. Скриншоты проекта и инструкции по запуску проекта локально или просмотру блокнотов можно найти в файле README репозитория GitHub.',
    link: 'https://github.com/vlad-lis/ML-assess-vulnerability',
    readme_link: 'https://github.com/vlad-lis/ML-assess-vulnerability#readme',
  },
  {
    id: 8,
    name: 'ML - Car Price Prediction',
    brief: 'Python',
    tools: 'Python (Scikit-learn, Pandas, Numpy)',
    detailsEN:
      'A machine learning model (linear regression), which aims to predict the price of used cars. The model can be executed either through the terminal as a Python script (prompting for inputs and outputting the predicted price) or viewed as a Jupyter Notebook (which also includes a function that prompts for inputs and outputs the predicted price). \n\nSome results of the predicted car price may be skewed due to the fact that certain makes/models are underrepresented in the provided dataset. However, not all of them were removed during the data cleaning process for demonstration purposes. \n\nScreenshots of the project, instructions on how to run the project locally or view the notebook, can be found in the README file of the GitHub repository.',
    detailsRU:
      'Модель машинного обучения (линейная регрессия), которая направлена на прогнозирование цены подержанных автомобилей. Модель можно запустить через терминал как скрипт на Python (запрашивая входные данные и выводя прогнозируемую цену) или просмотреть в виде блокнота Jupyter (который также включает функцию запроса входных данных и вывода прогнозируемой цены). \n\nНекоторые результаты прогноза цены автомобиля могут быть искажены из-за того, что определенные марки и модели недостаточно представлены в изначальном наборе данных. Однако не все они были удалены в процессе очистки данных в демонстрационных целях. \n\nСкриншоты проекта, инструкции по запуску проекта локально или просмотру блокнота можно найти в файле README репозитория GitHub.',
    link: 'https://github.com/vlad-lis/ML-price-prediction',
    readme_link: 'https://github.com/vlad-lis/ML-price-prediction#readme',
  },
  {
    id: 9,
    name: 'ML - Song Recommender',
    brief: 'Python',
    tools: 'Python (Scikit-learn, Pandas, Numpy)',
    detailsEN:
      'A machine learning model (K-Means Clustering) is utilized to recommend songs based on user input and various features such as danceability, energy, loudness, mode, speechiness, acousticness, instrumentalness, liveness, valence, and tempo. \n\nThe current data set consists of over 40,000 songs, and the accuracy of the recommendations relies on the size and diversity of songs within the data set. \n\nScreenshot of the project can be found in the README file of the GitHub repository.',
    detailsRU:
      'Модель машинного обучения (K-Means Clustering) для рекомендации песен через Spotify на основе ввода пользователя и различных характеристик, таких как энергичность, громкость, инструментальность, валентность, темп и т.д. Текущий набор данных включает более 40 000 песен, и точность рекомендаций зависит от объема и разнообразия песен в используемом наборе данных. \n\nСкриншоты проекта можно найти в файле README репозитория GitHub.',
    link: 'https://github.com/vlad-lis/ML-song-recommender',
    readme_link: 'https://github.com/vlad-lis/ML-song-recommender#readme',
  },
  {
    id: 10,
    name: 'Adaptive Web Page',
    brief: 'HTML, CSS',
    tools: 'HTML, CSS',
    detailsEN:
      'A static page with responsive CSS designed for different screen resolutions. The page was created as an exercise in adaptive CSS during a web development course, adjusting the style based on the screen resolution. \n\nThe page is deployed on GitHub Pages (the deployment link can be found in the README file).',
    detailsRU:
      'Статичная страница с адаптивным CSS, разработанная для разных разрешений экрана. Страница была создана как упражнение по адаптивному CSS в рамках курса веб-разработки (измение стилей в зависимости от разрешения экрана). \n\nСтраница развернута на GitHub Pages (ссылку на развертывание можно найти в файле README).',
    link: 'https://github.com/vlad-lis/russian-travel',
    readme_link: 'https://github.com/vlad-lis/russian-travel#readme',
  },
  {
    id: 11,
    name: 'Static Web Page',
    brief: 'HTML, CSS',
    tools: 'HTML, CSS',
    detailsEN:
      'A static page designed for resolutions of 1100px and higher. The page was created as a practice exercise for HTML and CSS tools, including iframes and keyframes. \n\nThe page is deployed on GitHub Pages (the deployment link can be found in the README file).',
    detailsRU:
      'Статичная страница для разрешений экрана от 1100 пикселей и выше. Страница была создана как практическое упражнение для изучения инструментов HTML и CSS, включая iframes и keyframes. \n\nСтраница развернута на GitHub Pages (ссылку на развертывание можно найти в файле README).',
    link: 'https://github.com/vlad-lis/how-to-learn',
    readme_link: 'https://github.com/vlad-lis/how-to-learn#readme',
  },
];

const about = {
  titleEN: 'What is this?',
  titleRU: 'Где я и что происходит?',
  briefInfoEN:
    'This is a minimalistic React application that was created as an addition to a CV, serving as a list of projects along with their descriptions.',
  briefInfoRU:
    'Это минималистичное приложение React, которое было создано как дополнение к резюме, представляющее список проектов вместе с их описаниями.',
  projectsInfo: '',
  repositoryInfoEN:
    "If you'd like to examine the source code of this application, you're welcome to browse its GitHub repository by clicking ",
  repositoryInfoRU:
    'Если вы хотите ознакомиться с исходным кодом этого приложения, вы можете перейти в его репозиторий на GitHub, кликнув ',
  repositoryLinkTextEN: 'this link.',
  repositoryLinkTextRU: 'по этой ссылке.',
  repositoryLinkUrl: 'https://github.com/vlad-lis/portfolio',
  contactsEN: 'Contacts:',
  contactsRU: 'Контакты',
  emailTitle: 'Email: ',
  emailAddress: 'lis.vladislav@gmail.com',
  telegramTitle: 'Telegram: ',
  telegramHref: 'vladislavlis',
  telegramName: '@vladislavlis',
  linkedInTitle: 'LinkedIn: ',
  linkedInHref: 'https://www.linkedin.com/in/vladislav-lis/',
  linkedInName: 'in/vladislav-lis',
};

export {
  navLinksEN,
  navLinksRU,
  footerContent,
  projectContent,
  projects,
  about,
};
