document.addEventListener("DOMContentLoaded", () => {
    // Configurar a data mínima no campo de Expiry Date
    const expiryDateField = document.getElementById("expiry-date");
    const today = new Date().toISOString().split("T")[0];
    expiryDateField.min = today;
});

document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
  
    const form = event.target;
    let valid = true; // Flag para controle da validação
  
    // Função para exibir erros
    function showError(message) {
        alert(message);
        valid = false;
    }
  
    // Validação do primeiro nome
    const fname = form.fname.value.trim();
    if (!fname) showError("First Name is required");

    // Validação do sobrenome
    const lname = form.lname.value.trim();
    if (!lname) showError("Last Name is required");
  
    // Validação do e-mail
    const email = form.email;
    if (!email.checkValidity()) showError("Please enter a valid email address");
  
    // Validação do código postal
    const postalCode = form.postalcode.value.trim();
    if (!/^\d{4}-\d{3}$/.test(postalCode)) showError("Postal code must be in the format 1234-567");
  
    // Validação do país
    const country = form.country.value;
    if (!country) showError("Please select a country");
  
    // Validação do tipo de cartão de crédito
    const cardType = form.querySelector('input[name="card-type"]:checked');
    if (!cardType) showError("Please select a credit card type");
  
    // Validação do número do cartão
    const cardNumber = form.cardnumber.value.trim();
    if (!/^\d{13,19}$/.test(cardNumber)) showError("Card number must be between 13 to 19 digits");
  
    // Validação da data de expiração
    const expiryDate = form["expiry-date"].value;
    if (!expiryDate) {
        showError("Expiry Date is required");
    } else {
        const selectedDate = new Date(expiryDate);
        const currentDate = new Date();
        if (selectedDate < currentDate) showError("Expiry Date cannot be in the past");
    }
  
    // Validação do CVV
    const cvv = form.cvv.value.trim();
    if (!/^\d{3}$/.test(cvv)) showError("CVV must be a 3-digit number");
  
    // Validação dos termos e condições
    const terms = form.terms.checked;
    if (!terms) showError("You must agree to the terms and conditions");
  
    // Se tudo estiver válido, submeter o formulário
    if (valid) {
        alert("Form submitted successfully!");
        form.submit(); // Envia o formulário
    }
});
