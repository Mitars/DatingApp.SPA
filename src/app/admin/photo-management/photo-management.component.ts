import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/_models/photo';
import { AdminService } from 'src/app/_services/admin.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-photo-management',
  templateUrl: './photo-management.component.html',
  styleUrls: ['./photo-management.component.css']
})
export class PhotoManagementComponent implements OnInit {
  photos: Photo[];

  constructor(private adminService: AdminService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getAllPhotos();
  }

  getAllPhotos() {
    this.adminService.getPhotosForModeration().subscribe(
      (photos: Photo[]) => {
        this.photos = photos;
      }, error => {
        this.alertify.error(error);
      }
    );
  }

  approvePhoto(photo: Photo) {
    this.adminService.approvePhoto(photo.id).subscribe(
      () => {
        this.photos.splice(this.photos.findIndex(p => p.id === photo.id), 1);
      }, error => {
        this.alertify.error(error);
      }
    );
  }

  rejectPhoto(photo: Photo) {
    this.adminService.rejectPhoto(photo.id).subscribe(
      () => {
        this.photos.splice(this.photos.findIndex(p => p.id === photo.id), 1);
      }, error => {
        this.alertify.error(error);
      }
    );
  }
}
