import { Component, OnInit } from '@angular/core';
import  {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  someData = 'some data';

  constructor(private http: HttpClient) { }
  getJSON(){
    interface Myiterface {
      license: string;
    }
    this.http.get<Myiterface>('assets/package.json').subscribe(data => {
      console.log(data);
      this.someData = data.license;
    });
  }

  ngOnInit() {
    this.getJSON();
  }

}
