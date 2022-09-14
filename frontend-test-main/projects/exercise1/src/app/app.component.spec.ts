import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('valid form', (done: DoneFn) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {

      const nameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#name');
      nameElement.value = 'prueba';
      nameElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(app.form.get('name')?.value).toEqual('prueba');
      expect(app.form.get('price')?.value).toEqual(5);
      expect(app.form.status).toEqual('VALID');
      
      done();

    });
  });

  it('invalid form', (done: DoneFn) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {

      const nameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#name');
      nameElement.value = 'test';
      nameElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(app.form.status).toEqual('INVALID');
      
      done();

    });
  });

  it('reset button', (done: DoneFn) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {

      const nameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#name');
      nameElement.value = 'prueba';
      nameElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const btnElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#btnReset');
      btnElement.dispatchEvent(new MouseEvent('click'));
      fixture.detectChanges();

      expect(app.form.get('name')?.value).toBeNull();
      expect(app.form.get('price')?.value).toEqual(5);
      
      done();

    });
  });
});
