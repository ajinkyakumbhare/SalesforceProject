import { LightningElement, track } from 'lwc';
import getAccountList from '@salesforce/apex/ImperativeDemoClassBySalesforceNoob.getAccountList';

const columns = [
    { label : 'Account Record ID' , fieldName : 'id' },
    { label : 'Account Name ' , fieldName : 'Name' },
];

export default class ImperativeDemomySalesforceAshu extends LightningElement {
    @track columns = columns;
    @track data=[];

    connectedCallback(){
        getAccountList()
            .then(result => {
                this.data = result;
            })
            .catch(error =>{
                console.log("error occured");
            })

    }

}