
const form = document.getElementById("reservationForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const guests = Number(document.getElementById("guests").value);

    if (name === "" || email === "" || date === "") {
        alert("Please fill all the fields.");
        return;
    }

    if (guests < 1 || guests > 20) {
        alert("Guests must be between 1 and 20.");
        return;
    }

    alert("Thank you " + name + "! Your reservation request is received.");

    form.reset();

});
