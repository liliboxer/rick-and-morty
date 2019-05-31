import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        return /*html*/`
            <li>
                <h2></h2>
                <img src="">
                <p>Status: </p>
                <p>Species: </p>
            </li>
        `;

    }
}

export default CharacterItem;
