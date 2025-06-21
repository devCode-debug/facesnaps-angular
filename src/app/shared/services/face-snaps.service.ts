import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {SnapType} from '../models/snap-type.type';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor() {
  }


  private faceSnaps: FaceSnap[] = [

    new FaceSnap(
      'Archibald',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      'Mon meilleur ami depuis toujours !',
      new Date(),
      10
    ),

    new FaceSnap(
      'Three Rock Mountain',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      'Un endroit magnifique pour les randonnées.',
      new Date(),
      6
    ).withLocation('à la montagne'),

    new FaceSnap(
      'Un bon repas',
      'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      'Mmmh que c\'est bon !',
      new Date(),
      156
    )
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }


  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap: FaceSnap | undefined = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap: FaceSnap | undefined = this.faceSnaps.find(f => {
      return f.id === faceSnapId;
    });
    if (!foundFaceSnap) {
      throw new Error('No face snap found with id ' + faceSnapId);
    }
    return foundFaceSnap;
  }


}
