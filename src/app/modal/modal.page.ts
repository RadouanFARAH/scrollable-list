import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
interface List {
  albumId: Number,
  id: Number,
  title: String,
  url: String,
  thumbnailUrl: String
}
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() listUrl: String;
  @Input() listTitle: String;

  constructor(public modalController: ModalController) { }
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  ngOnInit() {
  }

}
