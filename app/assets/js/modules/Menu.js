export default class Menu {
    constructor() {
        this.toggleSelector = '.js-toggle-menu';
        this.menu = '.js-header-menu'

        this.init()
    }

    init() {
        let self = this;

        $(this.toggleSelector).on('click', function() {
            $(self.menu).toggleClass('-open')
        });
    }
}