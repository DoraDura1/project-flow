import { TimeBlock } from './TimeBlock'; // Предполагается, что TimeBlock.ts находится в той же директории, что и ваш файл с тестами

describe('Time Block (e2e)', () => {
  let timeBlock: TimeBlock;

  beforeEach(() => {
    timeBlock = new TimeBlock();
  });

  it('should create a time block with specified start and end times', () => {
    const startTime = '09:00';
    const endTime = '10:30';
    timeBlock.setTimes(startTime, endTime);

    expect(timeBlock.getStartTime()).toBe(startTime);
    expect(timeBlock.getEndTime()).toBe(endTime);
  });

  it('should allow updating start and end times', () => {
    const startTime = '09:00';
    const endTime = '10:30';
    const newStartTime = '10:00';
    const newEndTime = '12:00';

    timeBlock.setTimes(startTime, endTime);
    timeBlock.updateTimes(newStartTime, newEndTime);

    expect(timeBlock.getStartTime()).toBe(newStartTime);
    expect(timeBlock.getEndTime()).toBe(newEndTime);
  });

  it('should calculate duration correctly', () => {
    const startTime = '09:00';
    const endTime = '10:30';
    const expectedDuration = 90; // в минутах

    timeBlock.setTimes(startTime, endTime);

    expect(timeBlock.getDuration()).toBe(expectedDuration);
  });

  it('should indicate if a time block overlaps with another time block', () => {
    const firstTimeBlock = new TimeBlock();
    const secondTimeBlock = new TimeBlock();

    firstTimeBlock.setTimes('09:00', '10:00');
    secondTimeBlock.setTimes('09:30', '10:30');

    expect(firstTimeBlock.overlapsWith(secondTimeBlock)).toBe(true);
  });
});
