window.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header-logo');
        const logo = header ? header.querySelector('img') : null;  // Verifica se o header existe
        const mainContent = document.getElementById('main-content');

        if(header && logo && mainContent) {  // Verifica se os elementos existem
            if(window.scrollY > 50) {
                header.style.height = '80px';     // altura menor na rolagem
                logo.style.height = '80px';       // logo menor
                mainContent.style.paddingTop = '90px'; // ajuste do conteúdo
            } else {
                header.style.height = '150px';    // altura inicial do header
                logo.style.height = '200px';      // altura inicial da logo
                mainContent.style.paddingTop = '160px'; // padding top igual à altura do header
            }
        }
    });
});
