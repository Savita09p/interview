import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  displayedColumns: string[] = ['field', 'value'];
dataSource = [
  { field: 'Name', value: 'Rohan Panchal' },
  { field: 'Client Name', value: 'Rohan Panchal' },
  { field: 'Country', value: 'India' },
  { field: 'Country Code', value: '1234' },
  { field: 'State', value: 'Maharashtra' },
  { field: 'City', value: 'Pune' },
  { field: 'Pincode', value: '413517' },
  { field: 'Mobile No', value: '8345367325' },
  { field: 'Gst No', value: '22ABCDE1234F1Z5' },
  { field: 'Pan No', value: 'ABCDE1234F' },
  { field: 'Email', value: 'rohanpanchal1216@gmail.com' },
  { field: 'Address', value: 'nai abadi' }
];

  constructor() { }

  ngOnInit(): void {
  }

}
