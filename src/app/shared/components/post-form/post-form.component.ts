import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../../service/posts.service';
import { Ipost } from '../../model/posts';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postForm !: FormGroup
  constructor(
    private _postsServce : PostsService,
    private _matRef : MatDialogRef<PostFormComponent>
  ) { }

  ngOnInit(): void {
    this.createPostForm()
  }

  createPostForm () {
    this.postForm = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      client : new FormControl(null,[Validators.required]),
      code : new FormControl(null,[Validators.required]),
      email: new FormControl(null,[Validators.required]),
      mobileNo:new FormControl(null,[Validators.required]),
      GstNo :new FormControl(null,[Validators.required]),
      PanNo :new FormControl(null,[Validators.required]),
      Address : new FormGroup(null,[Validators.required]),
     Country: new FormControl('', Validators.required),
     City: new FormControl('', Validators.required),
     PinCode: new FormControl('', [Validators.required]),
     State: new FormControl('', Validators.required),
  
    })
  }

  
onPostForm(){
  if(this.postForm.valid){
        let postObj : Ipost = this.postForm.value;
        // console.log(postObj)
        this.postForm.reset();
         this._postsServce.createBlogPost(postObj)
          .subscribe({
            next:(res) =>{
               this._matRef.close({...postObj,id: res.name})
                // console.log(res)
            },
            error:(err)=>{
              console.log(err)
            }
          })
      }
}
}
