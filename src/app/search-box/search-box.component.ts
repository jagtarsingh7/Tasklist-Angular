import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent   {

  @Output() searchedData:EventEmitter<string> = new EventEmitter<string>();

  searchedItem!:string

  sendSearchText() {
    this.searchedData.emit(this.searchedItem);
  }
}
