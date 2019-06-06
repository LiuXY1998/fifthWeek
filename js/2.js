window.onload = function () {
    let box=document.querySelector('.box');
    // box.onclick=function () {
    //     this.classList.toggle('green');
    // };
    // box.onmouseenter=function () {
    //     this.style.borderRadius="50%";
    // };
    // box.addEventListener("click",function (e) {
    //     e= e ||window.event;
    //     console.log(e);
    // })

    box.addEventListener('click',function () {
        this.classList.toggle('green');
    });
    box.removeEventListener('click',function () {
        this.classList.toggle('green');
    });

    // box.addEventListener('click',function () {
    //     this.classList.toggle('green');
    // });

    box.addEventListener('click',fn);
    box.removeEventListener('click',fn);
    function fn() {
        let flag = this.classList.contains('green');
        if(flag){
            this.style.height='150px';
        }else{
            this.style.height='300px';
        }
    }

// //获取键盘
    // document.onkeydown=function (e) {
    //     e=e||window.event;
    //     // console.log(e);
    //     let{key , keyCode}=e;
    //     // console.log(key, keyCode);
    //
    // }

};