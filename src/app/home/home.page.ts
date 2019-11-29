import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  users: User[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // const user1 = new User(1, 'Sea', 'sea@grows-it.com');
    // const user2 = new User(2, 'Am', 'am@grows-it.com');
    // this.users = [user1, user2];

    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(users => {
      this.users = users;
    });
  }
}
