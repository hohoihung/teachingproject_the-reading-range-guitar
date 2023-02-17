let x = 0
basic.showIcon(IconNames.EigthNote)
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    x = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (x >= 6 && x <= 8) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else if (x > 8 && x <= 10) {
        music.playTone(587, music.beat(BeatFraction.Whole))
    } else if (x > 10 && x <= 12) {
        music.playTone(659, music.beat(BeatFraction.Whole))
    } else if (x > 12 && x <= 14) {
        music.playTone(698, music.beat(BeatFraction.Whole))
    } else if (x > 14 && x <= 16) {
        music.playTone(784, music.beat(BeatFraction.Whole))
    } else if (x > 16 && x <= 18) {
        music.playTone(880, music.beat(BeatFraction.Whole))
    } else if (x > 18 && x <= 20) {
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
})
