let user = new Object();

document.getElementById('registration').onclick = function () {
    user.name = document.getElementById('username').value;
    user.email = document.getElementById('email').value;
    user.phonenumber = document.getElementById('phone').value;
    user.password = document.getElementById('password').value;

    let hxr = new XMLHttpRequest();
    hxr.open('POST', 'https://localhost:7263/api/user');
    hxr.setRequestHeader('Content-Type', 'application/json');
    hxr.send(JSON.stringify(user));
    hxr.onload=()=>console.log(hxr.response);
};























// //#region api
// async function login(nickname, pass) {
//     const response = await fetch(`https://localhost:7156/WeatherForecast`, {
//         method: 'GET'
//     })
//     return await response.json();
// }
// //#endregion api

// //#region event
// document.querySelector('button').addEventListener('click', async () => {

//     await loginEvent();
// });
// //#endregion event

// //#region eventlogic
// async function loginEvent() {

//     const json = await login('', '');
//     const weather = document.querySelector(".weather");
//     for (let item of json) {
//         let div = document.createElement("div");
//         div.textContent = JSON.stringify(item);
//         weather.appendChild(div);
//     }
// }
// //#endregion eventlogic

