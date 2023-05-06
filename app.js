
let newhot = JSON.parse(localStorage.getItem("data")) || [];
let boxPost = document.getElementById("News-hot");
function renderPost() {
  boxPost.innerHTML = "";
  for (let i = 0; i < newhot.length; i++) {
    boxPost.innerHTML =
      boxPost.innerHTML +
      `
      <div class="News-hot-list">
        <a id="${newhot[i].id}" href="#">
          <img src="${newhot[i].Img}" class=" w-100  " alt="" />
          <b>${newhot[i].title}</b>
        </a>
      </div>
    
    `;
  }
}

renderPost();
let newhotlist = document.querySelectorAll(".News-hot-list");
newhotlist.forEach(x => {
    x.addEventListener("click", function(e){
        for (let key in newhot){
            if(e.target.getAttribute("src") == newhot[key].Img){
                localStorage.setItem("id", JSON.stringify(newhot[key]));
                window.location.href = "http://127.0.0.1:5500/index1.html";
            }
        }
    })
})

let newhot1 = JSON.parse(localStorage.getItem("data2")) || [];
function renderPost1() {    
let boxNewUpdate = document.getElementById("box-News-update")
    for (let i = 0; i < newhot1.length; i++) {
        boxNewUpdate.innerHTML += `
        <div class="News-update">
                            <div>
                                <img src="${newhot1[i].Img}" alt="" />
                            </div>
                            <div>
                                <b>${newhot1[i].title}</b>
                                <p>${newhot1[i].creartAt}</p>
                                <p>
                                    ${newhot1[i].title_detail}
                                </p>
                            </div>
        
      `
   
    }  
}
renderPost1()
let NewUpdate = document.querySelectorAll(".News-update");

NewUpdate.forEach(y => {
    y.addEventListener("click", function(e){
        for (let key in newhot1){
            if(e.target.getAttribute("src") == newhot1[key].Img){
              localStorage.setItem("id", JSON.stringify(newhot1[key]));
          

                window.location.href = "http://127.0.0.1:5500/index1.html";
            }
        }
    })
})



let menu = document.getElementById("menu")
let list_ul = document.getElementById("list_ul")
list_ul.style.display= "none"
let check = true
menu.onmouseleave = function(){
    
    if (check) {
        menu.innerHTML = `<span class="menu"><i class="fa-solid fa-xmark"></i></span>`
        list_ul.style.display = "block"
        list_ul.style.display = "flex"
        list_ul.style.flexWrap = "wrap"
        list_ul.style.backgroundColor = "white"
        check = false
    }
    else  {
        menu.innerHTML =`<span class="menu"><i class="fa-solid fa-ellipsis"></i></span>` 
        list_ul.style.display = "none"
        check = true
    }
}
 

