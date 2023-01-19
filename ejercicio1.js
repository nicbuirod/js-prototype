function Person(nombre, peso, altura) {
  (this.nombre = nombre),
    (this.peso = peso),
    (this.altura = altura),
    (this.saludar = (nombre) => {
      return `Hola ${nombre}, me llamo ${this.nombre}`;
    }),
    (this.bmi = () => {
      return this.peso / Math.pow(this.altura, 2);
    });
}

const pedro = new Person("Pedro", 72, 1.5);

console.log(pedro.saludar("Maria"));
console.log(pedro.bmi());
