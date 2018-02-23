import { TestBed, inject } from '@angular/core/testing';

import { CurrentGameStateService } from './current-game-state.service';

describe('CurrentGameStateService', () => {

  let movesMadeEmpty = [
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty']
  ];
  let movesMadeRow = [
    ['O', 'O', 'O'],
    ['empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty']
  ];
  let movesMadeColumn = [
    ['O', 'empty', 'empty'],
    ['O', 'empty', 'empty'],
    ['O', 'empty', 'empty']
  ];
  let movesMadeRising = [
    ['empty', 'empty', 'O'],
    ['empty', 'O', 'empty'],
    ['O', 'empty', 'empty']
  ];
  let movesMadeFalling = [
    ['O', 'empty', 'empty'],
    ['empty', 'O', 'empty'],
    ['empty', 'empty', 'O']
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentGameStateService]
    });
  });

  it('should be created', inject([CurrentGameStateService], (service: CurrentGameStateService) => {
    expect(service).toBeTruthy();
  }));

  describe('checkForVictory method', () => {
  it('should return true when there is 3 in a row', inject([CurrentGameStateService], (service: CurrentGameStateService) => {
    expect(service.checkForVictory(movesMadeRow)).toBe(true);
  }));
    it('should return true when there is 3 in a column', inject([CurrentGameStateService], (service: CurrentGameStateService) => {
      expect(service.checkForVictory(movesMadeColumn)).toBe(true);
    }));
    it('should return true when there is 3 in a falling diagonal', inject([CurrentGameStateService], (service: CurrentGameStateService) => {
      expect(service.checkForVictory(movesMadeFalling)).toBe(true);
    }));
    it('should return true when there is 3 in a rising diagonal', inject([CurrentGameStateService], (service: CurrentGameStateService) => {
      expect(service.checkForVictory(movesMadeRising)).toBe(true);
    }));
    it('should return false otherwise', inject([CurrentGameStateService], (service: CurrentGameStateService) => {
      expect(service.checkForVictory(movesMadeEmpty)).toBe(false);
    }));
  })
});
