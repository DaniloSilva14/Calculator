function showInTextView(n) {
  if(validateTextView()) {
    document.form.textView.value = ''
  }
  document.form.textView.value += n;
}

function validateTextView(){
  if((document.form.textView.value == 'Infinity') 
    || (document.form.textView.value == 'Erro')
    || (document.form.textView.value == 'undefined')) {
    return true;
  }
  return false;
}

function calculate() {
  var equation = document.form.textView.value;
  try {
    var aux = eval(equation);
    if(aux != undefined){
      document.form.textView.value = aux;
    }
  } catch (error) {
    document.form.textView.value = 'Erro';
  }
}

function clearTextView() {
  document.form.textView.value = "";
}

//Função do botão 'CE'
function backTextView() {
  var exp = document.form.textView.value;
  document.form.textView.value = exp.substring(0, exp.length - 1);
}