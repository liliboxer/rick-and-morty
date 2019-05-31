import Component from './Component.js';

class CharacterList extends Component {

    renderTemplate() {
        return /*html*/`
            <ul class="list">
                <li>
                    <h2>Rick</h2>
                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg">
                    <p>Status: Alive</p>
                    <p>Species: Human</p>
                </li>
                <li>
                    <h2>Morty</h2>
                    <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg">
                    <p>Status: Alive</p>
                    <p>Species: Human</p>
                </li>
                <li>
                    <h2>Summer Smith</h2>
                    <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg">
                    <p>Status: Alive</p>
                    <p>Species: Human</p>
                </li>
                <li>
                    <h2>Beth Smith</h2>
                    <img src="https://rickandmortyapi.com/api/character/avatar/4.jpeg">
                    <p>Status: Alive</p>
                    <p>Species: Human</p>
                </li>
                <li>
                    <h2>Kerry Smith</h2>
                    <img src="https://rickandmortyapi.com/api/character/avatar/5.jpeg">
                    <p>Status: Alive</p>
                    <p>Species: Human</p>
                </li>
            </ul>
        `;
    }
}

export default CharacterList;