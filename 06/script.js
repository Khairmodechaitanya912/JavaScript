document.querySelector("#create").addEventListener("click", () => {
  let btnsection = document.querySelector(".btn-section");

  let Btn = document.createElement("div");
  Btn.classList.add("btn");

  let Button = document.createElement("button");
  Button.classList.add("btn-create");

  Btn.appendChild(Button);
  btnsection.appendChild(Btn);
  let btnName = document.querySelector("#btn_Name").value;
  let btnValue = document.querySelector("#btn_Value").value;

  Button.setAttribute("value", btnValue);
  Button.innerText = btnName;

  document.getElementsByTagName('input')[0].value = ''
  document.getElementsByTagName('input')[1].value = ''

  Button.addEventListener("click", () => {
    let styles = document.getElementsByTagName("p")[0].innerText;

    if (btnValue == "uppercase") {
      let txt = styles.toUpperCase();
      document.getElementsByTagName("p")[0].innerText = txt;
    }
    if (btnValue == "lowercase") {
      let txt = styles.toLowerCase();
      document.getElementsByTagName("p")[0].innerText = txt;
    }
    if (btnValue == "italic") {
        document.getElementsByTagName("p")[0].style.fontStyle = "italic";
    }
    if (btnValue == "bold") {
      document.getElementsByTagName("p")[0].style.fontWeight = "bold";
    }
  });
});
