const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("returns 20 when no methods have been called", () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("returns 22 when the up method has been called twice", () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it("returns 19 when the down method has been called", () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
  });

  it("returns 20 when the reset method has been called", () => {
    expect(thermostat.reset()).toBe(20);
  });

  it("returns usage when current energy usage method is called", () => {
    expect(thermostat.getTemperature()).toBe(20);
    expect(thermostat.currentEnergyUsage()).toBe("MEDIUM");
  });

  it("when the default power saving mode is on, the temperature cannot get higher than 25", () => {
    thermostat.setPowerSavingMode(true);
    for (let i = 0; i < 15; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
    expect(thermostat.currentEnergyUsage()).toBe("MEDIUM");
  });

  it("cannot have temperature lower than 10", () => {
    thermostat.setPowerSavingMode(true);
    for (let i = 0; i < 15; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10);
    expect(thermostat.currentEnergyUsage()).toBe("LOW");
  });

  it("when power saving mode is off, the temperature cannot get higher than 32", () => {
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 15; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32);
    expect(thermostat.currentEnergyUsage()).toBe("HIGH");
  });
});
