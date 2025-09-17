// Felder für Abholadresse nur anzeigen, wenn "Abholung" gewählt ist
document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll("input[name='uebergabeart']");
    const abholadresse = document.getElementById("abholadresse");

    function toggleAdresse() {
        const selected = document.querySelector("input[name='uebergabeart']:checked").value;
        abholadresse.style.display = (selected === "abholung") ? "block" : "none";
    }

    radioButtons.forEach(radio => {
        radio.addEventListener("change", toggleAdresse);
    });

    toggleAdresse(); // Initialzustand setzen
});
