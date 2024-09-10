import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-snippets',
  standalone: true,
  imports: [],
  templateUrl: './view-snippets.component.html',
  styleUrl: './view-snippets.component.css'
})
export class ViewSnippetsComponent {
  constructor(private dbService:DbService,private route:ActivatedRoute){}
  codeSnippet={title:"",code:""};
  ngOnInit(){
    const docId=this.route.snapshot.paramMap.get('id');
    this.dbService.getSnippetByID(docId!).then((data:any)=>{
      this.codeSnippet=data
    });
  }

}
