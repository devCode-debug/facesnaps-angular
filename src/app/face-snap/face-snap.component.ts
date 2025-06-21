import {Component, Input} from '@angular/core';
import {FaceSnap} from '../shared/models/face-snap';
import {UpperCasePipe} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-face-snap',
  imports: [
    UpperCasePipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  constructor(private router: Router) {
  }
  @Input() faceSnap!: FaceSnap;

  onViewFaceSnap(faceSnapId: string) {
    this.router.navigateByUrl(`facesnaps/${faceSnapId}`);
  }
}
