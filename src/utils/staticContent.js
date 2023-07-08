const navLinks = {
  home: 'Home',
  projects: 'Projects',
  about: 'About',
};

const projectContent = {
  tools: 'Core tools and languages used:',
  description: 'Description:',
  github: 'Github link',
  detailsBtnPlus: '+',
  detailsBtnMinus: '-',
  detailsBtnText: 'Details',
};

const footerContent = {
  year: '2023',
  github_text: 'Vladislav Lis GitHub Profile',
  github_link: 'https://github.com/vlad-lis',
};

const projects = [
  {
    id: 1,
    name: 'Movies Explorer Front-end',
    brief: 'JavaScript',
    tools: 'JavaScript (ReactJS), HTML, CSS',
    details: 'This is the front-end component of the final project for the web development course. In addition to the developed API, the application also integrates with a third-party API for searching movies by name. The home page of the project includes information about the project and the author. To access the movie search feature, users need to sign up or sign in first. Once authenticated, they will be redirected to the movie search page where they can search for movies by name and save them to favorites by clicking on the like button. On the saved movies page, users can then browse their saved movies or remove them from favorites. \n\nThe project is deployed on a virtual machine (VM). During the deployment process, the VM (Ubuntu) was configured by setting up an SSH key pair, installing core packages such as Node.js, MongoDB, and Git, and configuring Nginx, PM2, and Certbot. \nThe deployment link, instructions on how to run the project locally, and screenshots of the project can be found in the README file of the GitHub repository.',
    link: 'https://github.com/vlad-lis/movies-explorer-frontend',
    readme_link: 'https://github.com/vlad-lis/movies-explorer-frontend#readme',
  },
  {
    id: 2,
    name: 'Movies Explorer API',
    brief: 'JavaScript',
    tools: 'JavaScript (Express.js, MongoDB).',
    details: 'This is the back-end component of the final project for the web development course, which is an API that has been deployed and contains multiple endpoints. The API is designed to store new user credentials, allow for profile editing, check login status, process user logout, save movies to favorites, and delete movies from favorites. \n\nThe project is deployed on a virtual machine (VM). During the deployment process, the VM (Ubuntu) was configured by setting up an SSH key pair, installing core packages such as Node.js, MongoDB, and Git, and configuring Nginx, PM2, and Certbot. \nThe deployment link, instructions on how to run the project locally, and a screenshot of a sample request made via Postman can be found in the README file of the GitHub repository.',
    link: 'https://github.com/vlad-lis/movies-explorer-api',
    readme_link: 'https://github.com/vlad-lis/movies-explorer-api#readme',
  },
  {
    id: 3,
    name: 'ML - Assessment of Vulnerability',
    brief: 'Python, JavaScript',
    tools: 'Python (Scikit-learn, Pandas, Numpy), JavaScript (ReactJS, Express.js), HTML, CSS.',
    details: 'A machine learning model (random forest classifier), which was trained on a dataset from a school-based survey conducted in Argentina in 2018. The model attempts to predict the vulnerability to bullying (target variable) based on provided inputs. It is important to note that the model is created solely for demonstration purposes and does not claim to provide any insights on the issue. \n\nTo facilitate the input process during the demonstration, a simple React application was developed along with an API that features a single endpoint. This endpoint receives inputs, processes them using the Python script (model), and outputs the resulting probability of the target variable being equal to one. \n\nThe project can be run locally as a web application or viewed as a Jupyter Notebook. The creation of the ML model was divided into separate notebooks for data cleaning and model creation. \nScreenshots of the project, instructions on how to run the project locally or view the notebooks, can be found in the README file of the GitHub repository.',
    link: 'https://github.com/vlad-lis/ML-predict-bullying',
    readme_link: 'https://github.com/vlad-lis/ML-predict-bullying#readme',
  },
  {
    id: 4,
    name: 'ML - Car Price Prediction',
    brief: 'Python',
    tools: 'Python (Scikit-learn, Pandas, Numpy)',
    details: 'A machine learning model (linear regression), which aims to predict the price of used cars. The model can be executed either through the terminal as a Python script (prompting for inputs and outputting the predicted price) or viewed as a Jupyter Notebook (which also includes a function that prompts for inputs and outputs the predicted price). \n\nSome results of the predicted car price may be skewed due to the fact that certain makes/models are underrepresented in the provided dataset. However, not all of them were removed during the data cleaning process for demonstration purposes. \n\nScreenshots of the project, instructions on how to run the project locally or view the notebook, can be found in the README file of the GitHub repository.',
    link: 'https://github.com/vlad-lis/Ironhack-midterm',
    readme_link: 'https://github.com/vlad-lis/Ironhack-midterm#readme',
  },
  {
    id: 5,
    name: 'ML - Song Recommender',
    brief: 'Python',
    tools: 'Python (Scikit-learn, Pandas, Numpy)',
    details: 'A machine learning model (K-Means Clustering) is utilized to recommend songs based on user input and various features such as danceability, energy, loudness, mode, speechiness, acousticness, instrumentalness, liveness, valence, and tempo. \n\nThe current data set consists of over 40,000 songs, and the accuracy of the recommendations relies on the size and diversity of songs within the data set. \n\nScreenshot of the project can be found in the README file of the GitHub repository.',
    link: 'https://github.com/vlad-lis/Song-Recommender',
    readme_link: 'https://github.com/vlad-lis/Song-Recommender#readme',
  },
  {
    id: 6,
    name: 'Card Hub',
    brief: 'JavaScript',
    tools: 'JavaScript (ReactJS, Express.js), HTML, CSS',
    details: 'The repository contains both the back-end (API) and front-end components of the application. This application allows users to create cards, which include a name, image, a like button, and a likes counter. The back-end component features several endpoints for saving, liking, and deleting cards, as well as user registration, login, logout, and profile or avatar editing. \n\nThe project is deployed on a virtual machine (VM). During the deployment process, the VM (Ubuntu) was configured by setting up an SSH key pair, installing core packages such as Node.js, MongoDB, and Git, and configuring Nginx, PM2, and Certbot. \nThe deployment links, instructions on how to run the project locally, and screenshots of the project can be found in the README file of the GitHub repository.',
    link: 'https://github.com/vlad-lis/react-mesto-api-full-gha',
    readme_link: 'https://github.com/vlad-lis/react-mesto-api-full-gha#readme',
  },
  {
    id: 7,
    name: 'Adaptive Web Page',
    brief: 'HTML, CSS',
    tools: 'HTML, CSS',
    details: 'A static page with responsive CSS designed for different screen resolutions. The page was created as an exercise in adaptive CSS during a web development course, adjusting the style based on the screen resolution. \n\nThe page is deployed on GitHub Pages (the deployment link can be found in the README file).',
    link: 'https://github.com/vlad-lis/russian-travel',
    readme_link: 'https://github.com/vlad-lis/russian-travel#readme',
  },
  {
    id: 8,
    name: 'Static Web Page',
    brief: 'HTML, CSS',
    tools: 'HTML, CSS',
    details: 'A static page designed for resolutions of 1100px and higher. The page was created as a practice exercise for HTML and CSS tools, including iframes and keyframes. \n\nThe page is deployed on GitHub Pages (the deployment link can be found in the README file).',
    link: 'https://github.com/vlad-lis/how-to-learn',
    readme_link: 'https://github.com/vlad-lis/how-to-learn#readme',
  },
];

const about = {
  title: 'What is this?',
  briefInfo: 'This is a minimalistic React application that was created as an addition to a CV, serving as a list of projects along with their descriptions.',
  projectsInfo: 'These projects do not necessarily have practical use; rather, they were created either to test and try certain tools or to demonstrate the author\'s ability to use such tools or programming languages.',
  repositoryInfo: 'If you\'d like to examine the source code of this application, you\'re welcome to browse its GitHub repository by clicking ',
  repositoryLinkText: 'this link.',
  repositoryLinkUrl: 'https://github.com/vlad-lis/portfolio',
  contacts: 'Contacts:',
  emailTitle: 'Email: ',
  emailAddress: 'lis.vladislav@gmail.com',
  telegramTitle: 'Telegram: ',
  telegramHref: 'vladislavlis',
  telegramName: '@vladislavlis',
};

export {
  navLinks, footerContent, projectContent, projects, about,
};
