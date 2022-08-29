public class wireDemoClassBySalesforceAshu {
	@AuraEnabled(cacheable=true)
    
    Public static List<Account> getAccount (){
        List <Account> AccountDetails = [Select name, id from account];
        system.debug('Accounts Details..: '+AccountDetails);
        return AccountDetails;
    }
    
}