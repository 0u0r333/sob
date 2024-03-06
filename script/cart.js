$(function(){
    //-+ 버튼으로 수량조절 + 금액 조절
    const minus1 = document.querySelector('.minus1')
    const plus1 = document.querySelector('.plus1')
    const display1 = document.querySelector('.qty_display1')
    const price1 = document.querySelector('.price_display1')

    const minus2 = document.querySelector('.minus2')
    const plus2 = document.querySelector('.plus2')
    const display2 = document.querySelector('.qty_display2')
    const price2 = document.querySelector('.price_display2')

    
    let qty1 = 0;
    minus1.addEventListener('click',(event)=>{
        if(qty1 > 1){
            qty1 -= 1 ;
        }else{
            qty1 = 1;
        }

        display1.innerHTML = `<p class="qty_display1">${qty1}</p>`
        price1.innerHTML = `<p class="total_display">${qty1 * 58000}</p>`
    });

    plus1.addEventListener('click',(event)=>{
        qty1 = qty1+1;
    
        display1.innerHTML = `<p class="qty_display1">${qty1}</p>`
        price1.innerHTML = `<p class="total_display">${qty1 * 58000}</p>`
    });

    let qty2 = 0;
    minus2.addEventListener('click',(event)=>{
        if(qty2 > 1){
            qty2 -= 1 ;
        }else{
            qty2 = 1;
        }

        display2.innerHTML = `<p class="qty_display1">${qty2}</p>`
        price2.innerHTML = `<p class="total_display">${qty2 * 32000}</p>`
    });

    plus2.addEventListener('click',(event)=>{
        qty2 = qty2+1;
    
        display2.innerHTML = `<p class="qty_display1">${qty2}</p>`
        price2.innerHTML = `<p class="total_display">${qty2 * 32000}</p>`
    });


    



});