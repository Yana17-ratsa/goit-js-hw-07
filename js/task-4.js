const form = document.querySelector("form.login-form");

form.addEventListener("submit", (e) => { e.preventDefault();

const input = e.target.elements;

if (!input.email.value || !input.password.value) {
    alert ('All form fields must be filled in');
} else {
    const Obj = {
        email: input.email.value,
        password: input.password.value,
}
form.reset();
console.log(Obj);
}})


