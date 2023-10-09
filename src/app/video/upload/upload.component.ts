import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  isDragOver = false

  constructor() { }

  ngOnInit(): void {
  }

  onDrop(event: any) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    console.log('Dropped files:1');
  }

  onDragOver(event: any) {
    event.preventDefault();
    this.isDragOver = true;
    event.dataTransfer.dropEffect = 'copy'; // or 'move' or 'link'
    console.log('Dropped files:2');

  }

  onDragEnter(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
    console.log('Dropped files:3');

  }

  onDragLeave(event: DragEvent) {
    this.isDragOver = false;
    console.log('Dropped files:4');

  }

}
