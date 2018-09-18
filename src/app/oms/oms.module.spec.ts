import { OmsModule } from './oms.module';

describe('OmsModule', () => {
  let omsModule: OmsModule;

  beforeEach(() => {
    omsModule = new OmsModule();
  });

  it('should create an instance', () => {
    expect(omsModule).toBeTruthy();
  });
});
