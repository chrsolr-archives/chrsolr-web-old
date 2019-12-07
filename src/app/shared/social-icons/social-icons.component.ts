import { Component, OnInit } from '@angular/core'
import { faGithub, faCodepen, faInstagram, faTwitch } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss'],
})
export class SocialIconsComponent implements OnInit {
  github = faGithub
  codepen = faCodepen
  instagram = faInstagram
  twitch = faTwitch

  constructor() {}

  ngOnInit() {}
}