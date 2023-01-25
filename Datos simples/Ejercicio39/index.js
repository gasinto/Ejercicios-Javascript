/* Ejercicio 39
 Un ciclista parte de una ciudad A a las HH horas, MM minutos y SS segundos. El tiempo de
 viaje hasta llegar a otra ciudad B es de T segundos. Escribir un algoritmo que determine la hora de llegada
  a la ciudad B.

 @author: Juan Cruz Arcudi
 @fecha: 24/01/2023

Variables a utilizar:
    - time 
    - hours
    - minutes
    - seconds
    - secondsRemaining

Cosas a considerar
    1 hora tiene 3600 segundos
    hours = horas
    secondsRemaining = segundos restantes
    minutes = minutos

ALGORITMOS
    LEER hours, minutes, seconds, time
    CALCULOS
        =>  Separamos la hora de salida y la convertimos en segundos para añadirlos a los segundos que tardo en llegar
            a la ciudad B.
            secondsRemaining = time + (horas * 3600 + minutes * 60 + seconds)
        =>  Separamos secondsRemaning para obtenes la hora, minutos y segundos
            - hours = secondsRemaining - (hours*3600)
            - minutes = secondsRemaining - (hours*3600) - (minutes*60)
            - seconds = secondsRemaining - (hours*3600) - (minutes*60) - seconds
    MOSTRAR resultado
*/

document.write('<h1>Ejercicio 39</h1><br><br>')
document.write('<p>Este programa calcula la hora de llegada de un ciclista conociendo la hora de salida <br> y el tiempo de viaje en segundos"</p><br>')
document.write('<p>Ingrese la hora de partida de forma secionada.</p><br><br>')

//declaración de las variables y solicitud de los datos
let hours = prompt('Hora de salida')
hours = parseInt(hours)
let minutes = prompt('Minutos de salida')
minutes = parseInt(minutes)
let seconds = prompt('Segundos de salida')
seconds = parseInt(seconds)
let time = prompt('¿Cuántos segundos tardó en llegar a la ciudad B?')
time = parseInt(seconds)

//calculos
let secondsRemaining = time + (hours*3600) + (minutes*60) + seconds
hours = secondsRemaining/3600
hours = hours.toFixed(0)
secondsRemaining = secondsRemaining%3600
minutes = secondsRemaining/60
minutes = minutes.toFixed(0)
seconds = secondsRemaining%60

//muestra de resultados
document.write(`Hora de llegada: ${hours}:${minutes}:${seconds}.`)