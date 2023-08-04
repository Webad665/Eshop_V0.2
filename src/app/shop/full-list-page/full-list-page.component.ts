import { AfterViewInit, Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Books } from '../book.model';
import { ShopService } from '../shop.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-full-list-page',
  templateUrl: './full-list-page.component.html',
  styleUrls: ['./full-list-page.component.css']
})
export class FullListPageComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'name'];

  bookSource = new MatTableDataSource<Books>();

  // SKIP init SKIP constructor
  @ViewChild(MatSort) sort !: MatSort;
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  constructor (private shopService: ShopService){

  }

  ngOnInit(){
    this.bookSource.data = this.shopService.getBooks();
  }

  ngAfterViewInit(){
    this.bookSource.sort = this.sort;
    this.bookSource.paginator = this.paginator;
  }

  doFilter(filterValue: string){
    this.bookSource.filter = filterValue.trim().toLowerCase();
  }



}
