timeUntil();

function timeUntil() {
    let end = 1651204800000;

    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;

    const setTime = () => {
        let now = Date().now;
        let distance = end - now;
        if (distance < 0) {
            document.querySelector(".time-left").innerText = "NSS has been released!";

            return;
        }
        let days = Math.floor(distance / _day);
        let hours = Math.floor((distance % _day) / _hour);
        let minutes = Math.floor((distance % _hour) / _minute);
        let seconds = Math.floor((distance % _minute) / _second);

        document.querySelector(".time-left").innerText = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds.`
    }

    setTime();

    setInterval(setTime, 1000);
}