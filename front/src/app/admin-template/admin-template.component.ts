import { Component, OnInit } from '@angular/core';
import { ConventionService } from '../convention.service';

import { Convention } from '../interface/convention';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit{
  public conventions?:Convention[];
  title = 'Convention';
  
  constructor(private ConventionService:ConventionService ,private dialog:MatDialog,private authService:AuthService,private routeur:Router){

  }

  
  openAddForm(){
    this.dialog.open(AddEditComponent);
    this.dialog.afterAllClosed.subscribe ({next: () => {
    
        this.getConventions();
      
    },
  });
    
    
  }
    ngOnInit(): void {
      this.getConventions();
    }
    getConventions(): void {
      this.ConventionService.getConventions().subscribe(
        (response: any) => {
          this.conventions = response; 
        },
        (error: HttpErrorResponse) => {
          console.log('Error occurred:', error);
        
        }
      );
    }

    
    handleDeleteConvention(convention: Convention):void {
      this.ConventionService.deleteConvention(convention.id).subscribe({
        next: () => {
          this.getConventions(); 
        },
        error: (err: HttpErrorResponse) => {
          console.log(err); 
        }
      });
    }
    openEditForm(data:any){
      this.dialog.open(AddEditComponent,{
        data,
      });
      this.dialog.afterAllClosed.subscribe ({next: () => {
    
        this.getConventions();}})
      
      
      
    }
    logout(){
      this.authService.logout();
      this.routeur.navigateByUrl("/login");
    }

}
