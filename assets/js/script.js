//! Project list

const TabProject = [
    {
        link : 'http://jgotomobile.000webhostapp.com/',
        img : 'assets/imgs/jgotomobile.png',
        alt : '',
        title : 'JGOTOMOBILE',
        desc : 'Un petit site vitrine de concessionnaire de voiture de luxe'

    },
    {
        link : 'https://github.com/Djigo02/chatbox/tree/main/ChatBox',
        img : 'assets/imgs/chatbox-discussion-1.png',
        alt : '',
        title : 'Chatbox',
        desc : 'Un chatbox developpé en php'

    },
    {
        link : 'assets/imgs/gestion-de-contact.png',
        img : 'assets/imgs/gestion-de-contact.png',
        alt : '',
        title : 'Gestion de contact',
        desc : 'Gestion de contact en python avec le framework Flask'

    },
    {
        link : 'https://github.com/Djigo02/SHIFOUMI',
        img : 'assets/imgs/shifoumi.png',
        alt : '',
        title : 'SHIFOUMI',
        desc : 'Un mini jeu pierre, papier, ciseaux developper en javascript'

    },
    {
        link : 'https://github.com/Djigo02/GESTION_DE_CHAMBRE_D-HOTEL/tree/main/BDD',
        img : 'assets/imgs/code-c.png',
        alt : '',
        title : 'GESTION DE CHAMBRE D\'HOTEL',
        desc : 'Une application de gestion et de reservation de chambre d\'hotel en Langage C'

    }
];

//! END Project

$(document).ready(function(){
//! smooth scroll navbar
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });

//!automation project
    const project = $("#project"); 
    project.html('');
    TabProject.forEach(element => {
        project.append(`
            <div class="col-md-4 mt-3">
                <a href="${element.link}" target="_blank" class="portfolio-card">
                    <img src="${element.img}" class="portfolio-card-img" alt="${element.alt}">    
                    <span class="portfolio-card-overlay">
                        <span class="portfolio-card-caption">
                            <h4>${element.title}</h4>
                            <p class="font-weight-normal">${element.desc}</p>
                        </span>                         
                    </span>                     
                </a>
            </div>
        `);
    });
//!end automation

//! smooth-scrool about
$(".about_s").on('click', function(event) {
    event.preventDefault();

    var destination = "#about"; 

    $('html, body').animate({
        scrollTop: $(destination).offset().top
    }, 700);
});

//! smooth-scrool portfolio
$(".portfolio_s").on('click', function(event) {
    event.preventDefault();

    var destination = "#portfolio"; 

    $('html, body').animate({
        scrollTop: $(destination).offset().top
    }, 700);
});

//! smooth-scrool contact
$(".contact_s").on('click', function(event) {
    event.preventDefault();

    var destination = "#contact"; 

    $('html, body').animate({
        scrollTop: $(destination).offset().top
    }, 700);
});

});

//! navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

//! presentation on the header
var presentation = document.getElementById('presentation');

var typewriter = new Typewriter(presentation, {
    loop: true,
    delay: 50
});

typewriter.typeString('<span class="up">Salut !</span>')
    .pauseFor(1500)
    .typeString('<span class="down">Je m\'appelle Mouhamad DJIGO</span>')
    .pauseFor(1500)
    .typeString('<span class="header-subtitle" style="color:#7d83af">Etudiant en génie logiciel</span>')
    .pauseFor(2500)
    .start();

//! end of presentation
