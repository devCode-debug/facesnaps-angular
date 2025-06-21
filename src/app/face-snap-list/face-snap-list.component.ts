import {Component, OnInit} from '@angular/core';
import {FaceSnapComponent} from '../face-snap/face-snap.component';
import {FaceSnap} from '../shared/models/face-snap';
import {FaceSnapsService} from '../shared/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {

  constructor(private faceSnapService: FaceSnapsService) {
  }

  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapService.getFaceSnaps()
  }


}
