
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
    nameContainer.append(chatDate);

}


// - если пользователь не ввел ссылку на аватар, то должна появляться стандартная аватарка. Стандартных аватаров должно быть больше пяти, они должны подставляться в рандомном порядке.


function newDate(){
    let date = new Date();
    return date;
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












