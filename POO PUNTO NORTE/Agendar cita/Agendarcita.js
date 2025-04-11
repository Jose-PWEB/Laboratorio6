document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formCita");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre").value.trim();
      const especialidad = document.getElementById("especialidad").value;
      const fecha = document.getElementById("fecha").value;
      const hora = document.getElementById("hora").value;
      const comentarios = document.getElementById("comentarios").value.trim();
  
      if (!nombre || !especialidad || !fecha || !hora || !comentarios) {
        alert("Por favor, rellena todos los campos.");
        return;
      }
  
      // Aquí puedes enviar los datos a una API o guardarlos
      alert("¡Cita agendada correctamente!\nNos vemos el " + fecha + " a las " + hora + ".");
      form.reset();
    });
  });
  