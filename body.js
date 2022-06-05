var body = document.getElementsByTagName("body");

function block() {
  const demoBody = `
  <center>
    <h1 style="font-size: 24px;
        font-weight: bold;
        color: red;">
      Время демо-версии сайта закончилось 😉. Чтобы восстановить работу <br /> сайта обращайтесь к <a href="https://t.me/iamdigitalist">https://t.me/iamdigitalist</a>
    </h1>
  </center>
  `;
  body[0].innerHTML = demoBody;
  // body[0].style.display = "none";
}

block();
