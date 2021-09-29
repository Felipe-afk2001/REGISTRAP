import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienve',
  templateUrl: './bienve.page.html',
  styleUrls: ['./bienve.page.scss'],
})
export class BienvePage implements OnInit {
  usuario:string;
  constructor() {
    this.usuario=localStorage.getItem('username')
   }

  ngOnInit() {
  }

}
