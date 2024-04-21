
$(document).ready(function() {
    
    //animação
    (function($) {
      $.fn.writeText = function(content) {
          var contentArray = content.split(""),
              current = 0,
              elem = this;
          setInterval(function() {
              if(current < contentArray.length) {
                  elem.text(elem.text() + contentArray[current++]);
              }
          }, 80);
          elem.css('white-space', 'nowrap'); // Adicionando esta linha para evitar a quebra de linha
      };
      
    })(jQuery);
  
    // texto para o estilo "máquina de escrever"
    $("#holder").writeText("Troca aqui os teus tokens por prémios!");
    
  
    new WOW().init();
      
    // deslizar o body para cima e para baixo em 285px
    //para baixo
    var main = function() {
      $('.fa-bars').click(function() {
        $('.nav-screen').animate({
          right: "0px"
        }, 200);
  
        $('body').animate({
          right: "285px"
        }, 200);
      });
  
      // para cima
      $('.fa-times').click(function() {
        $('.nav-screen').animate({
          right: "-285px"
        }, 200);
  
        $('body').animate({
          right: "0px"
        }, 200);
      });
  
      $('.nav-links a').click(function() {
        $('.nav-screen').animate({
          right: "-285px"
        }, 500);
  
        $('body').animate({
          right: "0px"
        }, 500);
      });
    };
  
    $(document).ready(main);
    
    // scroll da pagina inicial
  
    $('#fullpage').fullpage({
      scrollBar: true,
      responsiveWidth: 400,
      navigation: true,
      navigationTooltips: ['INÍCIO', 'MAPA', 'CONTACTOS'],
      menu: '#myMenu',
      fitToSection: false,
  
      afterLoad: function ( anchorLink, index){
        var loadedSection = $(this);
  
  
        if(index==1){
          //dar efeito à seta
          $('.fa-chevron-down').each(function(){
            $(this).css('opacity','1')
          });
          $('.header-links a').each(function(){
            $(this).css('color','white')
          });
        }
  
        else if(index!=1){
          $('.header-links a').each(function(){
            $(this).css('color','black')
          });
        }  
      }
    });
    
  
    $(document).on('click', '#moveDown', function() {
      $.fn.fullpage.moveSectionDown();
    });
  
    $(document).on('click', '#skills', function() {
      $.fn.fullpage.moveTo('quemsomos'); // Assuming 'sobrenos' is the anchor of the section
    });
  
    $(document).on('click', '#sobrenos', function() {
      $.fn.fullpage.moveTo('sobrenos');
    });
  
    $(document).on('click', '#contact', function() {
      $.fn.fullpage.moveTo('contactos'); // Assuming 'contactos' is the anchor of the section
    });
  
  
    // deslizamento da pagina
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 700);
            return false;
          }
        }
      });
    });
  });

  document.getElementById('mainButton').addEventListener('click', function() {
    var subButtons = document.getElementById('subButtons');
    subButtons.classList.add('visible');
  
    var buttons = subButtons.querySelectorAll('.sub-button');
    buttons.forEach(function(btn) {
      btn.classList.add('visible');
    });
  
    this.style.display = 'none';
  });
  
  
    // Function to update the published time
  function updatePublishedTime() {
    const publishedDate = new Date('2023-12-30'); // Replace this with your actual published date
    const currentDate = new Date();
    const timeDiff = currentDate - publishedDate;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    let timeAgo = '';
    if (days > 0) {
      timeAgo = `Published ${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      timeAgo = `Published ${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      timeAgo = `Published ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }

    document.getElementById('published-time').textContent = timeAgo;
  }

  // Update published time immediately and refresh every minute
  updatePublishedTime();
  setInterval(updatePublishedTime, 60000); // Update every minute

  document.addEventListener("DOMContentLoaded", function() {
    var fox = document.getElementById("fox");
  
    // Function to show the fox
    function showFox() {
      fox.classList.add("show");
    }
  
    // Call the showFox function after a delay (e.g., 2 seconds)
    setTimeout(showFox, 2000);
  });
  
// Adicione este código ao final do seu script.js ou dentro do bloco <script> no final do seu HTML

$(document).ready(function() {
  // Adiciona um evento de escuta para a tecla Enter na barra de pesquisa
  $('#search-bar').keypress(function(event){
    if(event.keyCode == 13){ // 13 é o código da tecla Enter
      // Captura o texto digitado na barra de pesquisa
      var searchText = $(this).val();
      // Aqui você pode implementar a lógica para realizar a pesquisa com o texto capturado
      // Por exemplo, redirecionar para uma página de resultados de pesquisa
      window.location.href = "resultados_pesquisa.html?query=" + searchText;
    }
  });
});