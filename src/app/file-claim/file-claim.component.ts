import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { url } from './../../environment';

@Component({
  selector: 'app-file-claim',
  templateUrl: './file-claim.component.html',
  styleUrls: ['./file-claim.component.css']
})
export class FileClaimComponent {
  url = url
  claimForm: FormGroup;
  uploadedFile: File | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.claimForm = this.fb.group({
      policyNumber: ['', [Validators.required, Validators.minLength(6)]],
      vehicleNumber: ['', [Validators.required]],
      incidentDate: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.claimForm.valid) {
      const formData = new FormData();
      formData.append('policyNumber', this.claimForm.get('policyNumber')?.value);
      formData.append('vehicleNumber', this.claimForm.get('vehicleNumber')?.value);
      formData.append('incidentDate', this.claimForm.get('incidentDate')?.value);
      formData.append('description', this.claimForm.get('description')?.value);
      if (this.uploadedFile) {
        formData.append('file', this.uploadedFile);
      }

      this.http.post(url, formData).subscribe({
        next: (response) => {
          console.log('Claim Submitted:', response);
          // Reset the form if needed
          this.claimForm.reset();
          this.uploadedFile = null;
        },
        error: (error) => {
          console.error('Error submitting claim:', error);
        }
      });
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.uploadedFile = event.target.files[0];
      console.log('File Uploaded:', this.uploadedFile);
    }
  }
}
