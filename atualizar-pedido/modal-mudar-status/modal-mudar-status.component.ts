import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-mudar-status',
  templateUrl: './modal-mudar-status.component.html',
  styleUrls: ['./modal-mudar-status.component.scss']
})
export class ModalMudarStatusComponent {

  favoriteSeason: string | undefined;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
