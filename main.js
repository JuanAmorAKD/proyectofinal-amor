// Filtrado de programas por equipo
document.querySelectorAll('.team-filters .btn').forEach(button => {
  button.addEventListener('click', (e) => {
    // Remover active de todos los botones
    document.querySelectorAll('.team-filters .btn').forEach(btn => 
      btn.classList.remove('active'));
    
    // Agregar active al botón clickeado
    e.target.classList.add('active');
    
    const team = e.target.dataset.team;
    const programs = document.querySelectorAll('.livePrograms__articles .card');
    
    programs.forEach(program => {
      if (team === 'todos') {
        program.style.display = 'block';
      } else {
        // Asumiendo que cada programa tiene un data-team attribute
        program.style.display = 
          program.dataset.team === team ? 'block' : 'none';
      }
    });
  });
}); 