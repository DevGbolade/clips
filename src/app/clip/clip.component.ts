import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.scss']
})
export class ClipComponent implements OnInit {
id = ''
  constructor(
    private route: ActivatedRoute
  ) {
   route.params.subscribe((param: Params) => {
     this.id = param.id
    console.log('ID--->',this.id)
     
    })
   }

  ngOnInit(): void {
    console.log('ID--->', this.id)
    console.log('I Love you')
  }
}
