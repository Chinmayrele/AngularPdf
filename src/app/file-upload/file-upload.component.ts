// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-file-upload',
//   templateUrl: './file-upload.component.html',
//   styleUrl: './file-upload.component.css'
// })
// export class FileUploadComponent {

// }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFile?: File;

  constructor(private http: HttpClient) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    const formData = new FormData();
    formData.append('file', this.selectedFile!);

    this.http.post('/api/pdf/upload', formData).subscribe(
      () => {
        console.log('File uploaded successfully');
        // Handle success
      },
      error => {
        console.error('Failed to upload file:', error);
        // Handle error
      }
    );
  }
}
