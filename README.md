# DESAFIO_Inicio de Sesión usando Passport Local_EZEQUIEL_PETRONE

Código auto-comentado!!!

Si bien sigo usando sockets para la actualización de productos, mejoré y simplifiqué la comunicación entre front y back.

En routes/routes.js todo lo relacionado con el manejo de rutas/endpoints. Principalmente todo lo que es home, login, signup y logout (ya que la actualización de productos lo manejo en paralelo mediante sockets)

En auth/auth.js todo lo relacionado con la configuración de passport y sus estrategias! De esa forma server.js me quedó limpio :)

Si bien cumple perfectamente con las consignas, me hubiese gustado poder invertirle más tiempo al desafío para:
- Intentar hacer llegar los msjs que defino dentro de las estrategias de passport al front (y de esa forma poder informar con mayor detalle si el error de login es que el user no existe o si le pifiaron en la contraseña por ejemplo) Googleando leí que no era tan simple pero de alguna forma u otra se logra.
- Abstraer todo lo relacionado al crud de usuarios en un DAO y no utilizar las funciones nativas de mongo en la configuración de passport...