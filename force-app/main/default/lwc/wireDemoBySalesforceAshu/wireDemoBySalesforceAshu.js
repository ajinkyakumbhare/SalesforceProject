import { LightningElement, wire, track } from 'lwc';
import getAccount from '@salesforce/apex/wireDemoClassBySalesforceAshu.getAccount';

const columns = [
    { label : "Name" , field : "Name" },
    { label : "Player Record Id" , field : "ID"},
];
export default class WireDemoBySalesforceAshu extends LightningElement {

        @track columns = columns;
        @track data = [];

        @wire(getAccount)

        wireAccount({data, error}){
            if(data){
                this.data = data;
            }
            else if(error){
                console.log("error occured");
            }
        }
}