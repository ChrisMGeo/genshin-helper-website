# Genshin Helper Website

This project is a React and TypeScript application built with Vite. It displays character builds from the Genshin Helper Team's community builds sheet, helping players optimize their characters for various roles and activities in the game.

## Features
Character Build Display: View recommended builds for all characters, including weapon choices, artifacts, talent priorities, and more.
Search Functionality: Easily search for a character by name.
Responsive Design: The application is fully responsive and works well on both desktop and mobile devices.

## Setup
```bash
git clone https://github.com/ChrisMGeo/genshin-helper-website.git
cd genshin-helper-website
npm install
npm run dev
```

## Localization
The following [Google Sheet](https://docs.google.com/spreadsheets/d/1f_th-WKRhGdeVhvsgCVSKhV6ZpP9oP8nxWEsULG_9-0/edit?usp=sharing) contains the localization. Currently most of the text is translated using Google Translate, so it may not be accurate. If you find any localization error that you can see in this sheet, that also shows up in the website, make sure to publish an issue, and NOT a pull request that modifies the `locales/` folder. This is because the `locales/` is generated from the sheet, and any changes made to the `locales/` folder in a seperate branch will be overwritten when `locales/` is generated in the future. You can test out your translations on the locales folder, and then submit an issue noting the changes you made.

## Acknowledgements

-[Genshin Impact Helper Team's Character Builds](https://docs.google.com/spreadsheets/d/1gNxZ2xab1J6o1TuNVWMeLOZ7TPOqrsf3SshP5DLvKzI/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
