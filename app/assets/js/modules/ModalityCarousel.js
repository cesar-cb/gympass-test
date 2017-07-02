export default class ModalityCarousel {
    constructor() {
        this.selector = '#modality-carousel';
    }

    initCarousel() {
        console.log('init')
        $(this.selector).slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 3
        })
    }
}