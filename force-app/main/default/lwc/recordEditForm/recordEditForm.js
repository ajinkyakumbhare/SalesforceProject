import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUNT_Object from '@salesforce/schema/account';
import id from '@salesforce/schema/account.ID';
import Name from '@salesforce/schema/account.name';
import Industry from '@salesforce/schema/account.Industry';
import Phone from '@salesforce/schema/account.Phone';
import Rating from '@salesforce/schema/account.Rating';


export default class RecordEditForm extends LightningElement {

    AccountObjectApiName = ACCOUNT_Object;
    nameField = Name;
    IndustryField = Industry;
    PhoneField = Phone;
    RatingField = Rating;


    handleSuccess(event){

        const events = new ShowToastEvent({
            title : "Successful",
            message : "Players Created",
            variant : 'Success'
        });

        this.dispatchEvent(events);
    }
}