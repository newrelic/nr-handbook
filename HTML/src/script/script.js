// Synthetics Dashboard copy function.
function synthCopy() {
  const copyText = document.getElementById("SynthAPIDef").textContent;
  const textArea = document.createElement('textarea');
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
}

document.getElementById('butSynth').addEventListener('click', synthCopy);

// -------
//Browser Dashboard Copy function.
function browCopy() {
  const copyText1 = document.getElementById("browApiDef").textContent;
  const textArea1 = document.createElement('textarea');
  textArea1.textContent = copyText1;
  document.body.append(textArea1);
  textArea1.select();
  document.execCommand("copy");
}

document.getElementById('butBrow').addEventListener('click', browCopy);


// Functions below scroll to individual sections. 

function home(){
  window.location.href = "index.html";
}

function accName(){
  window.location.href = "userAcc.html";
}

function appNam(){
  window.location.href = "appDep.html";
}

function alerts(){
  window.location.href = "alerts.html";
}

function custAtt(){
  window.location.href = "dash.html";
}

function supp(){
  window.location.href = "support.html";
}