import { PomodoroTimer } from './PomodoroTimer'; // Предполагается, что PomodoroTimer.ts находится в той же директории, что и ваш файл с тестами

describe('Pomodoro Timer (e2e)', () => {
  let timer: PomodoroTimer;

  beforeEach(() => {
    timer = new PomodoroTimer();
  });

  it('should start the timer', () => {
    timer.start(25); // Запускаем таймер на 25 минут
    expect(timer.isRunning).toBe(true);
    expect(timer.getTimeLeft()).toBe(25 * 60); // Проверяем, что установлено 25 минут
  });

  it('should pause the timer', () => {
    timer.start(25);
    timer.pause();
    expect(timer.isRunning).toBe(false);
  });

  it('should resume the timer', () => {
    timer.start(25);
    timer.pause();
    timer.resume();
    expect(timer.isRunning).toBe(true);
  });

  it('should reset the timer', () => {
    timer.start(25);
    timer.reset();
    expect(timer.isRunning).toBe(false);
    expect(timer.getTimeLeft()).toBe(0);
  });

  it('should complete a Pomodoro session', () => {
    jest.useFakeTimers();
    timer.start(25);
    jest.advanceTimersByTime(25 * 60 * 1000); // Продвигаем время на 25 минут
    expect(timer.isRunning).toBe(false);
    expect(timer.getTimeLeft()).toBe(0);
  });
});
