import {Component, FORM_DIRECTIVES} from "angular2/angular2";

@Component({
	selector: 'offer-code',
	templateUrl: './src/components/offerCode.html',
	directives: [FORM_DIRECTIVES]
})

export class OfferCode {
	
	code: string;
	
	constructor() {
		
	}
}