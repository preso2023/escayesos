const usuarios = [
    { usuario: 'yuri', pass: "1234" },
    { usuario: 'luis', pass: "1234"},
];



function login() {
    var datos_login = getValores();
    console.log(datos_login.usuario);
    /* console.log(usuarios.find(element => element.usuario === datos_login.usuario));
    if (usuarios.find(element => element.usuario === datos_login.usuario) != undefined) {
        if (element.pass === datos_login.pass) {
            console.log("contraseña correcta");
        }
    } */
    usuarios.forEach(u => {
        if (u.usuario === datos_login.usuario && u.pass === datos_login.pass) {
            console.log("login correcto")
            limpiar();
            window.location.href = '../index.html';
        }
        else {
            console.log("error login");
        }
    });
}

function logout() {
    window.location.href = '../logout.html';
}

function getValores() {
    let user = document.getElementById("fusuario").value;
    let passwd = document.getElementById("fpassword").value;
    var datos_login = {};
    if (user == '' || passwd == '') {
        alert("Debe rellenar los campos usuario y contraseña");
        limpiar();
    } else {
        //console.log(user);
        datos_login = {
        usuario: user,
        pass: passwd
        };        
    }
    
    return datos_login;
}

function limpiar() {
    document.getElementById("fusuario").value = "";
    document.getElementById("fpassword").value = "";
}

function redirigirLogin() {
    window.location.href = './login.html';
}