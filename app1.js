(function(d, s, id) {
    let js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.8";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook')); 
let newhot = JSON.parse(localStorage.getItem("data")) || [];
let newhot1 = JSON.parse(localStorage.getItem("data2")) || [];
let boxPost = document.getElementById("col-sm-7");
let id = JSON.parse(localStorage.getItem("id"));
      boxPost.innerHTML =
         `        <section  class="post-detail">
                        <div id="${id.id}">
                            <h3>
                                ${id.title}
                            </h3>
                            <div>
                                <p>${id.author},</p>
                                <div>
                                <span><i class="fa-regular fa-clock"></i></span>
                                <span>${id.creartAt}</span>
                                </div>
                            </div>
                        </div>

                        <audio controls>
                                <source src="horse.ogg" type="audio/ogg">
                                <source src="./img/giọng chị google.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                         </audio>


                        <div id="style-icon" class="style-icon">
                            <button class="like">
                                <span>
                                    <i class="fa-solid fa-thumbs-up"></i>
                                </span>
                                <div 
                                id="like"
                                
                                >like</div>
                            </button>
                            <button class="dislike">
                                <span>
                                    <i class="fa-solid fa-thumbs-down"></i>
                                </span>
                                <div 
                                id="dislike"  
                               
                                >dislike</div>
                            </button>
                             
                                <div class="fb-save" data-size="large"></div>
                             

                            
                        </div>

                    </section>  
                        <b>
                            ${id.title_detail}
                        </b>
                        <ul>
                            <li>nhà sản xuất nối gì trước tin gạt
                                Trấn Thành khỏi siêu tài năng nhí vì lùm xùm?
                            </li>
                            <li>
                                Hari Won đang làm gi giữa lúc 
                                Trấn Thành vắng mặt khở show truyền hình quen thuộc?
                            </li>
                            <li>
                                NSX Rap Việt và người ấy là
                                ai nói gì về sự xuất hiện của Trấn Thành trong mùa nay?
                            </li>
                        </ul>
                        
                        <section class="refer">
                            <b>
                                Tham khao thêm
                            </b>
        
                            <section class="refer-img">
                                <a href="">
                                    <img src="./img/tham khảo thêm 1.jpg" alt="">
                                    <p>
                                        Việt Nam có thêm một liên hoan phim tầm cỡ quốc tế,
                                        Nhà Bà Nữ cũng tham gia tranh giải
                                    </p>
                                </a>
                                <a href="">
                                    <img src="./img/tham khảo thêm 2.jpg" alt="">
                                    <p>
                                        vào nhà nghỉ liệu có được nghỉ
                                </p>
                                
                                </a>
                                <a href="">
                                    <img src="./img/thêm khảo thêm 3.jpg" alt="">
                                    <p>
                                        tranh cãi diễn viên Thanh Hương vào vai nghèo nhưng răng xứ sáng loá
                                </p>
                                    
                                </a>
                                <a href="">
                                    <img src="./img/thêm khảo thêm4.jpg" alt="">
                                    <p>
                                phản ứng của lý hải khi nói về phim mới
                                mà khán gỉa bên dươi yêuu cầu "khóc đi"
                                    </p>
                                </a>
                                
                            </section>
        
                            <p>
                                ${id.content}
                            </p><br>
        
                            <div class="post">
                                <p>
                                     ${id.content_detail}
                                </p>
                                <b  >
                                    "Loá mắt" trước căn hộ triệu đô của Trấn Thành:
                                    Thiết kế sang trọng như khách sạn 5 sao, 
                                    view bạc tỷ nhìn ra thành phố
                                    Về những lùm xùm vừa qua,
                                </b>
                            </div>
                            <div>
                                ${id.content_detail_child}
                            </div>
        
                            <div>
                                <img src="${id.Img_detail}" alt="">
                            </div>
                            <p>
                               ${id.content}
                            </p>
                             
                            <div>
                                <img src="${id.Img_detail_child}" alt="">
                                 
                            </div>

                           <section class="view" >
                                <div>
                                    <button>
                                        <span>
                                        <i class="fa-solid fa-thumbs-up"></i>
                                        </span> 
                                        Thích
                                     </button>
                                     <button>
                                        chia sẻ
                                     </button>
                                </div>
                                <a href="./login.html">
                                    <button>
                                        <span>
                                            <i class="fa-solid fa-eye"></i>
                                        </span>
                                        Tăng view
                                    </button>
                                </a>
                           </section>

                           <p>
                            <img src="./img/quang cao tra xanh.png" alt="">
                           </p>

                           <section class="Categories">
                             <h3>
                                Tin cùng chuyên mục
                             </h3>
                             <div>
                                    <select>
                                        <option value="">ngày 1</option>
                                        <option value="">ngày 2</option>
                                    </select>
                                    <select>
                                        <option value="">tháng 1</option>
                                        <option value="">tháng 2</option>
                                    </select>
                                    <select>
                                        <option value="">2023</option>
                                        <option value="">2022</option>
                                        <option value="">2021</option>
                                        <option value="">2020</option>
                                    </select>
                             </div>
                           </section>

                           <section class="Categories-img">
                                <div>
                                    <a href="">
                                        <img src="./img/5.png" alt="">
                                        <strong>
                                            "Vua hài đất Bắc" Xuân Hinh 
                                            lên tiếng việc bị đoàn hát hội chợ lợi dụng tên tuổi lừa bán vé
                                        </strong>
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <img src="./img/9.jpg" alt="">
                                        <strong>
                                            Ba con gái của NSƯT Kim Tử Long: 
                                            Xinh đẹp, tài năng, 2 người theo nghệ thuật
                                        </strong>
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <img src="./img/10.jpg" alt="">
                                        <strong>
                                            Mẹ của 2 sao nhí Bố Ơi Mình Đi Đâu 
                                            Thế bị chỉ trích thậm tệ vì lộ bằng chứng
                                             phân biệt đối xử giữa con trai và con gái
                                        </strong>
                                    </a>
                                </div>

                            </section>
                            <section class="Categories-img">
                                <div>
                                    <a href="">
                                        <img src="./img/11.jpg" alt="">
                                        <strong>
                                            Bà xã Lee Seung Gi nhiều lần thay đổi họ tên

                                        </strong>
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <img src="./img/14.jpg" alt="">
                                        <strong>
                                            Cao Thái Hà hé lộ trọn vẹn căn hộ cao cấp tặng mẹ ruột tại TP.HCM:
                                             Phòng khách rộng rãi, có 1 chi tiết gây xúc động
                                        </strong>
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <img src="./img/13.jpg" alt="">
                                        <strong>
                                            3 nghệ sĩ bị đài truyền hình quốc gia Hàn cấm sóng
                                        </strong>
                                    </a>
                                </div>
                           </section>
                        </section>
          `;
let styleIcon = document.getElementById("style-icon");
let iconLike = document.getElementById("like");
let icondisLike = document.getElementById("dislike");
styleIcon.onclick = function (e) {
let count = 0;
  count++;
  if (e.target.classList.contains("like")) {
    iconLike.innerHTML = `like ${count}`;
    icondisLike.innerHTML = `Dislike`;
  }
  if (e.target.classList.contains("dislike")) {
    icondisLike.innerHTML = `Dislike ${count}`;
    iconLike.innerHTML = `like`;
            
  }
}
let menu = document.getElementById("menu")
let list_ul = document.getElementById("list_ul")
list_ul.style.display= "none"
let check = true
menu.onmouseout = function(){
    
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


