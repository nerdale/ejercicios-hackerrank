function timeConvert(parametro){
    var parametro = prompt("Ingrese una hora (hora + minutos + segundos) ejemplo: 07:05:45PM");
    var horacompleta = parametro.split(":");
<<<<<<< HEAD
    var hora = parseInt(horacompleta[0]);
=======
    var hora = Number(horacompleta[0]);
>>>>>>> 1c73c757d431c195b283d0cdaaf7d015e3116dde
    var minutos = horacompleta[1];
    var segundos = horacompleta[2].substr(0,2);
    var ampm = horacompleta[2].substr(2);

<<<<<<< HEAD
    if(ampm.toUpperCase() === "AM"){
        if(hora === 12){
            hora = 0;
        }
    }else{
        if(hora !== 12){
            hora += 12;
        }
    }
    if(hora < 10){
        hora = "0" + hora;
=======
    if ( ampm === "AM"){
        if (hora === 12){
            hora = 0;
        }
    }else{
        if ( hora !== 12){
            hora += 12;
        }
    }
    if ( hora < 10){
        hora = "0 " + hora;
>>>>>>> 1c73c757d431c195b283d0cdaaf7d015e3116dde
    }
    document.write(hora + ":" + minutos + ":" + segundos);
}

<<<<<<< HEAD

/*
Funcion Hackerrank
=======
/*
Funcion Hackerrank 
>>>>>>> 1c73c757d431c195b283d0cdaaf7d015e3116dde

function main() {
    var time = readLine();
    var horacompleta = time.split(":");
    var hora = Number(horacompleta[0]);
    var minutos = horacompleta[1];
    var segundos = horacompleta[2].substr(0,2);
    var ampm = horacompleta[2].substr(2);

    if ( ampm === "AM"){
        if (hora === 12){
            hora = 0;
        }
    }else{
        if ( hora !== 12){
            hora += 12;
        }
    }
    if ( hora < 10){
        hora = "0 " + hora;
    }
    console.log(hora + ":" + minutos + ":" + segundos);
}
<<<<<<< HEAD

=======
>>>>>>> 1c73c757d431c195b283d0cdaaf7d015e3116dde
*/