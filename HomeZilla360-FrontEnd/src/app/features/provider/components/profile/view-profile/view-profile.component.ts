import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { User } from '../../../models/user';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  user: User;
  value: number = 22;
  locationList: Array<string>;
  public userForm!: FormGroup;
  constructor(
    private profileService: ProfileService,
    public fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.user = new User();

  }

  ngOnInit() {
    this.getProfileDetails();
  }
  getProfileDetails() {
    this.profileService.getProviderProfileDetails().subscribe((user) => {
      this.user = user;
    });
  }
 
  
}
