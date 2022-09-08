
import { LightningElement } from 'lwc';

export default class ChildAshu extends LightningElement {

    handleSubtract(){
        this.dispatchEvent(new CustomEvent('subtract'));
    }

    handleAdd(){
        this.dispatchEvent(new CustomEvent('add'));
    }

    handleMultiply(event){
        const valueForMultiply = event.target.value;
        alert("valueForMultiply:" +valueForMultiply)

        this.dispatchEvent(new customElements('multiply' , {
            detail : valueForMultiply
        }))
    }
}