var numero1 = 7;
var numero2 = 9;
// condicion numero1 no es mayor a numero2
if(numero1<= numero2) {
document.write("numero1 no es mayor que numero2");
}
//condicion numero2 es positivo
if(numero2>0) {
document.write("numero2 es positivo");
}
//condicion numero1 es negativo o distinto a cero
if(numero1<0 || numero1 !==0) {
document.write("numero1 es negativo o distinto de cero");
}
//incrementamos en 1 unidad el valor de numero1 no lo hace mayor o igual q numero2
if(++numero1<=numero2) {
    document.write("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}