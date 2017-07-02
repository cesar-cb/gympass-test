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

    loadJSON() {
        return axios.get("/assets/json/classes.json")
    }

    loadContent() {

        this.loadJSON()
            .then((json) => {

                var classes = json.data;

                var template = `
                    {{#classes}}
                        <div class="box-modality" data-type="{{type}}">
                            <h3 class="title">{{title}}</h3>
                            <p class="description">{{description}}</p>
                        </div>
                    {{/classes}}
                `;

                var html = Mustache.to_html(template, classes);

                $(this.selector).append(html);
                this.initCarousel();
            })
    }
}