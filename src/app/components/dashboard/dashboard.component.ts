import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { PollService } from '../../services/poll.service';
import { Poll, PollForm, PollVote } from '../../types';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent {
  userData: any;
  showForm = false;
  activePoll: Poll = null as any;

  polls = this.ps.getPolls();

  constructor(public afAuth: AngularFireAuth,public authService: AuthService, private ps: PollService) {
    this.userData = this.authService.userStatus();
  }

  ngOnInit(): void {
    this.ps.onEvent('PollCreated').subscribe(() => {
      this.polls = this.ps.getPolls();
    })
  }

  setActivePoll(poll) {
    this.activePoll = null as any;

    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }

  handlePollCreate(poll: PollForm) {
    this.ps.createPoll(poll);
  }

  handlePollVote(pollVoted: PollVote) {
    this.ps.vote(pollVoted.id, pollVoted.vote);
  }
}
