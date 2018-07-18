import { LitElement, html } from "@polymer/lit-element";

class HakkeApp extends LitElement{

    static get is() {
        return 'hakke-app'
    }

    /**
      * Instance of the element is created/upgraded. Useful for initializing
      * state, set up event listeners, create shadow dom.
      * @constructor
      */
    constructor() {
        super();
    
        
    
    }

    /**
      * Object describing property-related metadata used by Polymer features
      */
    static get properties() {
        return {
            
        };
    }

    _render(){
        return html`
            <h2>Lazy Load Demo</h2>
            <button onclick="${() => this.LoadLodash()}">Load Loadsh</button>
        `;
    }

    LoadLodash() {
        import('lodash').then( (mod) => {
            console.log(mod.trim('    loading lodash     '))
        })
    }
}

window.customElements.define(HakkeApp.is, HakkeApp);
