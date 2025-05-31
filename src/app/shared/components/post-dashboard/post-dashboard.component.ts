import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../service/posts.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
  postsData !: any
  constructor(
    private _postsService : PostsService,
    private _matDialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts(){
    this._postsService.fetchAllPosts()
      .subscribe(res =>{
        // console.log(res);
        this.postsData = res
      })
  }
  onAdd(){
    let dialogConfig = new MatDialogConfig()

    dialogConfig.disableClose= true;
    dialogConfig.width= '600px';
    let matDialog = this._matDialog.open(PostFormComponent)
  }
}
