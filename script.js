const btnMenuLateral = document.querySelector(".btn-menu-lateral");

const botoesMenuLateral = document.querySelectorAll(".btn-menu-lateral");

const menuLateral = document.querySelector(".menu-lateral");

const btnFecharMenuLateral = document.querySelector(".btn-fechar-menu-lateral");

const overlay = document.getElementById("overlay");

botoesMenuLateral.forEach(btnMenuLateral => {
    btnMenuLateral.addEventListener("click", () => {
        menuLateral.classList.add("mostrarmenu");
        overlay.classList.add("mostrar");
        document.body.classList.add("semscroll");
    })
})

btnFecharMenuLateral.addEventListener("click", () => {
    menuLateral.classList.remove("mostrarmenu");
    overlay.classList.remove("mostrar");
    document.body.classList.remove("semscroll");
});




const splideBlogs = new Splide('.splide-blogs', {
    autoWidth: true,
    gap: '24px',
    arrows: false,
    pagination: false,
    drag: true,
    snap: true,
});

splideBlogs.mount();


document.querySelector(".previous-btn").addEventListener("click", () => {
    splideBlogs.go("<");
});

document.querySelector(".next-button").addEventListener("click", () => {
    splideBlogs.go(">");
});




document.addEventListener("DOMContentLoaded", () => {

    const atrSplide = new Splide(".atr-container", {
        arrows: false,
        pagination: false,
        drag: true,
        autoWidth: true,
        gap: "25px",
        snap: true,
        speed: 600,
        breakpoints: {
            768: {
                gap: "14px",
            }
        }
    });

    atrSplide.mount();





        const eleicoesSplide = new Splide(".eleicoes-cards", {
            arrows: false,
            pagination: false,
            drag: true,
            autoWidth: true,
            gap: 0,
            snap: true,
            speed: 600,
        });

        eleicoesSplide.mount();






    const splideMaisLidas = new Splide('.mais-lidas-splide', {
        arrows: false,
        pagination: false,
        drag: true,
        autoWidth: true,
        gap: 0,
        breakpoints: {
            768: {
                gap: "14px"
            }
        }
    });

    splideMaisLidas.mount();

    document.querySelector('.previous-btn-lidas').onclick = () => {
        splideMaisLidas.go('<');
    };

    document.querySelector('.next-button-lidas').onclick = () => {
        splideMaisLidas.go('>');
    };






        const cineSplide = new Splide('.cineinsite-splide', {
            arrows: false,
            pagination: false,
            drag: true,
            autoWidth: true,
            gap: 0,
            speed: 600,
        });

        cineSplide.mount();

        document
            .querySelector('.previous-btn-cine')
            .addEventListener('click', () => {
                cineSplide.go('<');
            });

        document
            .querySelector('.next-button-cine')
            .addEventListener('click', () => {
                cineSplide.go('>');
            });






    const atrPlaySplide = new Splide(".atr-play-splide", {
        arrows: false,
        pagination: false,
        drag: true,
        autoWidth: true,
        speed: 600,
    });

    atrPlaySplide.mount();

    document.querySelector(".previous-btn-atrplay").addEventListener("click", () => {
        atrPlaySplide.go("<");
    });

    document.querySelector(".next-btn-atrplay").addEventListener("click", () => {
        atrPlaySplide.go(">");
    });






        const municipiosSplide = new Splide(".municipios-cards", {
            arrows: false,
            pagination: false,
            drag: true,
            autoWidth: true,
            gap: 0,
            snap: true,
            speed: 600,
        });

        municipiosSplide.mount();






    const fenagroSplide = new Splide(".fenagro", {
        type: "slide",
        perPage: 3,
        perMove: 3,
        autoWidth: true,
        gap: "25px",
        arrows: false,
        pagination: true,
        breakpoints: {
            768: {
                autoWidth: true,
                pagination: false,
                gap: 0,
            }
        }
    });

    fenagroSplide.mount();

    document.querySelector(".previous-btn-fenagro").addEventListener("click", () => {
        fenagroSplide.go("<");
    });

    document.querySelector(".next-button-fenagro").addEventListener("click", () => {
        fenagroSplide.go(">");
    });






        const splideStories = new Splide('.splide-stories', {
            arrows: false,
            perPage: 2,
            pagination: false,
            drag: true,
            gap: "18px",
            speed: 600,
            breakpoints: {
                768: {
                    autoWidth: true,
                    gap: 0,
                }
            }
        });

        splideStories.mount();

        document
            .querySelector('.previous-btn-stories')
            .addEventListener('click', () => {
                splideStories.go('<');
            });

        document
            .querySelector('.next-btn-stories')
            .addEventListener('click', () => {
                splideStories.go('>');
            });


});