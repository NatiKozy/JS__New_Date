function showData(name, imageSrc, editComments, date){
    let nameInput = document.createElement('div');
    nameInput.textContent = name;

    let image = document.createElement('img');
    image.classList.add('img__size');
    image.src = setAvatar(imageSrc);

    let commentsDiv = document.createElement('div');
    commentsDiv.textContent = editComments;

    let chatDate = document.createElement('div');
    chatDate.classList.add('chat__date');
    chatDate.textContent = date;

    let nameContainer = document.querySelector('.service__chat');
    nameContainer.append(nameInput);
    nameContainer.append(image);
    nameContainer.append(commentsDiv);
    nameContainer.append(chatDate);
}

function newDate(){
    let commentDate = new Date();
    return commentDate;
}

const noName = document.getElementById('show-no');
function correctName(str){
    if(noName.checked) {
        rightName = 'username';
        return rightName;
    } else {
    let rightName = str.trim();
    rightName = (rightName[0].toUpperCase() + rightName.slice(1).toLowerCase());
    return rightName;
}}

function checkSpam(str){
    let editComments = str.trim();
    editComments = /(viagra|xxx)/gi;
    return str.replace(editComments, '***');
}

let avatar = document.getElementById('avatar').value;

function setAvatar(avatar){
    const defaultAvatar = [
    "./assets/images/ava1.jpg",
    "./assets/images/ava2.jpg",
    "./assets/images/ava3.jpg",
    "./assets/images/ava4.jpg",
    "./assets/images/ava5.jpg",
    "./assets/images/ava6.png",
    "./assets/images/ava7.jpg",
    "./assets/images/ava8.jpg",
    "./assets/images/ava9.png",
    "./assets/images/ava10.jpg"
];

    if (avatar === ""){
       return defaultAvatar[Math.floor(Math.random() * defaultAvatar.length)];
    } else {
        return avatar;
    }
}

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

// Напишите функцию `formatDate(date)`, форматирующую `date` по следующему принципу: 

// - если спустя `date` прошло менее 1 секунды, вывести `"прямо сейчас"` ;
// - в противном случае, если с `date` прошло меньше 1 минуты, вывести `"n сек. назад"`;
// - в противном случае, если меньше часа, вывести `"m мин. назад"`;
// - в противном случае, полная дата в формате `"DD.MM.YY HH:mm"`. А именно: `"день.месяц.год часы:минуты"`, всё в виде двух цифр, т.е. `31.12.16 10:00`.

// Например:

// function formatDate(date){
//     let date = new Date();
//     if(){
//         console.log('прямо сейчас')
//     }

//     console.log(date);
//     return date;
// }
// console.log(formatDate(new Date(new Date - 1)));
// onsole.log(formatDate(new Date(new Date - 30 * 1000)))
// console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
// console.log(formatDate(new Date(new Date - 86400 * 4 * 1000)));









