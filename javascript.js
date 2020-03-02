//VARIABLES
// FUNCTIONS

function minusKnap1() {
    document.getElementById("kurvproduktantal1").value = Number(document.getElementById("kurvproduktantal1").value) - 1;
    document.getElementById("produktpris1").value = Number(document.getElementById("produktpris1").value) / 2;
}
function plusKnap1() {
    document.getElementById("kurvproduktantal1").value = Number(document.getElementById("kurvproduktantal1").value) + 1;
    document.getElementById("produktpris1").value = Number(document.getElementById("produktpris1").value) * 2;
}

function minusKnap2() {
    document.getElementById("kurvproduktantal2").value = Number(document.getElementById("kurvproduktantal2").value) - 1;
    document.getElementById("produktpris2").value = Number(document.getElementById("produktpris2").value) / 2 ;
}
function plusKnap2() {
    document.getElementById("kurvproduktantal2").value = Number(document.getElementById("kurvproduktantal2").value) + 1;
    document.getElementById("produktpris2").value = Number(document.getElementById("produktpris2").value) * 2 ;
}

function minusKnap3() {
    document.getElementById("kurvproduktantal3").value = Number(document.getElementById("kurvproduktantal3").value) - 1;
        document.getElementById("produktpris3").value = Number(document.getElementById("produktpris3").value) / 2 ;
}
function plusKnap3() {
    document.getElementById("kurvproduktantal3").value = Number(document.getElementById("kurvproduktantal3").value) + 1;
    document.getElementById("produktpris3").value = Number(document.getElementById("produktpris3").value) * 2 ;
}
