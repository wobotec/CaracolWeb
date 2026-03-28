function toggleMenu() {
    var sidebar = document.getElementById('my-sidebar');
    sidebar.classList.toggle('active');
}

document.querySelectorAll('.my-dropdown-item .my-dropbtn').forEach(button => {
    button.addEventListener('click', function () {
        const dropdownItem = this.parentElement.parentElement;
        dropdownItem.classList.toggle('active');

        // Seleciona o ícone de dropdown dentro do botão
        const dropdownIcon = this.querySelector('.my-dropdown-icon');

        // Aplica a rotação ao ícone
        dropdownIcon.classList.toggle('rotate-icon');
    });
});