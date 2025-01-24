let arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        '<email':"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

//adding more objects for test
arr.push(
    {
        userName: "Trusted",
        lastName: "TrustedEmail",
        email: "trusted_email@gmail.com"
    },
    {
        userName: "unTrusted",
        lastName: "unTrustedEmail",
        email: "untrusted_email@test.com"
    }
);

let arrStr = JSON.stringify(arr).replace(/[<>]/g, '');

let re = /\b[\w\.]+@(gmail|yahoo)\.com\b/g;

let trustedEmails = arrStr.match(re);

console.log("Trusted emails: " + trustedEmails);