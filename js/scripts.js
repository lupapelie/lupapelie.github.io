window.addEventListener('scroll', function() {
  const header = document.getElementById('header-logo');
  const logo = header.querySelector('img');
  const mainContent = document.getElementById('main-content');

  if(window.scrollY > 50){
    header.style.height = '80px';     // altura menor na rolagem
    logo.style.height = '80px';       // logo menor
    mainContent.style.paddingTop = '90px'; // ajuste do conteúdo
  } else {
    header.style.height = '150px';    // altura inicial do header menor
    logo.style.height = '200px';      // altura inicial da logo (pode ajustar aqui)
    mainContent.style.paddingTop = '160px'; // padding top igual à altura do header
  }
});
