function Auto() {
  (this.velocidad = 0),
    (this.acelerar = (num1) => {
      return (this.velocidad = this.velocidad + num1);
    }),
    (this.frenar = (num2) => {
      this.velocidad = this.velocidad - num2;
      if (this.velocidad >= 0) {
        return this.velocidad;
      } else {
        return (this.velocidad = 0);
      }
    });
}

const a1 = new Auto();

console.log(a1.velocidad);

a1.acelerar(1);
a1.acelerar(2);
console.log(a1.velocidad);

a1.frenar(2);
console.log(a1.velocidad);

a1.frenar(3);
console.log(a1.velocidad);
