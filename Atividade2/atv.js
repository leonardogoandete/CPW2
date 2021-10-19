function nomes_invertido() {
    const names = [];
  
    for (let i = 10; i >= 1; i--) {
      const name = document.getElementById('n' + i).value;
      names.push(name);
    }
  
    const divHere = document.getElementById('here');
    divHere.innerHTML = names.join(', ');
  }