function showData(name, imageSrc, editComments, date){
    const nameInput = document.createElement('div');
    nameInput.classList.add('username');
    nameInput.textContent = name;

    const image = document.createElement('img');
    image.classList.add('img__size');
    image.src = setAvatar(imageSrc);

    const commentsDiv = document.createElement('div');
    commentsDiv.textContent = editComments;

    const chatDate = document.createElement('div');
    chatDate.classList.add('chat__date');
    chatDate.textContent = date;

    const nameContainer = document.querySelector('.service__chat');
    nameContainer.append(nameInput);
    nameContainer.append(image);
    nameContainer.append(commentsDiv);
    nameContainer.append(chatDate);
}

function newDate(){
    const commentDate = new Date();
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
    const formattedName = correctName(document.getElementById('name').value);
    document.getElementById('name').value = " ";

    const input = document.getElementById('avatar').value;
    document.getElementById('avatar').value = " ";

    const userComments = checkSpam(document.getElementById('comments').value);
    document.getElementById('comments').value = " ";

    const userDate = newDate();

    showData(formattedName, input, userComments , userDate);
});

// Напишите функцию `formatDate(date)`, форматирующую `date` по следующему принципу:

// - если спустя `date` прошло менее 1 секунды, вывести `"прямо сейчас"` ;
// - в противном случае, если с `date` прошло меньше 1 минуты, вывести `"n сек. назад"`;
// - в противном случае, если меньше часа, вывести `"m мин. назад"`;
// - в противном случае, полная дата в формате `"DD.MM.YY HH:mm"`. А именно: `"день.месяц.год часы:минуты"`, всё в виде двух цифр, т.е. `31.12.16 10:00`.

function formatDate(date) {
    const diff = new Date() - date;
    const sec = Math.floor(diff / 1000);
    const min = Math.floor(diff / 60000);
    let day = date;

    if (diff < 1000) {
        return console.log('прямо сейчас');
    }
    else if (sec < 60) {
        return console.log(sec + ' сек. назад');
    }
    else if (min < 60) {
        return console.log(min + ' мин. назад');
    }
    else if (day = [
        '0' + day.getDate(),
        '0' + (day.getMonth() + 1),
        '' + day.getFullYear(),
        '0' + day.getMinutes()
        ].map(component => component.slice(-2))) {
    return console.log(day.slice(0, 3).join('.') + ' ' + day.slice(3).join(':'));
    }
}
formatDate(new Date());
