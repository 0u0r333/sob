const list = [
    {
        id: 1,
        title:"토양이",
        color:"회돌",
        category:"토양이",
        img:'../img/page1/g1.png',
    },
    {
        id: 2,
        title:"토양이",
        color:"흑돌",
        category:"토양이",
        img:'../img/page1/g2.png',
    },
    {
        id: 3,
        title:"쫀드기토끼",
        color:"",
        category:"쫀드기토끼",
        img:'../img/page1/g3.png',
    },
    {
        id: 4,
        title:"솜사탕할아범",
        color:"",
        category:"holiday",
        img:'../img/page1/g4.png',
    },
    {
        id: 5,
        title:"인기쟁이 챠챠",
        color:"",
        category:"챠챠와로베",
        img:'../img/page1/g5.png',
    },
    {
        id: 6,
        title:"챠챠친구 로베",
        color:"",
        category:"챠챠와로베",
        img:'../img/page1/g6.png',
    },
    {
        id: 7,
        title:"긴꼬양",
        color:"흑돌",
        category:"긴꼬양",
        img:'../img/page1/g7.png',
    },
    {
        id: 8,
        title:"긴꼬양",
        color:"포도",
        category:"긴꼬양",
        img:'../img/page1/g8.png',
    },
    {
        id: 9,
        title:"무게추만두",
        color:"",
        category:"무게추만두",
        img:'../img/page1/g9.png',
    },
    {
        id: 10,
        title:"무게추만두",
        color:"grip tok",
        category:"무게추만두",
        img:'../img/page1/g10.png',
    },
    {
        id: 11,
        title:"오렌지푸딩",
        color:"",
        category:"mini",
        img:'../img/page1/g11.png',
    },
    {
        id: 12,
        title:"긴꼬양",
        color:"꼬질이",
        category:"긴꼬양",
        img:'../img/page1/g12.png',
    },
    {
        id: 13,
        title:"긴꼬양",
        color:"흰돌",
        category:"긴꼬양",
        img:'../img/page1/g13.png',
    },
    {
        id: 14,
        title:"mini ver.",
        color:"토양이 회돌",
        category:"mini",
        img:'../img/page1/g14.png',
    },
    {
        id: 15,
        title:"mini ver.",
        color:"토양이 흑돌",
        category:"mini",
        img:'../img/page1/g15.png',
    },
   
    {
        id: 16,
        title:"removable sticker",
        color:"무게추만두",
        category:"sticker",
        img:'../img/page1/g16.png',
    }
]
//console.log(list)

document.addEventListener('DOMContentLoaded', ()=>{

    const shoplist = document.querySelector('.list')
    const btnbox = document.querySelector('.btn')

    function listbox(shopItems){

        let products = shopItems.map((item)=>{
            
            return `
            <div class="product">
                <a href="./info.html">
                    <div class="title">
                        <p class="name">${item.title}</p>
                        <p class="color">${item.color}</p>
                    </div>
                    <figure>
                        <img src="${item.img}" alt=${item.title}">
                    </figure>
                </a>
            </div>
            `
        });
        products = products.join("");
        shoplist.innerHTML = products
    }
    listbox(list)

    //버튼
    function listbtn(){
        const categorys = list.reduce((value,item)=>{
            if(!value.includes(item.category)){
                value.push(item.category)
            }
            return value;
        },["전체"]);

        const categorybtns = categorys.map((category)=>{
            return `<button type="button" class="cbtn" data-id=${category}>${category}</button>`
        }).join("")

        btnbox.innerHTML = categorybtns;
        const cbtn = btnbox.querySelectorAll(".cbtn")
        console.log(cbtn)

        cbtn.forEach((btn)=>{
            btn.addEventListener('click',(e)=>{
                // console.log(e.currentTarget.dataset)
                let category = e.currentTarget.dataset.id;
                let categorylist = list.filter((shopItem)=>{
                    if(shopItem.category === category){
                        return shopItem
                    }
                });
                if(category === "전체"){
                    listbox(list);
                }else{
                    listbox(categorylist);
                }
            });
        });
    }
    listbtn();




})