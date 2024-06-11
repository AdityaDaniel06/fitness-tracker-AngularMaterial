import { Component, OnInit } from '@angular/core';
import { clearInterval } from 'timers';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrl: './current-training.component.css',
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: number = 0;
  ngOnInit(): void {
    setTimeout(() => {
      this.progress = this.progress + 1;
      console.log(this.progress);
      if(this.progress >= 100){
        this.progress = 100;
        // this.onStopTraining();
      }
    }, 1000)
  }
  onStopTraining() {
    // clearInterval()
  }
}
function forEach(arg0: (progress: any) => number) {
  throw new Error('Function not implemented.');
}

