// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-display-pdf',
//   templateUrl: './display-pdf.component.html',
//   styleUrl: './display-pdf.component.css'
// })
// export class DisplayPdfComponent {

// }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-pdf',
  templateUrl: './display-pdf.component.html',
  styleUrls: ['./display-pdf.component.css']
})
export class DisplayPdfComponent {
  pdfId: number = 0;

  constructor(private http: HttpClient) { }

  onGetPdf(): void {
    this.http.get('/api/pdf/' + this.pdfId, { responseType: 'arraybuffer' }).subscribe(
      (data: ArrayBuffer) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error => {
        console.error('Failed to fetch PDF:', error);
        // Handle error
      }
    );
  }
}
