class Display {
  constructor(displayPreviousValue, displayCurrentValue) {
    this.displayPreviousValue = displayPreviousValue;
    this.displayCurrentValue = displayCurrentValue;
    this.calculator = new Calculator();
    this.typeOperation = undefined;
    this.previousValue = "";
    this.currentValue = "";
    this.signos = {
        sum: "+",
        divided: "/",
        multiplies: "*",
        subtract: "-"

    }
  }
  delete() {
    this.currentValue = this.currentValue.toString().slice(0,-1);
    this.printValue();
  }
  clearAll () {
    this.currentValue = "";
    this.previousValue = "";
    this.typeOperation = undefined;
    this.printValue();

  }

  computar(tipo) {
    this.typeOperation !== "total" && this.calcular();
    this.typeOperation = tipo;
    this.previousValue = this.currentValue || this.previousValue;
    this.currentValue = "";
    this.printValue();

  }

  addNumber(number) {
    if(number === "," && this.currentValue.includes(",")) return
    this.currentValue = this.currentValue.toString() + number.toString();
    this.printValue();
  }

  printValue() {
    this.displayCurrentValue.textContent = this.currentValue;
    this.displayPreviousValue.textContent  = `${this.previousValue} ${this.signos[this.typeOperation] || ''}`;
  }

  calcular() {
    const previousValue = parseFloat(this.previousValue);
    const currentValue = parseFloat(this.currentValue);

    if(isNaN(previousValue) || isNaN(currentValue) ) return
    this.currentValue = this.calculator[this.typeOperation](previousValue, currentValue);

   }
}



