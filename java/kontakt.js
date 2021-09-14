function required() {
    var ime = document.forms["formular"]["imeVrednost"].value;
    var utisak = document.forms["formular"]["opisText"].value;
    var email = document.forms["formular"]["email"].value;

    if (ime == "") {
        alert("Molim Vas unesite Vase ime");
        return false;
    }
    else if (utisak == "") {
        alert("Molim Vas da unesete Vase misljenje");
        return false;
    }
    else if (email == "") {
        alert("Molim Vas da unesete Vas email");
        return false;
    }
    else {
        alert('Drago nam je da ste nas ocenili sa 10!!!');
        return true;
    }
}