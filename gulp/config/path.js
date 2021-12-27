// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./docs`;
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    sass: `${srcFolder}/sass/style.scss`,
    html: `${srcFolder}/*.pug`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcFolder}/svg/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    sass: `${srcFolder}/sass/**/*.{sass,scss}`,
    html: `${srcFolder}/**/*.pug`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
    files: `${srcFolder}/files/**/*.*`,
    //svgicons: `${srcFolder}/svg/**/*.svg`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``// Папка на удаленном сервере, куда залить
}