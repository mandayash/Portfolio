<script>
    // Pilih elemen input dan tombol
    const emailInput = document.getElementById('emailInput');
    const submitButton = document.getElementById('submitButton');


    function toggleSubmitButton() {
        if (emailInput.value.trim() !== '') {
            submitButton.disabled = false;
            submitButton.classList.remove('opacity-50', 'cursor-not-allowed');
            submitButton.classList.add('hover:bg-purple-600');
        } else {
            submitButton.disabled = true;
            submitButton.classList.add('opacity-50', 'cursor-not-allowed');
            submitButton.classList.remove('hover:bg-purple-600');
        }
    }

    // Event listener untuk input email
    emailInput.addEventListener('input', toggleSubmitButton);

    // Tambahkan transisi untuk efek yang lebih halus
    emailInput.addEventListener('focus', () => {
        emailInput.classList.add('transition', 'duration-300', 'ease-in-out', 'transform', 'scale-105');
    });
    
    emailInput.addEventListener('blur', () => {
        emailInput.classList.remove('transform', 'scale-105');
    });
</script>
