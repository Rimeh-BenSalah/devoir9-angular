import { Component, OnInit } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre';
import { Router, RouterLink } from '@angular/router';
import { Theme } from '../model/theme.model';
import { CommonModule } from '@angular/common';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-add-livre',
  standalone: true, 
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './add-livre.html',
  styleUrl: './add-livre.css'
})
export class AddLivre implements OnInit {
  newLivre = new Livre(); 
  themes! : Theme[];
  newIdThe! : number; 
  newTheme! : Theme;
  message! : string;
  myForm!: FormGroup; 
  constructor(private livreService: LivreService,private router :Router,private formBuilder: FormBuilder) { } 
  ngOnInit(): void {
    this.themes = this.livreService.listeThemes();


  function uniqueIdValidator(livreService: LivreService) {
  return (control: AbstractControl) => {
    if (!control.value) return null;
    const existingIds = livreService.listeLivres().map(l => l.idLivre);
    return existingIds.includes(control.value) ? { idNotUnique: true } : null;
  };
}

    
    this.myForm = this.formBuilder.group({  
      idLivre : ['', [Validators.required, uniqueIdValidator(this.livreService)
      ]],
      nomLivre : ['', [Validators.required]],
      auteur : ['', [Validators.required,Validators.minLength(4)]],
      prixLivre : ['', [Validators.required,Validators.min(1)]],
      Datedepublication : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      idThe : ['', [Validators.required]], 
    } ); 
  }

  addLivre(){ 
    //console.log(this.newLivre); 
    this.newTheme= this.livreService.consulterTheme(this.newIdThe); 
    this.newLivre.theme = this.newTheme;
    this.livreService.ajouterLivre(this.newLivre); 
    this.message = "Livre "+this.newLivre.nomLivre +" ajouté avec succès !"
    this.router.navigate(['livres']);
  }
   
}
