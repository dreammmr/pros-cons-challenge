import {Component} from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  username = 'arshak_khachatrian';
  userId: string;
  groupId: string;
  newData = {
    pro: '',
    con: ''
  };
  pros: any[];
  cons: any[];

  constructor(private api: ApiService) {
    this.getUserId();
  }

  getUserId() {
    const that = this;
    that.api.requestUserId(that.username).then(function (response: any) {
      that.userId = response.userId;
      that.getGroupId();
    });
  }

  getGroupId() {
    const that = this;
    that.api.requestGroupId(that.username).then(function (response: any) {
      that.groupId = response.groupId;
      that.getData();
    });
  }

  getData() {
    const that = this;
    that.api.getData(that.userId, that.groupId).then(function (response: any) {
      that.cons = response.cons;
      that.pros = response.pros;
    });
  }

  addPro() {
    const that = this;
    if (!that.newData.pro) {
      return;
    }

    if (!that.pros) {
      that.pros = [];
    }

    that.pros.push(that.newData.pro);
    that.newData.pro = '';

    that.updateData();
  }

  removePro(index) {
    const that = this;

    that.pros.splice(index, 1);
    that.updateData();
  }

  addCon() {
    const that = this;
    if (!that.newData.con) {
      return;
    }

    if (!that.cons) {
      that.cons = [];
    }

    that.cons.push(that.newData.con);
    that.newData.con = '';

    that.updateData();
  }

  removeCon(index) {
    const that = this;

    that.cons.splice(index, 1);
    that.updateData();
  }

  updateData() {
    const that = this;
    const data = {
      pros: that.pros,
      cons: that.cons
    };
    that.api.putData(that.userId, that.groupId, data);
  }

}
