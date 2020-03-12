import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorComponent } from './administrator.component';
import { AdministratorService } from 'src/app/services/administrator.service';
import { HttpClient } from '@angular/common/http';

describe('AdministratorComponent', () => {
  let component: AdministratorComponent;
  let fixture: ComponentFixture<AdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checkAdministrator  should return true from administrator service', () => {
    let adminService: AdministratorService; 
    adminService = new AdministratorService(new AdministratorService(http: HttpClient));
    expect(adminService.checkAdministrator()).toBe('true');
  });

  it('#checkAdministrator should return false value from a administrator service', () => {
    let adminService: AdministratorService;
    adminService = new AdministratorService(new AdministratorService(http: HttpClient));
    expect(adminService.checkAdministrator()).toBe('false');
  });
});
