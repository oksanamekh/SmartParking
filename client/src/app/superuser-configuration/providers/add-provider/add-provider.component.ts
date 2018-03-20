import {Component, OnInit} from '@angular/core';
import {Address} from '../../../model/view/address';
import {ProviderService} from '../provider.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProviderRequest} from './provider-request';

@Component({
    selector: 'app-add-provider',
    templateUrl: './add-provider.component.html',
    styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {

    providerRequest: ProviderRequest;
    providerForm: FormGroup;

    nameControl: FormControl = new FormControl('', [
        Validators.required
    ]);
    stateControl: FormControl = new FormControl('', [
        Validators.required
    ]);
    cityControl: FormControl = new FormControl('', [
        Validators.required
    ]);
    streetControl: FormControl = new FormControl('', [
        Validators.required
    ]);
    buildingNumberControl: FormControl = new FormControl('', [
        Validators.required, Validators.pattern('^\\d+[a-zA-Z]{0,1}$')
    ]);

    constructor(private providerService: ProviderService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.providerForm = this.formBuilder.group({
            name: this.nameControl,
            state: this.stateControl,
            city: this.cityControl,
            street: this.streetControl,
            buildingNumber: this.buildingNumberControl
        });
    }

    saveProvider(): void {
        this.providerRequest = this.providerForm.value;
        this.providerService.saveProvider(this.providerRequest).subscribe(data => {
            alert('Provider added successfully.');
        });
        ;
    }
}
