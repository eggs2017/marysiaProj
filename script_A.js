
function przeliczBMI() 
{
  const wagaInput = document.getElementById('waga');
  const wzrostInput = document.getElementById('wzrost');
  //const wynikBMI = document.getElementById('wynikBMI');

  const waga = Number(wagaInput.value);
  const wzrost = Number(wzrostInput.value) / 100; // Przeliczenie wzrostu na metry

  if (waga <= 0 || wzrost <= 0) 
  {
    wynikBMI_ElemId.textContent = 'Podaj poprawne wartości wagi i wzrostu.';
    return;
  }
  const res = waga / (wzrost * wzrost);
  wynikBMI_ElemId.textContent = "Twój współczynnik BMI wynosi: " + res 
  kategoriaBMI_ElemId.textContent =  "Kategoria BMI: " + interpretujBMI(res);
}

function interpretujBMI(bmi) {
  if (bmi < 18.5) {
    return 'Niedowaga';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return 'Prawidłowa waga';
  } else if (bmi >= 25 && bmi < 29.9) {
    return 'Nadwaga';
  } else {
    return 'Otyłość';
  }
}