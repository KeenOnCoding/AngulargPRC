import { Component , OnInit} from '@angular/core';
import { HelloReply, HelloRequest } from '../generated/greet_pb';
import { GreeterClient, ServiceError } from '../generated/greet_pb_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string | undefined = 'client';
  response?: string = '';
  ngOnInit(): void {
    const client = new GreeterClient('http://localhost:5003');
    const req = new HelloRequest();
    req.setName("SERHII!");
    client.sayHello(req, (error: ServiceError | null, response: HelloReply | null) => {
      if (error) {
        this.response = `Error: {err.message}`;
        return;
      }
      this.response = response?.getMessage();
     this.title = this.response;
    });
  }


}
