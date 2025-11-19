import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Theme } from '../model/theme.model';

@Component({
  selector: 'app-recherche-par-theme',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './recherche-par-theme.html',
  styles: ``
})
export class RechercheParTheme implements OnInit{
  livres! : Livre[];
  IdTheme! : number; 
  themes! : Theme[];
  constructor(private livreService: LivreService ){}

  ngOnInit():void{
    this.themes =  this.livreService.listeThemes();
    //this.livres = this.livreService.listeLivres();
    this.livres = [];
  }
  onChange(){
    console.log(this.IdTheme);
    this.livres = this.livreService.rechercherParTheme(this.IdTheme);
  }
   supprimerLivre(l: Livre) { 
    //console.log(l);
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf){
      this.livreService.supprimerLivre(l);
      this.livres = this.livreService.rechercherParTheme(this.IdTheme); } }
}
