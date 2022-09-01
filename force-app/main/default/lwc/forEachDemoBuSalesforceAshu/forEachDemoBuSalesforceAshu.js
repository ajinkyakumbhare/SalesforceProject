import { LightningElement, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/foreachDemoclas.getAccountList';

export default class ForEachDemoBuSalesforceAshu extends LightningElement {
    @track data = [];
    @wire(getAccountList)
    players;

}