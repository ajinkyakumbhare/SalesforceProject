import { LightningElement } from 'lwc';
import Contact_object from '@salesforce/schema/Contact';

export default class RecordFormDemo extends LightningElement {
    objectApiName = Contact_object;
}