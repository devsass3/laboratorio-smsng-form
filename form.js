//function to limit input type="checkbox" to check just 1 box at a time.
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('media')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    })
}


     /////////// BUTTONS ///////////
// onclick event to button- "Mostrar Valoración"
document.getElementById("starsResult").onclick = function(){showResult()};

    function showResult() {
        var result = document.getElementById("rating").value;
        alert("Has valorado con " + result + " puntos");
    }

// onclick event to button- "Mostrar Cuenta"
document.getElementById("showAccount").onclick = function(){bankAccount()};

    function bankAccount() { 
        var es = document.getElementById("es").value;
        var iban = document.getElementById("iban").value;
        var entity = document.getElementById("entity").value;
        var bank = document.getElementById("bank").value;
        var dc = document.getElementById("dc").value;
        var account = document.getElementById("account").value;
        alert("Le informamos que su cuenta bancaria es: " + es + iban + "-" + entity + "-" + bank + "-" + dc + "-" + account);
    }

// onclick event to button- "Mostrar Día Semana"
    document.getElementById("showCurrentDay").onclick = function(){showDay()};

    function showDay() { 
        var dateSelected = document.getElementById('dateSelected').value;
        var currentDate = new Date(dateSelected); 
        var day = new Array(7); 
            day[0] = "domingo"; 
            day[1] = "lunes"; 
            day[2] = "martes"; 
            day[3] = "miércoles"; 
            day[4] = "jueves"; 
            day[5] = "viernes"; 
            day[6] = "sábado"; 
        var weekdayName = day[currentDate.getDay()]; 
        alert("La fecha seleccionada en el elemento de fecha es un " + weekdayName);
    }