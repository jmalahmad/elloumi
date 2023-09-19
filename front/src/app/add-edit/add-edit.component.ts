import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConventionService } from '../convention.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';



@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  conventionForm : FormGroup;
  

  constructor(private fb:FormBuilder,private conventionService:ConventionService, private dialogRef:DialogRef<AddEditComponent>,@Inject(MAT_DIALOG_DATA) public data:any){
   this.conventionForm=this.fb.group({
      
      societe1:'',
      societe2:'',
      date_creation:'',
      date_effet:'',
      etat_signature1:'',
      etat_signature2:'',
      cadre:'',

    })
  }
  ngOnInit(): void {
    this.conventionForm.patchValue(this.data);
  }
  onFormSumbit(){
    
    if (this.conventionForm.valid) {
      if(this.data){ this.conventionService.updateConvention(this.data.id,this.conventionForm.value).subscribe({next:(val:any)=>{
       this.dialogRef.close();
   
     
   },error:(err:any)=>{console.error(err);}})
     
    

      }
      else{
       /*document.getElementById('cancel').click();*/
       this.conventionService.addConvention(this.conventionForm.value).subscribe({next:(val:any)=>{
       this.dialogRef.close();
  
    
  },error:(err:any)=>{console.error(err);}})
    
    };}}

    
    closeDialog(): void {
      this.dialogRef.close();
    }
    

}




