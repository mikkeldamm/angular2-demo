import {Component, NgFor} from 'angular2/angular2';

@Component({
    selector: 'app',
    template: `
        <h1>Mikkel Damm Angular App Demo2</h1>
        <ul>
            <li *ng-for="#person of persons" (click)="removePerson(person)">
                {{person}}
            </li>
        </ul>
    `, 
    directives: [NgFor]
})

export class App { 
    
    persons: string[];
    
    constructor() {
        
        this.persons = ["mikkel", "anders", "andreas", "martin"];
    }
    
    removePerson(person: string): void {
        
        var indexOfPersonInArray = this.persons.indexOf(person);
        if (indexOfPersonInArray > -1) {
            
            this.persons.splice(indexOfPersonInArray, 1);
        }
    }
}
