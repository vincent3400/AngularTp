import { Component} from '@angular/core';

/*Mes variables custom et le nom de ma balise html*/
@Component({
    selector: 'app-mes-values',
    template: `<p>{{name }} <br/> crée le : {{ DateCrea | date:'dd,mm,yyyy' }}</p>` // Un pipe de formatage de date
})
export class MesValuesComponent {
    DateCrea = new Date(2019, 11, 27);
    name = 'Le meilleur form du monde';

}
