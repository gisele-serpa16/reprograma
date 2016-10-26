var tempo = prompt("que horas são?");
if((tempo == 0)||(tempo <=19)){
    alert("dia");
}else if ((tempo == 20)||(tempo <= 23)){
    alert("noite");
}
else{
    alert("horário incorreto");
}

