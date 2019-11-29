import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  // user: User;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const index = +this.activatedRoute.snapshot.paramMap.get('id');
    
  }
}
