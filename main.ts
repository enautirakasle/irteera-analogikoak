basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P0, 512)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P0, 0)
    basic.pause(500)
})
