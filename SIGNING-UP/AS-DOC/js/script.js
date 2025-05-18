document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('nameInput');
    const errorMessage = document.getElementById('error-message');

    function isName(inputString) {
        const regex = /^[A-Za-z\s]+$/;
        return regex.test(inputString);
    }

    nameInput.addEventListener('input', function () {
        if (!isName(nameInput.value)) {
            errorMessage.style.display = 'inline';
            nameInput.setCustomValidity('Invalid');
        } else {
            errorMessage.style.display = 'none';
            nameInput.setCustomValidity('');
        }
    });

    form.addEventListener('submit', function (event) {
        if (!isName(nameInput.value)) {
            errorMessage.style.display = 'inline';
            nameInput.setCustomValidity('Invalid');
            event.preventDefault();
        } else {
            errorMessage.style.display = 'none';
            nameInput.setCustomValidity('');
        }
    });
});

// //////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const phoneInput = document.getElementById('phoneInput');
    const errorMessage = document.getElementById('error-message2');

    function isValidPhoneNumber(phoneNumber) {
        const regex = /^(010|011|012|015)\d{8}$/;
        return regex.test(phoneNumber);
    }

    phoneInput.addEventListener('input', function() {
        if (!isValidPhoneNumber(phoneInput.value)) {
            errorMessage.style.display = 'inline';
            phoneInput.setCustomValidity('Invalid');
        } else {
            errorMessage.style.display = 'none';
            phoneInput.setCustomValidity('');
        }
    });

    form.addEventListener('submit', function(event) {
        if (!isValidPhoneNumber(phoneInput.value)) {
            errorMessage.style.display = 'inline';
            phoneInput.setCustomValidity('Invalid');
            event.preventDefault(); // لمنع تقديم النموذج إذا كان الإدخال غير صالح
        } else {
            errorMessage.style.display = 'none';
            phoneInput.setCustomValidity('');
        }
    });
});