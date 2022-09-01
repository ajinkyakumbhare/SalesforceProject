import { LightningElement, track, wire, api } from 'lwc';

const columns= [
    { label : 'Name', fieldName : 'Name'},
    { label : 'Phone' , fieldName : 'phone'}
];


export default class DataTableWithRows extends LightningElement {
    @track showContacts = 'Show contacts';
    @track isVisible = false;
    columns = columns;

    handleclick(event){
        const label = event.target.label;

        if(label === 'Show contact'){
            this.showContacts = 'Hide contacts';
            this.isVisible = true;
        }
        else if(label === 'Hide contacts'){
            this.showContacts = 'Show Contacts';
            this.isVisible = false;

        }
    }
}