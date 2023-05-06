let data = JSON.parse(localStorage.getItem("data")) || [];
let tbody = document.getElementById("tbody");
let form = document.getElementById("list-data");
let fromSearch = document.getElementById("form-search");
let input = document.getElementById("search");
let updateIndex = undefined;
function renderdata() {
  tbody.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    tbody.innerHTML =
      tbody.innerHTML +
      `<tr id=${data[i].id}>
            <th>
            <input type="checkbox" />
            </th>
            <th>${i + 1}</th>
            <td class ="title">${data[i].title}</td>
            <td>${data[i].title_detail}</td>
            <td class ="content">${data[i].content}</td>
            <td class ="content">${data[i].content_detail}</td>
            <td class ="content">${data[i].content_detail_child}</td>
            <td class="style-img"> 
                <input type="image" src="${data[i].Img}" alt="">
             </td>
            <td class="style-img"> 
                <input type="image" src="${data[i].Img_detail}" alt="">
             </td>
            <td class="style-img"> 
                <input type="image" src="${data[i].Img_detail_child}" alt="">
             </td>
            <td>${data[i].creartAt}</td>
            <td>${data[i].author}</td>
            <td>${data[i].status}</td>
            <td>
            <button id="btn-edit" class="btn-edit" type="submit">Edit</button>
            <button id="btn-delete" class="btn-delete" type="submit">
              Delete
            </button>
          </td>
        </tr>
          `;
  }
}
renderdata();

form.onsubmit = function (e) {
  e.preventDefault();
  if (
    form.title.value == "" ||
    form.title_detail.value == "" ||
    form.content.value == "" ||
    form.content_detail.value == "" ||
    form.content_detail_child.value == "" ||
    form.Img.value == "" ||
    form.Img_detail.value == "" ||
    form.Img_detail_child.value == "" ||
    form.creartAt.value == "" ||
    form.author.value == "" ||
    form.status.value == ""
  ) {
    alert("nhập đầy đủ thông tin mày ơi");
  } else {
    let newdata = {
      id: Math.floor(Math.random() * 100000000000),
      title: form.title.value,
      title_detail: form.title.value,
      content: form.content.value,
      content_detail: form.content.value,
      content_detail_child: form.content.value,
      Img: form.Img.value,
      Img_detail: form.Img.value,
      Img_detail_child: form.Img.value,
      creartAt: form.creartAt.value,
      author: form.author.value,
      status: form.status.value,
    };
    data.push(newdata);
    localStorage.setItem("data", JSON.stringify(data));
    alert("bạn đã nhập thành công ");
    renderdata();
  }
   
};
//edit
tbody.onclick = function (e) {
  if (e.target.classList.contains("btn-edit")) {
    let id = e.target.parentElement.parentElement.id;
    let td = e.target.parentElement.parentElement;
    console.log();
    console.log(td);
    let findIndex = -1;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === Number(id)) {
        findIndex = i;
      }
    }

    if (findIndex > -1) {
      updateIndex = findIndex;
      console.log(updateIndex);
      let find = data[findIndex];
      console.log(find);
      td.innerHTML = `<tr id=${find.id}>
                            <th>
                            <input type="checkbox" />
                            </th>
                            <th></th>
                            <td><input type = "text" value = "${find.title}"</td>
                            <td><input type = "text" value = "${find.title_detail}"</td>
                            <td><input type = "text" value = "${find.content}"</td>
                            <td><input type = "text" value = "${find.content_detail}"</td>
                            <td><input type = "text" value = "${find.content_detail_child}"</td>
                            <td class="style-img"> 
                                <input type = "text"  src="${find.Img} alt="">
                            </td>
                            <td class="style-img"> 
                                <input type = "text"  src="${find.Img_detail} alt="">
                            </td>
                            <td class="style-img"> 
                                <input type = "text"   src="${find.Img_detail_child} alt="">
                            </td>
                            <td><input type = "text" value = "${find.creartAt}"</td>
                            <td><input type = "text" value = "${find.author}"</td>
                            <td><input type = "text" value = "${find.status}"</td>
                            <td>
                            <button type="button" class="btn btn-info btn-confirm">Confirm</button>
                            <button type="button" class="btn btn-danger btn-cancel">Cancel</button>
                            </td>
                        </tr>`;
    }
  }
  if (e.target.classList.contains("btn-confirm")) {
    let title =
      e.target.parentElement.parentElement.children[2].children[0].value;
    let title_detail =
      e.target.parentElement.parentElement.children[3].children[0].value;
    let content =
      e.target.parentElement.parentElement.children[4].children[0].value;
    let content_detail =
      e.target.parentElement.parentElement.children[5].children[0].value;
    let content_detail_child =
      e.target.parentElement.parentElement.children[6].children[0].value;
    let Img =
      e.target.parentElement.parentElement.children[7].children[0].value;
    let Img_detail =
      e.target.parentElement.parentElement.children[8].children[0].value;
    let Img_detail_child =
      e.target.parentElement.parentElement.children[9].children[0].value;
    let creartAt =
      e.target.parentElement.parentElement.children[10].children[0].value;
    let author =
      e.target.parentElement.parentElement.children[11].children[0].value;
    let status =
      e.target.parentElement.parentElement.children[12].children[0].value;
    data[updateIndex] = {
      ...data[updateIndex], //SAO CHEP CAC THUOC TINH VAO TRONG OBJECT
      title: title,
      title_detail: title_detail,
      content: content,
      content_detail: content_detail,
      content_detail_child: content_detail_child,
      Img: Img,
      Img_detail: Img_detail,
      Img_detail_child: Img_detail_child,
      creartAt: creartAt,
      author: author,
      status: status,
    };
    localStorage.setItem("data", JSON.stringify(data));
    renderdata();
  } else if (e.target.classList.contains("btn-cancel")) {
    alert("bạn có chắc chắc huỷ bỏ ");
    renderdata();
  }

  //xoá
  if (e.target.classList.contains("btn-delete")) {
    let deleteElement = e.target.parentElement.parentElement;
    console.log(deleteElement.id);
    for (let i = 0; i < data.length; i++) {
      if (parseInt(deleteElement.id) === data[i].id) {
        data.splice(i, 1);
      }
    }
    alert("nếu xoa dữ liệu sẽ bị mất vĩnh viễn");
    localStorage.setItem("data", JSON.stringify(data));
    renderdata();
  }
};
let content = document.querySelectorAll(".content");
     
content.forEach(function (item) {
  item.addEventListener("click", function (e) {
      e.target.innerHTML = "..."
  });
});


let btnSearch = document.getElementById("btn-search");
let inputSearch = document.getElementById("search");
function display(id) {
    let tr =document.querySelectorAll("tr");
    tr.forEach((trItem)=>{
        if (id.includes(trItem.id) ) {
            trItem.style.display ="block"
        }else{
            trItem.style.display ="none"
        }
    })
}
btnSearch.onclick = function(e){
    e.preventDefault();
    let inputs = [];
    let inputText = inputSearch.value.toLowerCase();
    let titles = document.querySelectorAll(".title");
    titles.forEach((title)=>{
        if(title.textContent.toLowerCase().includes(inputText)){
            inputs.push(title.parentElement.id);
        }
    });
    display(inputs);
};

