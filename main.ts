basic.forever(function () {
    if (maqueen.sensor(PingUnit.Centimeters) < 35 && maqueen.sensor(PingUnit.Centimeters) != 0) {
        if (Math.randomBoolean() == true) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
            basic.pause(800)
        }
        if (Math.randomBoolean()) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
            basic.pause(800)
        }
    } else {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
    }
})
