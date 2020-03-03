//VARIABLES
// FUNCTIONS
  // PROFUKT1
function minusKnap1() {
    document.getElementById("kurvproduktantal1").value = Number(document.getElementById("kurvproduktantal1").value) - 1;
    document.getElementById("produktpris1").value = Number(document.getElementById("produktpris1").value) - 150;
    document.getElementById("totalpris").value = Number(document.getElementById("totalpris").value) - 150
    document.getElementById("totalvarer").value = Number(document.getElementById("totalvarer").value) - 1;
}
function plusKnap1() {
    document.getElementById("kurvproduktantal1").value = Number(document.getElementById("kurvproduktantal1").value) + 1;
    document.getElementById("produktpris1").value = Number(document.getElementById("produktpris1").value) + 150;
    document.getElementById("totalpris").value = Number(document.getElementById("totalpris").value) + 150;
    document.getElementById("totalvarer").value = Number(document.getElementById("totalvarer").value) + 1
}
  // PROFUKT2
function minusKnap2() {
    document.getElementById("kurvproduktantal2").value = Number(document.getElementById("kurvproduktantal2").value) - 1;
    document.getElementById("produktpris2").value = Number(document.getElementById("produktpris2").value) - 250 ;
    document.getElementById("totalpris").value = Number(document.getElementById("totalpris").value) - 250;
    document.getElementById("totalvarer").value = Number(document.getElementById("totalvarer").value) - 1
}
function plusKnap2() {
    document.getElementById("kurvproduktantal2").value = Number(document.getElementById("kurvproduktantal2").value) + 1;
    document.getElementById("produktpris2").value = Number(document.getElementById("produktpris2").value) + 250 ;
    document.getElementById("totalpris").value = Number(document.getElementById("totalpris").value) + 250;
    document.getElementById("totalvarer").value = Number(document.getElementById("totalvarer").value) + 1
}
  // PROFUKT3
function minusKnap3() {
    document.getElementById("kurvproduktantal3").value = Number(document.getElementById("kurvproduktantal3").value) - 1;
    document.getElementById("produktpris3").value = Number(document.getElementById("produktpris3").value) - 350 ;
    document.getElementById("totalpris").value = Number(document.getElementById("totalpris").value) - 350;
    document.getElementById("totalvarer").value = Number(document.getElementById("totalvarer").value) - 1
}
function plusKnap3() {
    document.getElementById("kurvproduktantal3").value = Number(document.getElementById("kurvproduktantal3").value) + 1;
    document.getElementById("produktpris3").value = Number(document.getElementById("produktpris3").value) + 350 ;
    document.getElementById("totalpris").value = Number(document.getElementById("totalpris").value) + 350;
    document.getElementById("totalvarer").value = Number(document.getElementById("totalvarer").value) + 1
}
  // TOTALPRIS
