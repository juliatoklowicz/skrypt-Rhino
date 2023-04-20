//Do edycji przeznaczone są poniższe dwie zmienne - invoice, booking
//oraz zmienna formula
var invoice = {
    //tutaj można dodawać po przecinku, TYLKO PROPY DLA INVOICE
    //np jeśli chcemy mieć dostęp do zmiennej invoice.pkolivc_document_deduction
    //to nalezy tutaj dodać pkolivc_document_deduction oraz jej wartość po dwukropku
    pkolivc_document_deduction: 500
};
var booking = {
    //tutaj można dodawać po przecinku, TYLKO PROPY DLA BOOKING
    //np jeśli chcemy mieć dostęp do zmiennej booking.pkolivc_brutto_figure
    //to nalezy tutaj dodać pkolivc_brutto_figure oraz jej wartość po dwukropku
    pkolivc_brutto_figure: 1220,
    pkolivc_netto_figure: 1000,
    pkolivc_vat_rate: 220
};

var netto, brutto, vat, formula;

function assignFormula() {
    //tutaj wkleić swoją formułę, np
    //var formula = 0.74*netto+0.74*vat+invoice.pkolivc_document_deduction;
    //zwrócić uwagę na wielkość liter, ważne aby zamiast przecinków były kropki
    //oraz żeby formuła była zakończona średnikiem
    formula = 0.74 * netto + 0.74 * vat + invoice.pkolivc_document_deduction;
}

function assignVariables() {
    netto = booking.pkolivc_netto_figure;
    brutto = booking.pkolivc_brutto_figure;
    vat = booking.pkolivc_vat_rate;
}

function checkFormula() {
    return formula;
}

try {
    assignVariables();
    assignFormula();
    checkFormula();
    console.log("Poprawna formuła. Wynik: ");
    console.log(checkFormula());
} catch (error) {
    console.log("Błędna formuła");
}