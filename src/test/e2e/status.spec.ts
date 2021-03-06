import { config } from 'dotenv';

config();
import { ETHMonitor } from '../../service/coin/eth/monitor';
import { CrUSDCMonitorSingleton } from '../../service/token/crusdc/monitor';

jest.setTimeout(30000);
describe('test status when block generated', () => {
  const consoleSpy = jest.spyOn(global.console, 'info');
  afterEach(() => {
    consoleSpy.mockReset();
  });
  it('should print info log', async () => {
    await ETHMonitor['_newBlockListener'](12902147);
    expect(consoleSpy).toBeCalledTimes(1);
    expect(consoleSpy.mock.calls[0][0]).toContain('#12902147 supply rate:');
    expect(consoleSpy.mock.calls[0][0]).toContain('#12902147 borrow rate:');
    const splitArray = consoleSpy.mock.calls[0][0].split(' ');
    expect(typeof parseInt(splitArray[3].replace('\n'))).toBe('number');
    expect(typeof parseInt(splitArray[7])).toBe('number');
  });
  it('should not print info log', async () => {
    const crusdc = CrUSDCMonitorSingleton.getInstance();
    await crusdc.ready();
    await crusdc.fetchEvent(12901600);
    expect(consoleSpy).toBeCalledTimes(0);
  });
});