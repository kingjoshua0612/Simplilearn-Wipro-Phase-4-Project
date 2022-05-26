import { Component } from '@angular/core';
import { WebcamInitError } from 'ngx-webcam';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'online-test-portal';
  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      console.warn("Camera access was not allowed by user!");
      if(confirm('Camera not allowed, Kindly reset permission to remove this box.')){
        window.location.reload();  
    }
    else
    {
      window.location.reload();
    }
    
    }
  }
}
