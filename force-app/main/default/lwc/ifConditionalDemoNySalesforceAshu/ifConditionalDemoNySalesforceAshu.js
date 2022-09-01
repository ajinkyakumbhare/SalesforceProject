import { LightningElement,track } from 'lwc';

export default class IfConditionalDemoNySalesforceAshu extends LightningElement {
    
    @track onclickButtonLabel = 'Show';
    myTitle = "Salesforce Ashu";
    @track cardVisible = false;

    handleclick(event){
        const label = event.target.label;

        if( label === 'Show'){
            this.onclickButtonLabel = 'Hide';
            this.cardVisible = true; 
        }
        else if( label === 'Hide'){
            this.onclickButtonLabel = 'Show';
            this.cardVisible = false;
        }
    }

}