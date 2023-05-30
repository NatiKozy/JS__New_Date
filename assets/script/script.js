// - Поле для ввода имени. Сделайте интерфейс преобразования имени, который учтёт, все нюансы — лишние пробелы, отсутствие больших букв в имени и прочее.
// Например, было введено пользователем : `иВаН` .
// Стало: `Иван` .
// - поле для ввода ссылки на аватар;
// - поле ввода сообщения. Необходимо реализовать отображение и добавление сообщений, а также функцию `checkSpam(str)`, заменяющую `'viagra'` или `'XXX'` на `***` ;
// - функция должна быть нечувствительна к регистру:

// let date = new Date();
// console.log(date);
function showData(name, imageSrc, editComments, date){
    let nameInput = document.createElement('div');
    nameInput.textContent = name;

    let image = document.createElement('img');
    image.classList.add('img__size');
    image.src = imageSrc;

    let commentsDiv = document.createElement('div');
    commentsDiv.textContent = editComments;

    let chatDate = document.createElement('div');
    chatDate.classList.add('chat__date');
    chatDate.textContent = date;


    let nameContainer = document.querySelector('.service__chat');
    nameContainer.append(nameInput);
    nameContainer.append(image);
    nameContainer.append(commentsDiv);

    let dateContainer = document.querySelector('.chat__wrapper');
    dateContainer.append(chatDate);
}

function newDate(){
    let date = new Date();
    return date;
}

function correctName(str){
    let rightName = str.trim();
    rightName = (rightName[0].toUpperCase() + rightName.slice(1).toLowerCase());
    return rightName;
}


function checkSpam(str){
    let editComments = str.trim();
    editComments = /(viagra|xxx)/gi;
    return str.replace(editComments, '***');
}


const input = document.getElementById('avatar');
const button = document.getElementById('button');
button.addEventListener('click', () =>{
    let formattedName = correctName(document.getElementById('name').value);
    document.getElementById('name').value = " ";

    let input = document.getElementById('avatar').value;
    document.getElementById('avatar').value = " ";

    let userComments = checkSpam(document.getElementById('comments').value);
    document.getElementById('comments').value = " ";

    let userDate = newDate();

    showData(formattedName, input, userComments , userDate);

});

// const text = '<div id="text"><h1>Здесь лежит важная</h1><br> <a href="link"><b>информация</b></a> о тегах HTML, <i>которую нужно очистить.</i></div>'

// function deleteTags(text) {
//     const regex = /( |<([^>]+)>)/ig,
//     result = text.replace(regex, " ");

//     return result;
// }

// document.writeln(deleteTags(text)) // 'Здесь лежит важная информация о тегах HTML, которую нужно очистить.'

// let password = 'long_password';

// console.log(password.length > 7); // true
// console.log(password.length > 7 && 'Strong'); // "Strong"
// console.log(password.length > 7 && 'Strong' || 'Weak'); // "Strong"

// password = 'short';

// console.log(password.length > 7); // false
// console.log(password.length > 7 && 'Strong'); // false
// console.log(password.length > 7 && 'Strong' || 'Weak'); // "Weak"










