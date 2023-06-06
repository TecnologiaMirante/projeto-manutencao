import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Output() onTyping = new EventEmitter<string>();
  @Input() value: string = '';
  debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(value => this.onTyping.emit(value));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
