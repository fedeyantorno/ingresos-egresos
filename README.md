# Descripción
- La APP toma los valores de ingresos y de egresos a traves de dos formularios y los va sumando por separado obteniendo los respectivos totales y saldo restante.
Nos muestra listado de ingresos, listado de egresos, totales de ambos y el saldo restante.

# Funcionalidades
- Función Agregar Ingresos: Toma los valores del formulario, los valida y los agrega al listado.
- Función Agregar Egresos: Toma los valores del formulario, los valida y los agrega al listado.
- Función Suma Ingresos: Realiza la suma de todos los ingresos que vayan surgiendo y lo muestra en Total.
- Función Suma Egresos: Realiza la suma de todos los egresos que vayan surgiendo y lo muestra en Total.
- Función Resta: Realiza la resta de los egresos a los ingresos y lo muestra en Restante.
- Función Comprobación de Restante: El color de fondo de RESTANTE debe cambiar según el porcentaje de saldo disponible ( 50% / 25% / 10% ).
- Función Editar: Tanto los ingresos como egresos se deben poder editar a través de un BTN de Edición.
- Función Eliminar: Tanto los ingresos como egresos se deben poder eliminar a través de un BTN de Eliminar.

Problemas:
- Al no poder declarar las variables de manera global, los datos de la cantidad tanto de ingresos como de egresos quedan dentro del scope de la función y no sé como recuperarlos para que las otras funciones puedan tomarlos para hacer las distintas operaciones.