import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
/*Les valeurs du form et leurs conditions qui doivent êtres respectées*/
export class FormulaireComponent {
    userprofileForm = new FormGroup({
        prenom: new FormControl('', Validators.required),
        nom: new FormControl('', Validators.required) ,
        age: new FormControl('', [Validators.maxLength(3), Validators.minLength(1), Validators.min(13)]),
        email: new FormControl('', [Validators.required, Validators.email]),
    });

    onSubmit() {
        console.warn(this.userprofileForm.value);

        console.log(this.userprofileForm.controls['prenom'].value);
    }
}

