RingbitCar.init_wheel(AnalogPin.P7, AnalogPin.P9)
RingbitCar.freestyle(100, 100)
basic.forever(function () {
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 90)
    RingbitCar.brake()
    RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 90)
    RingbitCar.brake()
})
