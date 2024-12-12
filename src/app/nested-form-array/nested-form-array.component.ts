import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-nested-form-array',
  templateUrl: './nested-form-array.component.html',
  styleUrls: ['./nested-form-array.component.scss']
})
export class NestedFormArrayComponent implements OnInit {
  formGroup: FormGroup;
  form:any;
  constructor(){}

  ngOnInit(): void {
    this.form= new formGroup({
      
    })
  }



}
