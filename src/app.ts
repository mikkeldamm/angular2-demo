import {Component, NgFor} from 'angular2/angular2';

@Component({
    selector: 'app',
    templateUrl: './src/app.html', 
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
