var startYear = document.querySelector("#start-year");
var startSemester = document.querySelector("#start-semester");

var currYear = document.querySelector("#curr-year");
var currSemester = document.querySelector("#curr-semester");

var tfc = document.querySelector("#tfc");
var tic = document.querySelector("#tic");
var va = document.querySelector("#va");
var vaa = document.querySelector("#vaa");
var voa = document.querySelector("#voa");

var result = document.querySelector("#result");

// Listeners
[startYear, startSemester, currYear, currSemester, tic, va, voa].forEach(
  (item) => {
    item.addEventListener("change", () => {
      // Clean
      result.innerText = 0;
      tfc.value = "";
      vaa.value = "";

      calcTFC();
      calcVAA();
      calcResult();
    });
  }
);

// Função de Cálculo do TFC
function calcTFC() {
  if (!startYear.value || !currYear.value) return;

  let startYear_ = parseInt(startYear.value);
  let startSemester_ = parseInt(startSemester.value);
  let currYear_ = parseInt(currYear.value);
  let currSemester_ = parseInt(currSemester.value);

  let value = (currYear_ - startYear_) * 2 + (currSemester_ - startSemester_);

  //
  tfc.value = value;
}

// Função de Cálculo do VAA
function calcVAA() {
  if (!tfc.value || !tic.value || !va.value) return;

  let tfc_ = parseInt(tfc.value);
  let tic_ = parseInt(tic.value);
  let va_ = parseInt(va.value);

  let value = va_ * Math.min(tfc_, tic_);

  //
  vaa.value = value;
}

// Função de Cálculo do Result
function calcResult() {
  if (!vaa.value || !voa.value) return;

  let vaa_ = parseInt(vaa.value);
  let voa_ = parseInt(voa.value);

  let value = vaa_ - voa_;

  //
  result.innerText = value;
}

// Screenshort
document.querySelector("#screenshot").addEventListener("click", (e) => {
  e.preventDefault();

  const target = document.querySelector("#container");
  html2canvas(target).then((canvas) => {
    try {
      var a = document.createElement("a");
      a.href = canvas
        .toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      a.download = "ifce-transferidos-diplomados.jpg";
      a.click();

	  1/0
      // document.body.appendChild(canvas);
    } catch (err) {
      alert(
        "Infelizmente seu navegador não permite o " +
          "download da imagem da página!"
      );
    }
  });
});

// Popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))