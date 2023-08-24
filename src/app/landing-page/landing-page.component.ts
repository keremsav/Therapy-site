import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AboutDialogComponent} from "../about-dialog/about-dialog.component";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

constructor(private dialog : MatDialog) {}

  openDialog() {
  const dialogRef = this.dialog.open(AboutDialogComponent,{
    height: '600px',
    width : '600px',
  })
  }

}
