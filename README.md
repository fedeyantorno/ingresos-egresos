# Funcionalidades

La APP toma los valores de una serie de ingresos y egresos a traves de dos formularios y los va sumando por separado obteniendo los respectivos subtotales.
Nos muestra el TOTAL de ingresos y el RESTANTE disponible que es el resultado de restarle al subtotal de ingresos el subtotal de egresos. El alerta de RESTANTE cambia de color según el porcentaje de saldo disponible ( 50% / 25% / 10% )

Problemas:

- Al no poder declarar las variables de manera global, los datos de la cantidad tanto de ingresos como de egresos quedan dentro del scope de la función y no sé como recuperarlos para hacer otras funciones con las operaciones matemáticas, por ejemplo la que resta a los ingresos los egresos.