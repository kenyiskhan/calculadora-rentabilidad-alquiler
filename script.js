document.getElementById('calcForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const precioCompra = parseFloat(document.getElementById('precioCompra').value);
  const ingresosMensuales = parseFloat(document.getElementById('ingresosMensuales').value);
  const gastosMensuales = parseFloat(document.getElementById('gastosMensuales').value);
  const ocupacion = parseFloat(document.getElementById('ocupacion').value) / 100;
  const deducciones = parseFloat(document.getElementById('deducciones').value);
  const impuestoRenta = parseFloat(document.getElementById('impuestoRenta').value) / 100;

  const ingresosAnuales = ingresosMensuales * 12;
  const gastosAnuales = gastosMensuales * 12;
  const ingresosNetosAnuales = (ingresosAnuales * ocupacion) - gastosAnuales;
  const ingresosNetosAnualesDespuesDeducciones = ingresosNetosAnuales - deducciones;
  const impuestos = ingresosNetosAnualesDespuesDeducciones * impuestoRenta;
  const beneficiosNetosAnuales = ingresosNetosAnualesDespuesDeducciones - impuestos;
  const rentabilidadAnual = (beneficiosNetosAnuales / precioCompra) * 100;

  document.getElementById('resultado').innerText = `Rentabilidad Anual: ${rentabilidadAnual.toFixed(2)}%`;
});
