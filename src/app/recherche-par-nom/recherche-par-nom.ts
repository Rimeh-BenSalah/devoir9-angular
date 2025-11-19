import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { RouterLink } from '@angular/router';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre';
//import { of} from 'rxjs';
import { SearchFilterPipe } from '../search-filter-pipe';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [FormsModule,CommonModule,/*RouterLink,*/SearchFilterPipe],
  templateUrl: './recherche-par-nom.html',
  styles: ``
})
export class RechercheParNom implements OnInit{
  livres! : Livre[];
  allLivres! : Livre[];
  searchTerm!: string;
  constructor(private livreService: LivreService ){}
/*ngOnInit():void{
    of(this.livreService.listeLivres()). subscribe(livs => {
      console.log(livs);
      this.allLivres = livs; 
      });
  }
 onKeyUp(filterText : string){ 
  this.livres = this.allLivres.filter(item => 
  item.nomLivre.toLowerCase().includes(filterText));}*/

/*ngOnInit(): void { 
  of(this.livreService.listeLivres()).subscribe(livs => { 
    console.log(livs); 
    this.livres = livs; });
  }*/
 ngOnInit(): void { 
  this.livres=this.livreService.listeLivres();
 }





  /*supprimerLivre(l: Livre) { 
    //console.log(l);
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf){
      this.livreService.supprimerLivre(l);} }*/

}
