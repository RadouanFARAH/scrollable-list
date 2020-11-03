import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { ListsService } from '../services/lists.service';
interface List {
  albumId: Number,
  id: Number,
  title: String,
  url: String,
  thumbnailUrl: String
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lists: List[];
  constructor(private ref: ChangeDetectorRef, private listService: ListsService, private activatedRoute: ActivatedRoute, public modalController: ModalController) {
    this.activatedRoute.data.subscribe(res => {
      this.lists = res.lists;
    })
  }
  async presentModal(listUrl: String, listTitle: String) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        listUrl,
        listTitle
      }
    });
    return await modal.present();
  }
  delete(id: Number) {
    console.log(id)
    this.listService.delete(id);
    this.ref.detectChanges();
  }

}
