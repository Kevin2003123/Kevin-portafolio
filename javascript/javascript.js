const showMenu = () => {
    let element = document.querySelector("#nav-links");
    let element2 = document.querySelector(".mobile-menu")
    if(element.classList.contains("hide")){
      element.classList.remove("hide");
      element2.classList.add("rotate");
    }else{
      element.classList.add("hide");
       element2.classList.remove("rotate");
    }
  }