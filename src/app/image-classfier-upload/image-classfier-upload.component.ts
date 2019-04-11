import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Prediction } from '../prediction';
import * as mobilenet from '@tensorflow-models/mobilenet';

@Component({
  selector: 'app-image-classfier-upload',
  templateUrl: './image-classfier-upload.component.html',
  styleUrls: ['./image-classfier-upload.component.scss']
})
export class ImageClassfierUploadComponent implements OnInit {
  imageSrc: string;
  @ViewChild('img') imageEl: ElementRef;

  predictions: Prediction[];

  model: any;
  loading = true;


  constructor() { }

  async ngOnInit() {
    console.log('loading mobilenet model...');
    this.model = await mobilenet.load();
    console.log('Sucessfully loaded model');
    this.loading = false;
  }

  async fileChangeEvent(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (res: any) => {
        this.imageSrc = res.target.result;
        setTimeout(async () => {
          const imgEl = this.imageEl.nativeElement;
          this.predictions = await this.model.classify(imgEl);
        }, 0);

      };
    }

  }

}
