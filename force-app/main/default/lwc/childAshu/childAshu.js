
import { LightningElement } from 'lwc';

export default class ChildAshu extends LightningElement {

    handleSubtract(){
        this.dispatchEvent(new CustomEvent('subtract'));
    }

    handleAdd(){
        this.dispatchEvent(new CustomEvent('add'));
    }
}