console.log("my portfolio");

$(document).ready(() => {

    // scroll reveal 
    const sr = ScrollReveal({
        origin: "bottom",
        distance: '200px',
        duration: 900,
        reset: true
    });

    sr.reveal('.my-intro', { delay: 100 });
    sr.reveal('.svg', { delay: 200 })
    sr.reveal('#about-me-text', { delay: 100 })
    sr.reveal('#my-image', { delay: 200 })
    sr.reveal('.svg', { delay: 100 })
    sr.reveal('#work-bg-h6', { delay: 90 })
    sr.reveal('#work-div', { delay: 150 })
    sr.reveal('.right-box', { delay: 50 })
    sr.reveal('.skills-text', { delay: 100 })


    // ===== NAVBAR =====

    // navbar ul 
    $('#burger').on('click', () => {
        $("#nav-ul").slideToggle()
    });

    // BURGER 
    $('#burger').on('click',()=>{
        $(".line-1").toggleClass('rtt-line-1');
        $(".line-3").toggle()
        $(".line-2").toggleClass('rtt-line-2');
    });
   
    // CONTACT SCREEN 
    $('.msg').hide()
    
    function scrollTop(){
        let element = document.getElementById('chat');
        element.scrollTop = element.scrollHeight;
    }
    
    $("#email").on('click',(e)=>{
        e.preventDefault()
        $("#contact-box").toggle(300);
        setTimeout(() => {
            $('.1').show()
        }, 300);
        
        setTimeout(() => {
            $('.2').show()
        }, 800);
        
        setTimeout(() => {
            $('.3').show()
            $('.4').show()
        }, 1100);
    });
    
    $('.3').on('click',()=>{
        $('.3').hide();
        $('.4').hide();
        $('.5').show();
        
        setTimeout(() => {
            $('.6').show()
        }, 500);

        setTimeout(() => {
            $('.7').show()
        }, 900);
        
        setTimeout(() => {
            $('.8').show()
        }, 1400);
        
        setTimeout(() => {
            $('.9').show()
        }, 1800);
        
        setTimeout(() => {
            $('.10').show()
            scrollTop()
        }, 2000);  
    });
    
    $('.10').on('click',()=>{
        $('.10').hide();
        $('.11').show();
        scrollTop()
        
        setTimeout(() => {
            $('.12').show()
            scrollTop()
        }, 500);
        
        setTimeout(() => {
            $('.13').show()
            scrollTop()
        }, 700);
        
        setTimeout(() => {
            $('.14').show()
            scrollTop()
        }, 700);
    });
    
    $('.4').on('click',()=>{
        $('.3').hide();
        $('.4').hide();
        $('.11').show();
        scrollTop()
        
        setTimeout(() => {
            $('.12').show();
            scrollTop()
        }, 300);
        
        setTimeout(() => {
            $('.13').show();
            scrollTop()
        }, 700);
        
        setTimeout(() => {
            $('.14').show()
            scrollTop()
        }, 1000);
    })


    
    $('#dismiss-btn').on('click',()=>{
        $("#contact-box").hide(300)
    });


    //  code for phone nav-ul 
    function mediaUl(x) {
        if (x.matches) {
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    $('#nav-ul').slideUp(100)

                        $(".line-1").toggleClass('rtt-line-1');
                        $(".line-3").toggle()
                        $(".line-2").toggleClass('rtt-line-2');
                });
            });
        }
    };
    const x = window.matchMedia("(max-width:925px)");
    mediaUl(x)
    x.addListener(mediaUl);


    function hoverEffect(btn, card1, card2) {
        btn.addEventListener('mouseover', () => {
            card1.style.animation = "mouseover 1s forwards ease"
            card2.style.animation = "mouseleave 1s forwards ease"

        });
        btn.addEventListener('mouseleave', () => {
            card1.style.animation = "mouseleave 0.5s forwards ease"
            card2.style.animation = "mouseover 0.5s forwards ease"

        });
    };
    // work -1 
    let rcpCard1 = document.getElementById("rcp-crd-1")
    let rcpCard2 = document.getElementById("rcp-crd-2")
    let visitBtn1 = document.getElementById('visit-btn-1')
    hoverEffect(visitBtn1, rcpCard1, rcpCard2);

    // work -2 
    let trvlCard1 = document.getElementById("trvl-crd-1")
    let trvlCard2 = document.getElementById("trvl-crd-2")
    let visitBtn2 = document.getElementById('visit-btn-2')
    hoverEffect(visitBtn2, trvlCard1, trvlCard2);




}); //document ready 