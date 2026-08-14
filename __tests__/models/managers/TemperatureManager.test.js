const TemperatureVO = require('../../../models/valueobjects/TemperatureVO');
const TemperatureManager = require('../../../models/managers/TemperatureManager');

describe('TemperatureManager', () => {
  test('converts 23° Celsius to Fahrenheit', () => {
    // GIVEN precondiciones antes de invocar al metodo convert
    const manager = TemperatureManager();
    const celsiusTemperature = new TemperatureVO(23, 'CELSIUS');

    // WHEN invoco a el convert
    const result = manager.convert(celsiusTemperature, 'FAHRENHEIT');

    // THEN hago validaciones 
    expect(result).toBeInstanceOf(TemperatureVO);
    expect(result.value).toBe(73.4);
    expect(result.unit).toBe('FAHRENHEIT');
  });
});