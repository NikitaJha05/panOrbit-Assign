import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  prfdt: any;
  prfls: any;
  profilediv = true;
  postdiv = false;
  gallerydiv = false;
  tododiv = false;
  title = "Profile";
  isChatOpen = false;
  constructor() {}

  ngOnInit(): void {
      debugger
      this.prfdt = JSON.parse(localStorage.getItem('aa'));
      this.prfls = JSON.parse(localStorage.getItem('ll'));
      for (var k = 0; k < this.prfls.users.length; k++) {
          if (this.prfls.users[k].id == this.prfdt.id)
              this.prfls.users.splice(k, 1);
      }
  }
  openprf() {
      debugger
      this.profilediv = true;
      this.gallerydiv = false;
      this.tododiv = false;
      this.postdiv = false;
      this.title = "Profile";
  }
  openpst() {
      debugger
      this.profilediv = false;
      this.gallerydiv = false;
      this.tododiv = false;
      this.postdiv = true;
      this.title = "Posts";
  }
  opengal() {
      this.profilediv = false;
      this.gallerydiv = true;
      this.tododiv = false;
      this.postdiv = false;
      this.title = "Gallery";
  }
  opentodo() {
      this.profilediv = false;
      this.gallerydiv = false;
      this.tododiv = true;
      this.postdiv = false;
      this.title = "Todo";
  }
  hidediv1() {
      debugger
      this.isChatOpen = !this.isChatOpen;
  }

}