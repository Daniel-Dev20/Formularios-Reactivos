import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {

  constructor(public formBuild:FormBuilder) {

    this.crearForm();
   }

  form:any;
  ngOnInit(): void {
  }

  crearForm = () => {

    this.form = this.formBuild.group({
      nombre: ['', Validators.required]
    })
  }
  

}
