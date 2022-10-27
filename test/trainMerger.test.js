const expect = require('chai').expect;
const main = require('../trainMerger');

describe('Test to check The order of bogies for train AB (merged train) while departing from Hyderabad', () => {
  it('Should return Train_AB ENGINE ENGINE GHY GHY NJP NJP PTA NDL NDL AGA BPL NGP', () => {
    let train_AB = main(`ENGINE SLM BLR KRN HYB SLM NGP ITJ ENGINE SRR MAO NJP PNE PTA`);
    expect(train_AB).to.equal("ENGINE ENGINE GHY GHY NJP NJP PTA NDL NDL AGA BPL NGP");
  });
});