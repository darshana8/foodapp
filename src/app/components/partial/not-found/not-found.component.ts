import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  
@Input()
visible=false

@Input()
notFoundMessage="Page not found"

@Input()
resetLinkText="Reset";

@Input()
resetLinkRoute="/"
constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
