import {Component, OnInit} from '@angular/core';
import {FaceSnap} from '../../shared/models/face-snap';
import {DatePipe, NgClass, NgStyle, UpperCasePipe} from '@angular/common';
import {FaceSnapsService} from '../../shared/services/face-snaps.service';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'single-app-face-snap',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {
  }

  faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.getFaceSnap();
    this.prepareInterface();
  }


  onAddSnap() {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }


  snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "snap");
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id']
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }


  private prepareInterface() {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }


}
