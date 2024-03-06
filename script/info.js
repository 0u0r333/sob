$(function(){
//슬라이드 버튼 누르면 사진 슬라이딩
const item_box = document.querySelector(".item_box");
const item = document.querySelectorAll(".item");
const pre = document.querySelector(".pre");
const next = document.querySelector(".next");
let currentIdx = 0;

function goSlide(idx){
    item_box.style.left=idx * -100 + '%';
    item_box.style.transition='1s';
    currentIdx=idx;
}

next.addEventListener('click',()=>{
    if(currentIdx<item.length-1){
        goSlide(currentIdx+1)
    }
});

pre.addEventListener('click',()=>{
    if(currentIdx>0){
        goSlide(currentIdx-1)
    }
});


//슬라이더 번호 매기기
const slideItem = document.querySelectorAll('.item').length;
const count = document.querySelector('.count');
const btns = document.querySelectorAll('.btn');
let counter = 0;

const updateCounter = () => {
    count.innerHTML = `<p>(${counter + 1}/${slideItem})</p>`;
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('pre')) {
            if (counter > 0) {
                counter = counter - 1;
            } else {
                counter = 0;
            }
        }
        if (button.classList.contains('next')) {
            if (counter < slideItem - 1) {
                counter = counter + 1;
            } else {
                counter = slideItem - 1;
            }        }
        updateCounter();
    });
});



// qty - + 버튼 누르면 수량변경 + total 에서 금액 바뀌도록
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const display = document.querySelector(".qty_display")
const total = document.querySelector(".total_display")

let qty = 0;
minus.addEventListener('click',(event)=>{
  if(qty > 1 ){
        qty -= 1;
    }else{
        qty=1;
    }

    display.innerHTML = `<p class="qty_display">${qty}</p>`
    total.innerHTML = `<p class="total_display">${(qty * 58000).toLocaleString()}</p>`
});

plus.addEventListener('click',(event)=>{
    qty = qty+1;

    display.innerHTML = `<p class="qty_display">${qty}</p>`
    total.innerHTML = `<p class="total_display">${(qty * 58000).toLocaleString()}</p>`
})





});