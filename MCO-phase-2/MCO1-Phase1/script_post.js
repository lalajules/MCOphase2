let form = document.getElementById("form");
let input = document.getElementById("input");
let posts = document.getElementById("posts");
let msg = document.getElementById("msg");
let image = document.getElementById("upload");
let img = document.querySelector("img");
let change = document.getElementById("image-input");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    img.src = getName();
    formValidation();
  });


function replaceWrite () {
  document.getElementById("replace").innerHTML = document.getElementById("desc").value;
  document.getElementById("desc").value = " ";
 }

 function replaceWrite2 () {
  document.getElementById("replace2").innerHTML = document.getElementById("desc2").value;
  document.getElementById("desc2").value = " ";
 }

 function replaceWrite3 () {
  document.getElementById("replace3").innerHTML = document.getElementById("desc3").value;
  document.getElementById("desc3").value = " ";
 }

 function replaceWrite4 () {
  document.getElementById("replace4").innerHTML = document.getElementById("desc4").value;
  document.getElementById("desc4").value = " ";
 }

 function replaceWrite5 () {
  document.getElementById("replace5").innerHTML = document.getElementById("desc5").value;
  document.getElementById("desc5").value = " ";
 }


function getName (){
    var imgval = document.getElementById("image-input").value;
    var filename = imgval.replace(/^.*\\/, "");
    return filename;
}

  let formValidation = () => {
    if (input.value === "") {
      msg.innerHTML = "Post cannot be blank";
      console.log("failure");
    } else {
      console.log("successs");
      msg.innerHTML = "";
      acceptData();
    }
  };

let data = {};


let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};


  let createPost = () => {
  posts.innerHTML += `
  <div class="posts-container" id="6">
  <div class="post-header">
      <div class="header-body">
          <div class="post-info">
              <h1 class="post-title" >@mayksel</h1>                                  
              <div class="post-date">
                  Las Pinas City
              </div>
          </div>
      </div>
  </div>
  <div>
      <img class="content-image" src="profile_main.jpg" />
  </div>
  <div class="post-footer">
          <div class="description-title">
              <h3 class ="label">October 13, 2022</h3>
          </div>
          <div class="desc-body">
            <span>${data.text}</span>
        </div>
     
  </div>
  <ul class="footer-buttons">
      <li id="like"></li>
      <li id="comment"></li>
  </ul>
</div>
`;
  input.value = "";
};

//Reference: https://www.freecodecamp.org/news/learn-crud-operations-in-javascript-by-building-todo-app/