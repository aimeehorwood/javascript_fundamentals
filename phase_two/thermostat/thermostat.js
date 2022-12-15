class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  getTemperature() {
    return this.temperature;
  }

  setPowerSavingMode(powerSavingMode) {
    this.powerSavingMode = powerSavingMode;
  }

  up() {
    if (this.powerSavingMode && this.temperature < 25) {
      this.temperature += 1;
    } else if (!this.powerSavingMode && this.temperature < 32) {
      this.temperature += 1;
    }
  }

  down() {
    if (this.temperature > 10) {
      this.temperature -= 1;
    }
  }

  reset() {
    this.temperature = 20;
    return this.temperature;
  }

  currentEnergyUsage() {
    if (this.temperature < 18) {
      return "LOW";
    } else if (this.temperature <= 25) {
      return "MEDIUM";
    } else {
      return "HIGH";
    }
  }
}

module.exports = Thermostat;
