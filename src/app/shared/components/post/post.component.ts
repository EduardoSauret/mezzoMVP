import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mezzo-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() avatar : string;
  @Input() thumbnail : string;
  @Input() name : string;
  @Input() profile : string;
  @Input() distance : string;
  @Input() title : string;
  @Input() description : string;

  constructor() { }

  ngOnInit() {}

}
