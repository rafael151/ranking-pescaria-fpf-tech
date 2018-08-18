import { TestBed, inject } from '@angular/core/testing';

import { PescadorService } from './pescador.service';

describe('PescadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PescadorService]
    });
  });

  it('should be created', inject([PescadorService], (service: PescadorService) => {
    expect(service).toBeTruthy();
  }));
});
