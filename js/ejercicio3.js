function timeConvert(parametro){
    var parametro = prompt("Ingrese una hora (hora + minutos + segundos) ejemplo: 07:05:45PM");
    var horacompleta = parametro.split(":");
    var hora = parseInt(horacompleta[0]);
    var minutos = horacompleta[1];
    var segundos = horacompleta[2].substr(0,2);
    var ampm = horacompleta[2].substr(2);

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
    }
    document.write(hora + ":" + minutos + ":" + segundos);
}

/*
Funcion Hackerrank

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

*/