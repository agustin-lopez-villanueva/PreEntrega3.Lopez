// Función para calcular la cuota del préstamo
function calcularCuota() {
    const monto = parseFloat(document.getElementById("monto").value);
    const plazo = parseInt(document.getElementById("plazo").value);
    const interesAnual = 0.1; // Tasa de interés anual fija del 10%
    
    // Cálculo de la cuota mensual utilizando la fórmula de amortización de préstamos
    const interesMensual = interesAnual / 12; // Tasa de interés mensual
    const cuotaMensual = monto * (interesMensual / (1 - Math.pow(1 + interesMensual, -plazo)));
    
    // Mostrar la cuota mensual en el elemento con id "cuota"
    document.getElementById("cuota").textContent = `Cuota mensual: $${cuotaMensual.toFixed(2)}`;
    
    // Guardar los datos del préstamo en el almacenamiento local
    const datosPrestamo = { monto: monto, plazo: plazo, cuota: cuotaMensual.toFixed(2) };
    localStorage.setItem('datosPrestamo', JSON.stringify(datosPrestamo));
  }
  
  // Función para recuperar los datos del préstamo del almacenamiento local
  function recuperarDatosPrestamo() {
    const datosPrestamoJSON = localStorage.getItem('datosPrestamo');
    if (datosPrestamoJSON) {
      const datosPrestamo = JSON.parse(datosPrestamoJSON);
      return datosPrestamo;
    } else {
      return null;
    }
  }
  
  // Recuperar y mostrar los datos del préstamo al cargar la página
  document.addEventListener('DOMContentLoaded', function() {
    const datosRecuperados = recuperarDatosPrestamo();
    if (datosRecuperados) {
      document.getElementById("monto").value = datosRecuperados.monto;
      document.getElementById("plazo").value = datosRecuperados.plazo;
      document.getElementById("cuota").textContent = `Cuota mensual: $${datosRecuperados.cuota}`;
    }
  });