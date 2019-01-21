import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial-video',
  templateUrl: './tutorial-video.component.html',
  styleUrls: ['./tutorial-video.component.css']
})
export class TutorialVideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  playVideo() {
    var myVideo = document.getElementById("tutorialVideo");
    if (myVideo.paused)
      myVideo.play();
    else
      myVideo.pause();
  }

}
