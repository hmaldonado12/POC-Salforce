public with sharing class TodoController {
    @AuraEnabled(cacheable=true)
    public static String getHelloWorld() {
        return 'Hello World';
    }
}