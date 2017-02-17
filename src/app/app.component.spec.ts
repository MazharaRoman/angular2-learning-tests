/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import { AlertModule } from "ng2-bootstrap"
// import { AnotherComponentComponent } from './another-component/another-component.component'

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('true is true', () => { expect(true).toBe(true)})

});
describe('AppComponent(inline template)', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        AlertModule.forRoot()
      ]
    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('h1'));
      el = de.nativeElement;

    });
  }));

  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });

  it('logs me all i want', () => {
    console.log(comp);
    console.log(fixture);
  })

});


/*
*
*
 it('should create the app', async(() => {
 const fixture = TestBed.createComponent(AppComponent);
 const app = fixture.debugElement.componentInstance;
 expect(app).toBeTruthy();
 }));

 it(`should have as title 'app works!'`, async(() => {
 const fixture = TestBed.createComponent(AppComponent);
 const app = fixture.debugElement.componentInstance;
 expect(app.title).toEqual('app works!');
 }));

 it('should render title in a h1 tag', async(() => {
 const fixture = TestBed.createComponent(AppComponent);
 fixture.detectChanges();
 const compiled = fixture.debugElement.nativeElement;
 expect(compiled.querySelector('h1').textContent).toContain('app works!');
 }));
 */
