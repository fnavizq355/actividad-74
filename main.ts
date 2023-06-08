while (maqueen.Ultrasonic(PingUnit.Centimeters) > 5) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
}
maqueen.motorStop(maqueen.Motors.All)
