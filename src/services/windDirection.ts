export const windDirection = (deg: number) => {
  let result;
  const directions = [
    '⬆ північний',
    '↗ північно-східний',
    '→ східний',
    '↘ південно-східний',
    '⬇ південний',
    '↙ південно-західний',
    '⬅ західний',
    '↖ північно-західний',
  ];
  result = directions[Math.round(deg / 45) % 8];
  return result;
};

export const windStrength = (speed: number) => {
  let result;
  if (speed < 0.3) {
    result = 'Штиль';
  } else if (speed > 0.3 && speed <= 1.5) {
    result = 'Тихий';
  } else if (speed > 1.6 && speed <= 3.4) {
    result = 'Легкий';
  } else if (speed > 3.4 && speed <= 5.4) {
    result = 'Слабкий';
  } else if (speed > 5.5 && speed <= 7.9) {
    result = 'Помірний';
  } else if (speed > 8.0 && speed <= 10.7) {
    result = 'Свіжий';
  } else if (speed > 10.8 && speed <= 13.8) {
    result = 'Сильний';
  } else if (speed > 13.9 && speed <= 17.1) {
    result = 'Міцний';
  } else if (speed > 17.2 && speed <= 20.7) {
    result = 'Дуже міцний';
  } else if (speed > 20.8 && speed <= 24.4) {
    result = 'Шторм';
  } else if (speed > 24.5 && speed <= 28.4) {
    result = 'Сильний шторм';
  } else if (speed > 28.5 && speed <= 32.6) {
    result = 'Жорстокий шторм';
  } else if (speed > 32.7) {
    result = 'Ураган';
  }
  return result?.trim().toLowerCase();
};
