const navLinks = {
  projects: 'Projects',
  about: 'About',
};

const projectContent = {
  tools: 'Core tools and languages used: ',
  github: 'Github repository',
  detailsCollapsed: '+ Details',
  detailsExpanded: '- Details',
};

const footerContent = {
  year: '2023',
  github: 'https://github.com/vlad-lis',
};

const projects = [
  {
    id: 1,
    name: 'Movies Explorer API',
    brief: 'JavaScript',
    tools: 'JavaScript, Express.js, MongoDB. ',
    details: 'This is the back-end component of the final project for the web development course, which is an API that has been deployed and contains multiple endpoints. The API is designed to store new user credentials, allow for profile editing, check login status, process user logout, save movies to favorites, and delete movies from favorites. The deployment link can be found in the README file of the GitHub repository.',
    link: 'https://github.com/vlad-lis/movies-explorer-api',
  },
  {
    id: 2,
    name: 'Movies Explorer Front-end',
    brief: 'JavaScript',
    tools: 'JavaScript, ReactJS.',
    details: 'This is the front-end component of the final project for the web development course. In addition to the developed API, the application also integrates with a third-party API for searching movies by name. The deployment link can be found in the README file of the GitHub repository.',
    link: 'https://github.com/vlad-lis/movies-explorer-frontend',
  },
  {
    id: 3,
    name: 'ML - Random Forest Classifer',
    brief: 'Python / JavaScript',
    tools: 'Python, Scikit-learn, Pandas, Numpy, JavaScript, ReactJS, Express.js.',
    details: 'A machine learning model was trained on a dataset from a school-based survey conducted in Argentina in 2018. The model attempts to predict the vulnerability to bullying (target variable) based on provided inputs. It is important to note that the model is created solely for demonstration purposes and does not claim to provide any insights on the issue. To facilitate the input process during the demonstration, a simple React application was developed along with an API that features a single endpoint. This endpoint receives inputs, processes them using the Python script (model), and outputs the resulting probability of the target variable being equal to one.',
    link: 'https://github.com/vlad-lis/ML-predict-bullying',
  },
  {
    id: 4,
    name: 'ML - Linear Regression',
    brief: 'Python',
    tools: 'Python, Scikit-learn, Pandas, Numpy.',
    details: 'A machine learning model, which aims to predict the price of used cars. The model can be executed either through the terminal as a Python script (prompting for inputs and outputting the predicted price) or viewed as a Jupyter Notebook (which also includes a function that prompts for inputs and outputs the predicted price).',
    link: 'https://github.com/vlad-lis/Ironhack-midterm',
  },
];

export {
  navLinks, footerContent, projectContent, projects,
};
