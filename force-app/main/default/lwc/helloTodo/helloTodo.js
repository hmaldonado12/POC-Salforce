import { LightningElement } from 'lwc';

export default class HelloTodo extends LightningElement {
    greeting = 'Hello World';

    get greetingMessage() {
        return this.greeting;
    }
}