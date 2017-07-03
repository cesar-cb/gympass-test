export default class ModalityCarousel {

    constructor() {
        this.selector = '#modality-carousel';

    }

    init() {

        this.loadJSON()
            .then((json) => {

                var classes = json.data;

                var template = `
                    {{#classes}}
                        <article class="box-modality" data-type="{{type}}">
                            <h3 class="title">{{title}}</h3>
                            <p class="description">{{description}}</p>
                        </article>
                    {{/classes}}
                `;

                var html = Mustache.to_html(template, classes);

                $(this.selector).append(html);

                this.initCarousel();

            })
    }

    initCarousel() {
        $(this.selector).on('init', (event, slick, currentSlide, nextSlide) => {
            this.toggleTypes()
         });

        $(this.selector).slick({
            slidesToShow:  4,
            slidesToScroll: 2,
            infinite: false,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow:  2,
                        slidesToScroll: 2,
                        infinite: false,
                        arrows: false,
                        dots: true, 
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow:  1,
                        slidesToScroll: 1,
                        infinite: false,
                        arrows: false,
                        dots: true, 
                    },
                }
            ]
        })
    
    }

    loadJSON() {
        return axios.get("/assets/json/classes.json")
    }

    toggleTypes() {

        let self = this;

        $('.js-choose-type').on('change', function() {

            $('.js-choose-type').not(this).prop('checked', false); 

            var type = $(this).attr('id');

            var box = $('.box-modality');

            box.css('display', 'block');


            if ($(this).is(":checked")) {
                $(self.selector).slick('slickUnfilter');
                $(self.selector).slick('slickFilter', '.box-modality[data-type="'+ type +'"]');
            } else {
                $(self.selector).slick('slickUnfilter');
            }

        })
    }
}