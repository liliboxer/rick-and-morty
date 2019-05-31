import Component from './Component.js';

class Paging extends Component {
    renderTemplate() {
        return /*html*/`
            <section class="paging">
                <button class="prev"><<</button>
                <span>Page X of Y</span>
                <button class="next">>></button>
            </section>
        `;

    }
}

export default Paging;