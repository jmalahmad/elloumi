import { Component, OnInit } from '@angular/core';
import { Convention } from '../interface/convention';
import { MatDialog } from '@angular/material/dialog';
import { ConventionService } from '../convention.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.css']
})
export class UserTemplateComponent implements OnInit{
  public conventions?:Convention[];
  title = 'Convention';
  
  constructor(private ConventionService:ConventionService ,private authService:AuthService,private routeur:Router){

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
logout(){
  this.authService.logout();
  this.routeur.navigateByUrl("/login");
}
    
    
    

}

