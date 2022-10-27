const expect = require('chai').expect;
const main = require('../main');

describe('Test to check The order of bogies for train A  and Train B while arriving at Hyderabad', () => {
  it('Should return Train_A ENGINE NDL NDL GHY NJP NGP', () => {
    let train_A = main(`ENGINE SLM BLR KRN HYB SLM NGP ITJ`);
    expect(train_A).to.equal("ENGINE NDL NDL GHY NJP NGP");
  });

  it('Should return Train_B  ENGINE NDL NDL GHY NJP NGP', () => {
    let train_B = main(`ENGINE SRR MAO NJP PNE PTA`);
    expect(train_B).to.equal("ENGINE NJP GHY AGA BPL PTA");
  });
});