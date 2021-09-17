const outline = document.querySelectorAll('.outline');
setTimeout(() => {
  outline.forEach(el => el.style.transform = "translateX(0px)")
},500)


let textWriting = document.querySelector('.text-writing');
let menuBurger = document.querySelector('.menu__burger');
let navBurger = document.querySelector('.nav');

let index = 0;
let counter = 0;
let sentences = ["Hello!", "I'm Gleb.", "Live in Minsk.", "Have fun!"];
let nameText = "gleb"
let isCompleted = true;
let speed = 100;


menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('active');
  navBurger.classList.toggle('active');
})

// Вызов функции набора текста
setTimeout(() => {
  typeWriting(sentences, speed);
}, 1000);


// Функция Набора текста (аргументом передаем массив слов)
function typeWriting(array, speed){
  const typeWrite = setInterval(() => {
    // Проверяем наличие следующего слова в массиве
    if(counter >= array.length) return false;
    // Добавляем содержимому элемента текст побуквенно и увеличиваем индекс
    textWriting.textContent += array[counter][index];
    index++;

    // Проверяем количество букв в слове и индекс на равенство
    if(index === array[counter].length) {
      // Завершаем функцию набора текста 
      clearInterval(typeWrite);
      // Изменяем нужные переменные
      index = 0;
      isCompleted = false;
      // Проверяем наличие следующего слова в массиве и вызываем функцию стирания текста
      if(counter !== array.length - 1) backTypeWriting(array[counter], speed)
    }
  }, speed);
}

// Функция Стирания текста (аргументом передаем слово из массива)
function backTypeWriting(word, speed){
  const backTypeWriting = setInterval(() => {
    // При помощи метода slice (и увеличения индекса) уменьшаем количество выводимых символов
      textWriting.textContent = word.slice(0,word.length - index);
      index++;

    // Проверяем будет ли следующий индекс равен длине слова
      if(index === word.length + 1) {
        // Изменяем нужные переменные
        index = 0;
        isCompleted = true;
        // Проверяем на наличие не прописанных слов и вызываем следующее
        if(counter !== sentences.length){
          counter++;
          typeWriting(sentences, speed);
        }
        // Завершаем функцию стирания текста
        clearInterval(backTypeWriting);
      }
  }, speed);
}
