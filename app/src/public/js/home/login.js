"use strict";

// const { login } = require("../../../routes/home/home.ctrl");

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    // .then((res) => console.log(res));
    // .then(console.log);
    .then((res) => {
        if (res.seccess == 'true') {
            // alert(res.seccess);
            // location.href = "/";
            location.href = "http://localhost:3000";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("에러발생"));
    });
    // console.log(req);
    // console.log(JSON.stringify(req));
}