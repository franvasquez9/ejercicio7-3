const fechaHoy = new Date();
console.log(fechaHoy);

fechaNacimiento = new Date(1990, 09, 14);
console.log(fechaNacimiento);

tarde = (fechaHoy.getTime() > fechaNacimiento.getTime())
console.log(tarde);

diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);

anioNacimiento = fechaNacimiento.getFullYear();
console.log(anioNacimiento);

