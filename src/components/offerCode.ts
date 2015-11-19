import {ViewEncapsulation, Component, FORM_DIRECTIVES} from "angular2/angular2";

@Component({
	selector: 'offer-code',
	templateUrl: './src/components/offerCode.html',
	directives: [FORM_DIRECTIVES],
	encapsulation: ViewEncapsulation.Native,
	styles: [`
		input {
			color: green;
		}
	`]
})

export class OfferCode {
	
	code: string;
	
	constructor() {
		
	}
}