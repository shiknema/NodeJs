var math = require('../maths');
var expect = require('chai').expect;


describe('Testing maths Library Test', () => {
  
    it('Calculate bonus test case',function(){
        
         expect(math.calculateBonus(1000,10)).to.equal(100);
                });
            
    it('Test Case Products', function(){

        expect(math.items().length).to.equal(4)
    
    });

});