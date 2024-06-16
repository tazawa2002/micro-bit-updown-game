let 回答 = false
let 配列 = [
3,
2,
1,
5,
4
]
let カウンター = 0
let flag = true
basic.forever(function () {
    if (カウンター < 配列.length - 1) {
        basic.showNumber(配列[カウンター])
        while (flag) {
            if (input.buttonIsPressed(Button.A)) {
                回答 = 配列[カウンター] < 配列[カウンター + 1]
                flag = false
            } else if (input.buttonIsPressed(Button.B)) {
                回答 = 配列[カウンター] > 配列[カウンター + 1]
                flag = false
            }
        }
        if (回答) {
            カウンター += 1
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
            basic.showLeds(`
                . # # # .
                # . . . #
                # . . . #
                # . . . #
                . # # # .
                `)
        } else {
            カウンター = 0
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.InBackground)
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
        flag = true
    } else {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.InBackground)
        basic.showString("CLEAR")
        カウンター = 0
    }
})
