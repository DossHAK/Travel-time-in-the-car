let a = prompt ('Введите расстояние между двумя городами в киллометрах: ');
let b = prompt ('Введите время за которое хотите добраться: ');
let c = a / b;

alert ('Вам необходимо двигаться со скоростью  ' + Math.trunc(c) + ' км/ч чтобы успеть вовремя');
