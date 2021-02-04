import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscricaoService } from './inscricao.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  formulario:FormGroup;
  inscrito:boolean = false;
  erro:boolean=false;
  labelInscrever:string;

  constructor(private fb:FormBuilder, private inscricaoService:InscricaoService) {
    this.labelInscrever = 'Inscrever';
    this.formulario = this.fb.group({
      nome: ['', [Validators.required]],
      username: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      cidade: ['', []],
      whatsapp: [true, []]
    });
  }

  async inscrever(){
    if (this.inscricaoService.inscrever(this.formulario.value)){
      this.formulario.reset();
      this.inscrito = true;
      this.labelInscrever = 'Inscrito';
    }else{
      this.erro = true;
    }
  }
}
