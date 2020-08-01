import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})

export class PatientComponent implements OnInit {

  showtable = false;
  ELEMENT_DATA = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'}
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = []
  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.ELEMENT_DATA;
  }

  showTable(){
    if (this.showtable){
      this.showtable = false;
    } else {
      this.showtable = true;
    }
  }

}
