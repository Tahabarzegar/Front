import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  http = inject(HttpClient);
  data: any[] = [];
  action = 'list';
  entity = {
    title: '',
    writer: '',
    price: 0
  };
  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.http.get('http://localhost:5042/books/list').subscribe(res => {
      this.data = res as any[];
    });
  }
  addClick() {
    this.action = 'add';
  }
  cancel() {
    this.action = 'list';
  }
  ok() {
    if (this.action == 'add') {
      this.http.post('http://localhost:5042/books/add', this.entity).subscribe(res => {
        this.action = 'list';
        this.refresh();
      });
    }
    else if (this.action == 'edit') {
      this.http.post('http://localhost:5042/books/update', this.entity).subscribe(res => {
        this.action = 'list';
        this.refresh();
        });
  }
  }
  editClicK(item: any) {
    this.action = 'edit';
    this.entity = item;
    if (this.action == 'edit') {
      this.http.post('http://localhost:5042/books/list', this.entity).subscribe(res => {
        this.action = 'list';
        this.refresh();
      });
    }
  }

  Delete(item: any) {
    this.action = 'delete';
    this.entity = item;
    if (this.action == 'delete') {
      this.http.post('http://localhost:5042/books/remove', this.entity).subscribe(res => {
        this.action = 'list';
        this.refresh();
      });
    }
  }
}
