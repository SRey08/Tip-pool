describe("Utilities test (with setup and tear-down)", function ()
{
    beforeEach(function(){
        billAmtInput.value= 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it ('should sum total tip amount of all payments on sumPaymentTotal()', function(){

        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 300;
        tipAmtInput.value = 55;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(75);
    });

    it ('should sum total bill amount of all payments on sumPaymentTotal()', function(){

        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 300;
        tipAmtInput.value = 55;
        
        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(400);
    });

    it ('should sum tip percent of a single tip on calculatedTipPercent()', function(){

        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        
        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(30);
    });

    it('should sum tip percent of a sing tip calulatedTipPercent()', function(){
        expect(calculatedTipPercent(200, 60)).toEqual(30);
        expect(calculatedTipPercent(600, 60)).toEqual(10);
    });
    
    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');
    
        appendTd(newTr, 'test');
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
      });
    
      it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');
    
        appendDeleteBtn(newTr);
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
      });
   
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
      });

});