import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { WorkComponent } from '../Component/Work/Work.component';
import { AboutComponent } from '../Component/About/About.component';
import { ContactComponent } from '../Component/Contact/Contact.component';
import { Navbar } from '../Component/navbar/navbar';

export const routes: Routes = [


    {path:"", redirectTo:"Work", pathMatch:"full"},

{path:"Work" , component:WorkComponent },
{path : "About" , component:AboutComponent},
{path : "Contact" , component:ContactComponent},

];
