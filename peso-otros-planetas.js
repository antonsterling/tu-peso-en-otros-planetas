
function calcularPeso(planeta) {

    let pesoIngresado = document.getElementById("input-peso");
    let peso = pesoIngresado.value;

    const g_mercurio = 3.7;
    const g_venus = 8.87;
    const g_tierra = 9.8;
    const g_marte = 3.71;
    const g_jupiter = 24.8;
    const g_saturno = 10.44;
    const g_urano = 8.87;
    const g_neptuno = 11.15;
    const g_sol = 274;

    var pesofinalID = document.getElementById("peso-final");
    let peso_final;


    switch (planeta) {
        case 'mercurio':
            peso_final = peso * g_mercurio / g_tierra;
            peso_final = peso_final.toFixed(2);
            pesofinalID.innerHTML = ("Tu peso en " + planeta + " es de: " + peso_final + " Kg-f");
            break;

        case 'venus':
            peso_final = peso * g_venus / g_tierra;
            peso_final = peso_final.toFixed(2);
            pesofinalID.innerHTML = ("Tu peso en " + planeta + " es de: " + peso_final + " Kg-f");
            break;

        case 'tierra':
            peso_final = peso;
            pesofinalID.innerHTML = ("Tu peso en " + planeta + " es de: " + peso_final + " Kg-f");
            break;

        case 'marte':
            peso_final = peso * g_marte / g_tierra;
            peso_final = peso_final.toFixed(2);
            pesofinalID.innerHTML = ("Tu peso en " + planeta + " es de: " + peso_final + " Kg-f");
            break;

        case 'jupiter':
            peso_final = peso * g_jupiter / g_tierra;
            peso_final = peso_final.toFixed(2);
            pesofinalID.innerHTML = ("Tu peso en " + planeta + " es de: " + peso_final + " Kg-f");
            break;

        case 'saturno':
            peso_final = peso * g_saturno / g_tierra;
            peso_final = peso_final.toFixed(2);
            pesofinalID.innerHTML = ("Tu peso en " + planeta + " es de: " + peso_final + " Kg-f");
            break;

        case 'urano':
            peso_final = peso * g_urano / g_tierra;
            peso_final = peso_final.toFixed(2);
            pesofinalID.innerHTML = ("Tu peso en " + planeta + " es de: " + peso_final + " Kg-f");
            break;

        case 'neptuno':
            peso_final = peso * g_neptuno / g_tierra;
            peso_final = peso_final.toFixed(2);
            pesofinalID.innerHTML = ("Tu peso en " + planeta + " es de: " + peso_final + " Kg-f");
            break;
        case 'sol':
            peso_final = peso * g_sol / g_tierra;
            peso_final = peso_final.toFixed(2);
            pesofinalID.innerHTML = ("Tu peso en " + planeta + " es de: " + peso_final + " Kg-f");
    }
}
