document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const description = button.nextElementSibling;

        
        if (description.style.display === 'none' || description.style.display === '') {
            description.style.display = 'block';
            button.textContent = 'Hide Description';
        } else {
            description.style.display = 'none';
            button.textContent = 'Show Description';
        }
    });
});
