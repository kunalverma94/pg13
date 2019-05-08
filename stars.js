function gc() {
    var s = "0123456789ABCDEF";
    var c = "#";
    for (var i = 0; i < 6; i++) {
        c += s[Math.ceil(Math.random() * 15)]
    }
    return c + '7b';
}
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var oo = [];
window.onload = function () {
    for (var i = 0; i < 500; i++) {
        var tt = new obj(Math.random() * (innerWidth - 40) + 20, Math.random() * (innerHeight - 40) + 20, 20, gc(), 0.2, i);
        oo.push(tt)
    }
    ; const cn = document.getElementById("cn");
    const ct = document.getElementById("cn").getContext('2d');
    const ms = {
        x: innerWidth / 2,
        y: innerHeight / 2
    };
    addEventListener('mousemove', event => {
        ms.x = event.clientX;
        ms.y = event.clientY
    }
    );

    function pms(n) {
        let c = Math.floor(Math.random() * 10) % 2 == 0;
        if (c) {
            n = -n;
        }
        return n;
    }
    function obj(x, y, r, c, dd, nn) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;
        this.dx = pms(dd);
        this.dy = pms(dd);
        this.dr = function () {
            ct.beginPath();
            if (this.y + this.r > innerHeight || this.y - this.r < 0) {
                this.dy = -this.dy
            }
            if (this.x + this.r > innerWidth || this.x - this.r < 0) {
                this.dx = -this.dx
            }
            this.y += this.dy;
            this.x += this.dx;
            ct.fillStyle = this.c;
            if (ms.x - this.x < 50 && ms.x - this.x > -50 && ms.y - this.y < 50 && ms.y - this.y > -50) {
                if (this.r < 20) {
                    this.r += 1
                }
            } else {
                if (this.r > 2) {
                    this.r -= 1
                }
            }
            ct.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            ct.fill();
            ct.fillStyle = "black";
            ct.beginPath();
            ct.stroke()
        }
        this.an = function () {
            this.dr()
        }
    }
    function rs() {
        cn.height = innerHeight;
        cn.width = innerWidth;
        oo.forEach(function (e) {
            e.x = Math.random() * (innerWidth - 40) + 20;
            e.y = Math.random() * (innerHeight - 40) + 20
        })
    }
    rs();
    anim();
    this.onresize = function () {
        rs()
    }
    function anim() {
        g = !1;
        requestAnimationFrame(anim);
        ct.clearRect(0, 0, innerWidth, innerHeight)
        oo.forEach(function (e) {
            e.an()
        })
    }
}

