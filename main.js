const ask_dialog_btn = 

document.getElementById('ask_dialog_btn')

const show_answer = 

document.getElementById('show_answer')

const tips_btn = 

document.querySelectorAll('.tips input')

const date = new Date();

const hours = date.getHours() % 12 || 12 ;

const isAm = date.getHours() < 12;

const minutes = date.getMinutes();

 

 

 function myDialog()

{

  

   const dialogs = [

  

  {

    request: 'hello', 

    response : 'hello there 🖐️'

  }, 

  {

    request: 'what can you do',

    response: 'i can tell you the time, try typing "tell me the time"'

  }, 

  {

    request: 'who created you',

    response: 'I\'ve been created by Houndini👽'

  }, 

  {

    request: 'how are you',

    response: 'im pretty good thanks for asking 🤑'

  }, 

  {

    request: 'who are you',

    response: 'my creator tell me to keep it secret 🤫'

  }, 

  {

    request: 'do you know google assistant',

    response: 'yes actually, we dating 🙃'

  }, 

  {

    request: 'how old are you',

    response: 'I don\'t, know ask my creator 😕'

  }, 

  {

    request: 'tell me the time', 

    response : `the time is ${hours}:${minutes} ${isAm ? 'am' : 'pm' }`

  }, 

  {

    request : 'what is your name', 

    response : 'my creator haven\'t given me any name 😰'

  }, 

  {

    request : 'where do you come from', 

    response : '300 millions years light from the earth 🌎 🚀🥱'

  }

 ]

 

  

  

  

  

  const input_dialog_field = 

document.getElementById('input_dialog_field').value

  for (var i = 0; i < dialogs.length; i++) {

    if (input_dialog_field.trim().toLowerCase() !== dialogs[i].request) {

    show_answer.innerHTML = 'Sorry i didn\'t catch that, try those tips down below 👇 '

  } else {

    show_answer.value = dialogs[i].response

  } 

  }

  

  

  

  } 

ask_dialog_btn.addEventListener('click', myDialog)

 

 

 tips_btn.forEach(tip =>{

 tip.addEventListener('click',function(){

   input_dialog_field.value = this.value

 })

}) 

