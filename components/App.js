import Component from './Component.js';
import Header from './Header.js';
import CharacterList from './CharacterList.js';
import Loading from './Loading.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const main = dom.querySelector('main');
        
        const header = new Header();
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);

        const loading = new Loading({ loading: false });
        main.appendChild(loading.render());

        const characterList = new CharacterList();
        main.appendChild(characterList.render());

        
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;

    }
}

export default App;