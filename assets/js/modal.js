//highlight
const highlight = function () {
  hljs.highlightAll();
};

//modal
const modal1 = function () {
  document.querySelector(".source-btn1").addEventListener("click", () => {
    document.querySelector("#modal1").classList.add("show");
    document.querySelector("#modal1").classList.remove("hide");
  });
  document.querySelector(".modal-close1").addEventListener("click", () => {
    document.querySelector("#modal1").classList.add("hide");
  });
};

const modal2 = function () {
  document.querySelector(".source-btn2").addEventListener("click", () => {
    document.querySelector("#modal2").classList.add("show");
    document.querySelector("#modal2").classList.remove("hide");
  });
  document.querySelector(".modal-close2").addEventListener("click", () => {
    document.querySelector("#modal2").classList.add("hide");
  });
};

const modal3 = function () {
  document.querySelector(".source-btn3").addEventListener("click", () => {
    document.querySelector("#modal3").classList.add("show");
    document.querySelector("#modal3").classList.remove("hide");
  });
  document.querySelector(".modal-close3").addEventListener("click", () => {
    document.querySelector("#modal3").classList.add("hide");
  });
};

//tabmenu
const tabMenu = function () {
  const tabBtn = document.querySelectorAll(".view-title ul li");
  const tabCont = document.querySelectorAll(".view-cont > div");

  tabBtn.forEach((btn, btni) => {
    btn.addEventListener("click", () => {
      //내가 클릭한건 active추가
      tabBtn.forEach((btn) => {
        btn.classList.remove("active");
      }); //모든 클래스 active 삭제
      btn.classList.add("active"); //클릭한 tabBtn에만 클래스 active 푸가

      //모든 컨텐츠 박스 안보이게
      tabCont.forEach((cont) => {
        cont.style.display = "none";
      });

      //내가 클릭한 콘텐츠 박스를 보이게
      // tabCont.forEach((cont, conti) => {
      //     if(conti == btni){
      //         cont.style.display = "block";
      //     }
      // });
      tabCont[btni].style.display = "block";
    });
  });
};