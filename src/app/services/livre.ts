import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';
import { Theme } from '../model/theme.model';
@Injectable({
  providedIn: 'root'
})
export class LivreService {
  rechercherParNom(nomProduit: any) {
    throw new Error('Method not implemented.');
  }
  livres : Livre[];
  livre! : Livre; 
  themes : Theme[];
  livresRecherche! : Livre[];
  constructor() { 
    this.themes= [
      {idThe : 1, nomThe: "Roman Historique"},
      {idThe: 2, nomThe : "Conte Philosophique"},
      {idThe: 3, nomThe: "Roman Réaliste"}
    ];
    this.livres =[
    {idLivre : 1,  nomLivre : "Les Misérables",auteur :"Victor Hugo", prixLivre : 20.00,  Datedepublication : new Date("01/01/1862"),theme :{idThe : 1, nomThe: "Roman Historique"},email:"lesmiserables@gmail.com"},
    {idLivre : 2,  nomLivre : "Le Petit Prince", auteur :"Antoine de Saint-Exupéry",prixLivre :25.0, Datedepublication: new Date("06/04/1943"),theme :{idThe: 2, nomThe : "Conte Philosophique"},email:"LePetitPrince@gmail.com"},
    {idLivre : 3,  nomLivre :"Madame Bovary", auteur :"Gustave Flaubert",prixLivre :22.0, Datedepublication: new Date("01/12/1957"),theme : {idThe: 3, nomThe: "Roman Réaliste"},email:"MadameBovary@gmail.com"}
  ];
   }

    listeLivres():Livre[] { 
      return this.livres; 
    }
    ajouterLivre( liv: Livre){
      this.livres.push(liv);
    }
    supprimerLivre( liv: Livre){ 
     //supprimer le livre liv du tableau livres  
      const index = this.livres.indexOf(liv, 0); 
      if (index > -1) { 
        this.livres.splice(index, 1); 
      }  
    } 
    consulterLivre(id:number): Livre{
      this.livre =  this.livres.find(l => l.idLivre == id)!;
      return this.livre; }
    updateLivre( liv: Livre){
      //chercher le livre liv du tableau livres
      const index = this.livres.indexOf(liv, 0);
      if (index > -1) {
      this.livres.splice(index, 1); //supprimer l'ancien éléments
      this.livres.splice(index,0,liv); // insérer le nouvel élément
   } }


   listeThemes():Theme[] { 
    return this.themes; }
   consulterTheme(id:number): Theme {
    return this.themes.find(the => the.idThe == id)!; 
  }
  rechercherParTheme(idThe : number): Livre[]{
    this.livresRecherche = [];
    this.livres.forEach((cur ,index) => {
      if(idThe == cur.theme.idThe){
        console.log("cur "+cur);
        this.livresRecherche.push(cur);
      }
    });
    return this.livresRecherche;
  }
}