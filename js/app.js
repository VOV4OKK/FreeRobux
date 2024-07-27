let tg = window.Telegram.WebApp;

tg.expand();





let userName = document.getElementById("name");

userName.innerText = `${tg.initDataUnsafe.user.user_name}`