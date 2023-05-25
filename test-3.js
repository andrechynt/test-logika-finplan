const validatePassword = (text) => {
  const regexLongChar = /.{8,28}/;
  const regexFirstChar = /^[a-zA-Z]/;
  const regexMustHaveUpLowChar = /(?=.*[a-z])(?=.*[A-Z])/;
  const regexMustHaveNumber = /(?=.*[0-9])/;
  let message = "";

  if (!regexLongChar.test(text)) {
    message = "Kata sandi harus minimal 8-32 kata";
  } else if (!regexFirstChar.test(text)) {
    message = "Karakter awal tidak boleh angka";
  } else if (!regexMustHaveUpLowChar.test(text)) {
    message = "Harus memiliki huruf kapital dan huruf kecil";
  } else if (!regexMustHaveNumber.test(text)) {
    message = "Harus memiliki angka";
  } else {
    message = "Kata sandi valid";
  }

  return message;
};

console.log(validatePassword("5andiwara"));
console.log(validatePassword("sandiwar4"));
console.log(validatePassword("Sandiwar4"));
