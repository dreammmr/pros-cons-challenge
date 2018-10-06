import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  requestUserId(username: string) {
    const that = this;
    return new Promise((resolve, reject) => {
      that.http.get('https://avetiq-test.firebaseapp.com/user/' + username).toPromise().then(function (response) {
        resolve(response);
      });
    });
  }

  requestGroupId(username: string) {
    const that = this;
    return new Promise((resolve, reject) => {
      that.http.get('https://avetiq-test.firebaseapp.com/group/' + username).toPromise().then(function (response) {
        resolve(response);
      });
    });
  }

  getData(userId: string, groupId: string) {
    const that = this;
    return new Promise((resolve, reject) => {
      that.http.get('https://avetiq-test.firebaseapp.com/proscons/group/' + groupId + '/user/' + userId).toPromise()
        .then(function (response) {
          resolve(response);
        });
    });
  }

  putData(userId: string, groupId: string, data: object) {
    const that = this;
    return new Promise((resolve, reject) => {
      that.http.put('https://avetiq-test.firebaseapp.com/proscons/group/' + groupId + '/user/' + userId, data).toPromise()
        .then(function (response) {
          resolve(response);
        });
    });
  }

}
