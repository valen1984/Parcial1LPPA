README.md
Consigna:
Desarrollar una página web accesible desde cualquier navegador web utilizando solo las tecnologías: HTML,
CSS y Javascript.
La página debe tener diseño responsive adaptable a una pantalla Desktop y Mobile, utilizando Flexbox para
crear contenidos adaptables y evitar el uso de media queries, solo usarlo para casos puntuales. No se deben
usar librerías externas para diseños, todo se debe hacer solo con CSS. El HTML, CSS y JS desarrollados
deben estar en archivos diferentes. No usar estilos en línea.
Se debe crear una página web con HTML utilizando las etiquetas semánticas correspondientes, siguiendo la
estructura de Layout sugerida por W3School. La página debe contener un formulario de registro con los
siguientes campos y validaciones:
● Nombre (texto corto no menor a 3 letras)
● Apellido (texto corto no menor a 3 letras)
● Email (validar formato de email usando regex /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)
● Edad (número entero mayor a 0 y menor a 100)
● Sexo (opciones múltiples de selección simple)
● Temas de Interés - Deporte, música, juegos, tecnología, otros (opciones múltiples de selección
múltiple)
● País - Argentina, Chile, Brasil, Uruguay (menú desplegable)
● Comentario (texto largo)
● Botón enviar
Todos los campos son requeridos excepto el campo de “comentario”.
Funcionamiento requerido:
Al presionar el botón “Enviar” se deben ejecutar las validaciones correspondientes para cada campo del
formulario, las validaciones se deben hacer con Javascript, sin usar validaciones HTML5. Cuando un
formulario tiene un error de validación, se debe mostrar un mensaje en el campo en cuestión indicando
cual es el error. Si todos los datos están correctos, se debe mostrar un modal indicando que el registro se
realizó correctamente. Para el desarrollo del Modal, sugerimos seguir la guía de W3School.
No se deben usar librerías de terceros para el desarrollo del formulario y para el manejo de su
funcionamiento, todo se debe realizar con Javascript puro
