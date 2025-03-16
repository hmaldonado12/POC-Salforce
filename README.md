# My Salesforce Project

This project is a simple Salesforce application that includes a custom object called `Todo__c`, a Lightning Web Component (LWC) named `HelloTodo`, and an Apex class with a static method that returns "Hello World".

## Project Structure

- **force-app**: Contains the main application code.
  - **classes**: Contains Apex classes.
    - `TodoController.cls`: Apex class for handling Todo operations.
  - **lwc**: Contains Lightning Web Components.
    - **helloTodo**: The HelloTodo component.
      - `helloTodo.html`: HTML template for the HelloTodo component.
      - `helloTodo.js`: JavaScript controller for the HelloTodo component.
      - `helloTodo.js-meta.xml`: Metadata configuration for the HelloTodo component.
  - **objects**: Contains custom objects.
    - `Todo__c`: Custom object for managing Todo items.
      - `Todo__c.object-meta.xml`: Metadata configuration for the Todo__c object.
      - **fields**: Contains fields for the Todo__c object.
        - `Description__c.field-meta.xml`: Metadata for the Description field.
        - `Status__c.field-meta.xml`: Metadata for the Status field.
- **config**: Contains configuration files.
  - `project-scratch-def.json`: Scratch org definition file.
- `package.json`: Project dependencies and scripts.
- `sfdx-project.json`: Salesforce DX project configuration.
- `README.md`: Project documentation.