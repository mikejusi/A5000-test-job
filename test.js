document.title = "Тестовое задание успешно выполнено";

const myStyles = `
    background-color: #537BDE;
    color: white;
`;

const imgStyle = `
    display: none;
`;

const element = document.querySelectorAll('.all-managers-item')[0];
const element2 = document.querySelectorAll('.all-managers-item')[2];

const img = document.querySelectorAll('img')[0];
const img2 = document.querySelectorAll('img')[3];
const img3 = document.querySelectorAll('img')[4];
const img4 = document.querySelectorAll('img')[7];

element.style.cssText = myStyles;
element2.style.cssText = myStyles;

img.style.cssText = imgStyle;
img2.style.cssText = imgStyle;
img3.style.cssText = imgStyle;
img4.style.cssText = imgStyle;