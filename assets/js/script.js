document.addEventListener('DOMContentLoaded', function() {
    var toggleElencoIcon = document.getElementById('toggleElencoIcon');
    var elencoList = document.getElementById('elencoList');

    if (toggleElencoIcon && elencoList) {
        toggleElencoIcon.addEventListener('click', function(event) {
            event.preventDefault(); // Previne qualquer ação padrão

            // Alterna as classes para mostrar ou ocultar a lista
            elencoList.classList.toggle('expanded');
            elencoList.classList.toggle('collapse');

            // Alterna a rotação do ícone
            toggleElencoIcon.classList.toggle('expanded');
        });
    }
});