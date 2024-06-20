$(document).ready(function() {
    const aladdin = $('.aladdin')
    const mal = $('.mal')

    const jump = () => {
        aladdin.addClass('jump')

        setTimeout(() => {
            aladdin.removeClass('jump')
        }, 500)
    }

    const loop = setInterval(() => {
        const malPosit = mal.offset().left;
        const aladdinPosit = parseInt(aladdin.css('bottom').replace('px', ''));

        if (malPosit <= 125 && malPosit > 0 && aladdinPosit < 85) {
            mal.css('animation', 'none')
            mal.css('left', `${malPosit}px`)
            aladdin.css('animation', 'none')
            aladdin.css('bottom', `${ aladdinPosit}px`)
            aladdin.attr('src', 'imagens/erro.webp')
            aladdin.css('width', '75px')
            aladdin.css('marginLeft', '50px')
            clearInterval(loop)
        }
    }, 10);

    $(document).keydown(jump)
});
