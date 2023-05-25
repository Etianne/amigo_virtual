let estado = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        # # # # #
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    estado = randint(1, 3)
    if (estado == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (estado == 2) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
