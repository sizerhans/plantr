let Distance = 0
I2C_LCD1602.LcdInit(0)
let Appraisals = 0
I2C_LCD1602.ShowString("Appraisals: ", 0, 1)
I2C_LCD1602.ShowString("Louis' Plantr", 0, 0)
I2C_LCD1602.ShowNumber(Appraisals, 12, 1)
basic.forever(function () {
    Distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    if (Distance < 60) {
        if (Distance != 0) {
            if (input.soundLevel() > 60) {
                Appraisals += 1
                I2C_LCD1602.ShowNumber(Appraisals, 12, 1)
            }
        }
    }
    basic.pause(5000)
})
