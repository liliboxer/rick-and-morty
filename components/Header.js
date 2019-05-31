import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/`
            <header>
                <h1>
                    <img class="logo" src="../assets/header.png">
                </h1>
            </header>
        `;

    }
}

export default Header;