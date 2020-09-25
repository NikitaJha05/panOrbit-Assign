import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  HttpClient
} from "@angular/common/http";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  data: any
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
      this.getData()
  }
  getData() {
      debugger
      const url = 'https://panorbit.in/api/users.json'
      this.http.get(url).subscribe((res) => {
          this.data = res
          localStorage.setItem('ll', JSON.stringify(this.data))
          console.log(this.data)
      })
  }
  openprofile(prf) {
      debugger
      localStorage.setItem('aa', JSON.stringify(this.data.users[prf]));

      this.router.navigate(['details']);

  }
}