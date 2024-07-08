"use strict"

const users = {
    id : ["woorimIT", "개발", "팀장"],
    psword : ["1", "2", "3"],
};


const output = {

    home : (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login : (req, res) => {
        // console.log(req.body);
        const id = req.body.id,
          psword = req.body.psword;

        console.log(id, psword);
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword){
                return res.json({
                    success : true,
                    msg : "로그인 성공!!",
                });
            }
                
        }
        return res.json({
            seccess : false,
            msg : "로그인 실패!!",
        });
    },
};

module.exports = {
    output,
    process,
}