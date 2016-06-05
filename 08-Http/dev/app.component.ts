import {Component} from 'angular2/core';
import {HttpService} from "./services/http";

@Component({
    selector: 'my-app',
    template: `
    <div>
        <div class="input">
            <label for="title">Title</label>
            <input type="text" id="title" #title>
        </div>
        <div class="input">
            <label for="body">Body</label>
            <input type="text" id="body" #body>
        </div>
        <div class="input">
            <label for="userId">User ID</label>
            <input type="text" id="userId" #userId>
        </div>
        <button (click)="onPost(title.value,body.value,userId.value)">Post Data</button>
        <button (click)="onGetPosts()">Get All Post</button>
        <p>Response : {{response | json}}</p>
    </div>
    `,
    providers: [HttpService]
})
export class AppComponent {

    constructor(private _httpService:HttpService) {
    }

    response:string;

    onGetPosts() {
        this._httpService.getPosts()
            .subscribe(
                res => this.response = res,
                err => console.log(err)
            )
    }

    onPost(title:string, body:string, userId:string) {
        this._httpService.createPost({title: title, body: body, userId: +userId})
            .subscribe(
                res => this.response = res,
                err => console.log(err)
            )
    }
}