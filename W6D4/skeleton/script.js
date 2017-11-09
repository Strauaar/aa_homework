document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  let el = document.querySelector(".favorite-submit");
  el.addEventListener("click", (e) => {
    e.preventDefault();
    let inputVal = document.querySelector(".favorite-input").value;
    let restaurantsUl = document.querySelector("#restaurants");
    let li = document.createElement("li");
    li.innerHTML = inputVal;
    restaurantsUl.appendChild(li);
    document.querySelector(".favorite-input").value = "";

  })

  // adding new photos

  // --- your code here!

  let photoButton = document.querySelector(".photo-show-button");
  photoButton.addEventListener("click", (e) => {
    let form = document.querySelector(".photo-form-container");

    if (form.className === "photo-form-container") {
      form.className = "photo-form-container hidden";
    } else {
      document.querySelector(".photo-form-container").className = "photo-form-container";
    }
  });

  let photoSubmitButton = document.querySelector(".photo-url-submit");
  photoSubmitButton.addEventListener("click" , (e) => {
    e.preventDefault();
    let el = document.querySelector(".photo-url-input");
    let li = document.createElement("li");
    let inputVal = el.value;
    let img = document.createElement("img");
    img.src = inputVal;
    let photos = document.querySelector(".dog-photos");
    li.appendChild(img);
    photos.appendChild(li);
    document.querySelector(".photo-url-input").value = "";

  })


});
