import { LightningElement } from 'lwc';

export default class ParentLWC extends LightningElement {

    countValue = 0;

    handleDecrement(){
        this.countValue--;
    }

    handleIncrement(){
        this.countValue++;
    }

}