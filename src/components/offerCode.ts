import {Component} from "angular2/angular2";

@Component({
	selector: 'offer-code',
	template: `
		<div>
			<label>
				<span>Indtast din kode</span>
				<input type="text" />
			</label>
		</div>
	`
})

export class OfferCode {
	
	constructor() {
		
	}
}