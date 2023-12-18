document.addEventListener("DOMContentLoaded", function () {
   
    var contactLink = document.getElementById("contactLink");
    var emailLink = document.getElementById("emailLink");

    contactLink.addEventListener("click", function () {
        showAlert("Vous avez cliqué sur le lien Contact.");
    });

    emailLink.addEventListener("click", function () {
        showAlert("Vous avez cliqué sur l'adresse e-mail.");
    });

    function showAlert(message) {
        alert(message);
    }
});
