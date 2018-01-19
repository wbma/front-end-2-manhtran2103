import { Component, OnInit } from '@angular/core';
import  {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  someData = 'some data';
  baseURL = 'http://media.mw.metropolia.fi/wbma/media';
  mediaURL = 'http://media.mw.metropolia.fi/wbma/uploads/';

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

  getMedia(){
    this.http.get(this.baseURL).subscribe(data => {
      console.log(data);
      this.mediaURL += data[0].filename;
    });
  }

  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }

}
