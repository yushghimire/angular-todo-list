import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent implements OnInit {

  apiRoot: string = 'http://httpbin.org';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  doGET() {
    console.log('GET');
    const url = `${this.apiRoot}/get`;

    this.http.get(url)
      .subscribe(res => console.log(res));
  }
  doPOST() {

    console.log('POST');
  }
  doPUT() {
    console.log('PUT');
  }
  doDELETE() {
  console.log('DELETE');
  }
}
