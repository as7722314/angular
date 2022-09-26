import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { OrderService } from './order.service';
import { UserService } from 'src/services/user.service';

import { OrderDto } from '../interface/Order';
import { Message } from '../interface/message';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { UserDialogComponent } from './user/user.dialog.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderService],
})
export class OrderComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'orderDate', 'total', 'owner', 'actions'];
  dataSource = new MatTableDataSource<OrderDto>();
  isLoadingResults = false;
  message: Message = {
    action: "Close",
    content: "Success",
    horizontal: 'right',
    vertical: 'top'
  };

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private orderService: OrderService,
    private userService: UserService,
    public dialog: MatDialog,
  ) { }
  ngOnInit(): void {
    this.getOrders();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    //watch pageSize
    this.paginator.page.subscribe(() => {
      console.log(this.paginator)
    })
    //watch sort
    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0
      this.dataReOrder(this.sort)
    });
  }

  async dataReOrder(sort: MatSort) {
    this.isLoadingResults = true;
    let sortActive = (!['', null].includes(sort.active)) ? sort.active : 'id';
    let sortDirection = (!['', null].includes(sort.direction)) ? sort.direction : 'asc';
    const res = await firstValueFrom(this.orderService.getOrders(sortActive, sortDirection));
    this.isLoadingResults = false;
    this.dataSource.data = res;
  }

  async getOrders() {
    this.isLoadingResults = true;
    const res = await firstValueFrom(this.orderService.getOrders());
    this.isLoadingResults = false;
    this.dataSource.data = res;
  }

  async getUserDetail(id: number, enterAnimationDuration: string = '0ms', exitAnimationDuration: string = '0ms') {
    const res = await firstValueFrom(this.userService.getUser(id));
    this.dialog.open(UserDialogComponent, {
      width: '350px',
      data: {
        user: res
      },
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}