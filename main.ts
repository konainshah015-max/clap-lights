input.onSound(DetectedSound.Loud, function () {
    lights_On = !(lights_On)
    if (lights_On) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let lights_On = false
input.setSoundThreshold(SoundThreshold.Loud, 255)
