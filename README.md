Clone this repo :

Configure Tailwind from here : https://tailwindcss.com/docs/guides/create-react-app

Install the following dependencies :

- npm i @heroicons/react // for Heroicons of sidebar

- npm i tailwind-scrollbar-hide // for hiding scrollbar

  Add THis Plugin in you tailwind.config.js file
  plugins: [
  require('tailwind-scrollbar-hide')

  ]

Add This to your index.css file
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

body {
font-family: "Roboto", sans-serif;
}

:root {
--theme-color: #00abe4;
--secondary-color: #1e375a;
--para-color: #81868a;
--dash-text-color: #526484;
--dash-heading: #364a63;
}
