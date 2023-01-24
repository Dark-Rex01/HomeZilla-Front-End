import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted =  false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
    
  }

  get f() { return this.loginForm.controls; }

  viewProfile()
  {
    
  }
  onSubmit()
  {
    this.submitted = true;
    if(this.loginForm.invalid)
    {
      return;
    }
    else{
      this.authService.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          this.storageService.saveToken(res['headers'].get('authorization'));
          this.messageService.add({severity:'success', summary: res.body.message, life: 3000});
        },
        error: (err) => {
          this.messageService.add({severity:'error', summary: err.error.message, life: 3000});
        }
      })
    }
  }
}
