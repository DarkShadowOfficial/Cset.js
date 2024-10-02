for (let i of Object.getOwnPropertyNames(Math)) {
    globalThis[i] = Math[i];
}
class ComplexNumber {
    constructor(x) {
        this.re;
        this.im;
        if (x == "") x = "0";
        x = x.replaceAll(" ", "");
        if (x.includes("+")) {
            let parts = x.split("+");
            if (parts[0].includes("i")) {
                this.im = parts[0].replace("i", "") == "" ? 1 : parseFloat(parts[0].slice(0, parts[0].length));
                this.re = parseFloat(parts[1]);
            } else if (parts[1].includes("i")) {
                this.im = parts[1].replace("i", "") == "" ? 1 : parseFloat(parts[1].replace("i", ""));
                this.re = parseFloat(parts[0]);
            }
        } else if (x.includes("-") && x.search("-") > 0) {
            let parts = x.split("-");
            if (parts[0].includes("i")) {
                this.im = parts[0].replace("i", "") == "" ? 1 : parseFloat(parts[0].slice(0, parts[0].length));
                this.re = -parseFloat(parts[1]);
            } else if (parts[1].includes("i")) {
                this.im = parts[1].replace("i", "") == "" ? -1 : -parseFloat(parts[1].replace("i", ""));
                this.re = parseFloat(parts[0]);
            }
        } else if (x.split("-").length == 3) {
            let parts = x.split("-");
            parts[0] = parts[1];
            parts[1] = parts[2];
            if (parts[0].includes("i")) {
                this.im = parts[0].replace("i", "") == "" ? -1 : -parseFloat(parts[0].slice(0, parts[0].length));
                this.re = -parseFloat(parts[1]);
            } else if (parts[1].includes("i")) {
                this.im = parts[1].replace("i", "") == "" ? -1 : -parseFloat(parts[1].replace("i", ""));
                this.re = -parseFloat(parts[0]);
            }
        } else {
            if (x.includes("i") && x.includes("-")) {
                this.im = x.replace('i', '').replace("-", "") == "" ? -1 : -parseFloat(x.replace('i', '').replace("-", ""));
                this.re = 0;
            } else if (x.includes("i")) {
                this.im = x.replace('i', '') == "" ? 1 : parseFloat(x.replace("i", ""));
                this.re = 0;
            } else {
                this.im = 0;
                this.re = parseFloat(x);
            }
        }
    }
    Re() {
        return this.re;
    }
    Im() {
        return `${this.im}i`;
    }
    normalize(re, im) {
        let r = "";
        let f = "";
        if (re == 0 && im == 0) return "0";
        if (im == 0) return `${re}`;
        if (re > 0) {
            if (im == 1) return `${re}+i`;
            if (im == -1) return `${re}-i`;
            if (im > 0) {
                return `${re}+${im}i`;
            } else if (im == 0) {
                return `${re}`;
            } else {
                return `${re}${im}i`;
            }
        } else if (re == 0) {
            if (im == 1) return "i";
            if (im == -1) return "-i";
            return `${im}i`;
        } else {
            if (im == 1) return `${re}+i`;
            if (im == -1) return `${re}-i`;
            if (im > 0) {
                f = "+";
            }
            return `${r}${re}${f}${im}i`;
        }
    }
    Normalize() {
        return this.normalize(this.re, this.im);
    }
    Add(complex) {
        let c2 = new ComplexNumber(complex);
        let c1 = this;
        let re1 = c1.re;
        let im1 = c1.im;
        let re2 = c2.re;
        let im2 = c2.im;
        return new ComplexNumber(this.normalize(re1 + re2, im1 + im2));
    }
    Subtract(complex) {
        let c2 = new ComplexNumber(complex);
        let c1 = this;
        let re1 = c1.re;
        let im1 = c1.im;
        let re2 = c2.re;
        let im2 = c2.im;
        return new ComplexNumber(this.normalize(re1 - re2, im1 - im2));
    }
    Multiply(complex) {
        let c2 = new ComplexNumber(complex);
        let c1 = this;
        let re1 = c1.re;
        let im1 = c1.im;
        let re2 = c2.re;
        let im2 = c2.im;
        return new ComplexNumber(this.normalize(re1 * re2 - im1 * im2, re1 * im2 + re2 * im1));
    }
    Divide(complex) {
        let c1 = this;
        let c2 = new ComplexNumber(complex);
        let a = c1.re;
        let b = c1.im;
        let c = c2.re;
        let d = c2.im;
        return new ComplexNumber(this.normalize((a*c + b*d)/(c**2+d**2), (b*c - a*d)/(c**2+d**2)));
    }
    add(complex1, complex2) {
        let c1 = new ComplexNumber(complex1);
        let c2 = new ComplexNumber(complex2);
        let re1 = c1.re;
        let im1 = c1.im;
        let re2 = c2.re;
        let im2 = c2.im;
        return new ComplexNumber(this.normalize(re1 + re2, im1 + im2));
    }
    subtract(complex1, complex2) {
        let c1 = new ComplexNumber(complex1);
        let c2 = new ComplexNumber(complex2);
        let re1 = c1.re;
        let im1 = c1.im;
        let re2 = c2.re;
        let im2 = c2.im;
        return new ComplexNumber(this.normalize(re1 - re2, im1 - im2));
    }
    multiply(complex1, complex2) {
        let c1 = new ComplexNumber(complex1);
        let c2 = new ComplexNumber(complex2);
        let re1 = c1.re;
        let im1 = c1.im;
        let re2 = c2.re;
        let im2 = c2.im;
        return new ComplexNumber(this.normalize(re1 * re2 - im1*im2, (re1*im2)+(re2*im1)));
    }
    divide(complex1, complex2) {
        let c1 = new ComplexNumber(complex1);
        let c2 = new ComplexNumber(complex2);
        let a = c1.re;
        let b = c1.im;
        let c = c2.re;
        let d = c2.im;
        return new ComplexNumber(this.normalize((a*c + b*d)/(c**2+d**2), (b*c - a*d)/(c**2+d**2)));
    }
    Conjugate() {
        return new ComplexNumber(this.normalize(this.re, -this.im));
    }
    conjugate(complex) {
        let c = new ComplexNumber(complex);
        return new ComplexNumber(this.normalize(c.re, -c.im));
    }
    Polar() {
        let c = this;
        let r = sqrt(c.re**2 + c.im**2);
        let theta = atan(c.im/c.re);
        if (r == 0) {
            return "0";
        }
        return `${r == 1 ? "" : r}e^(${theta/PI}pi*i)`;
    }
    polar(complex) {
        let c = new ComplexNumber(complex);
        let r = Math.sqrt(c.re**2 + c.im**2);
        let theta = atan(c.im/c.re);
        if (r == 0) {
            return "0";
        }
        return `${r == 1 ? "" : r}e^(${theta/PI}pi*i)`;
    }
    #unitCircle(angle) {
        let f = angle / PI;
        while (f < 0) {
            f += 2;
        }
        while (f >= 2) {
            f -= 2;
        }
        if (f == 0) {
            return {r: 1, i: 0}
        }
        if (f > 0 && f <= 0.5) {
            return {r: 1, i: -1};
        } else if (f > 0.5 && f < 1) {
            return {r: 1, i: -1}
        } else {
            return {r: 1, i: 1};
        }
    }
    polarToComplex(polar) {
        let r = polar.split("e")[0];
        if (r == "") r = 1;
        if (r == "-") r = -1;
        r = parseFloat(r);
        let theta = polar.split("^")[1]
        theta = theta.replace("i", "");
        theta = theta.replace("*", "");
        theta = theta.replace(")", "");
        theta = theta.replace("(", "");
        if (theta == "") theta = 1;
        if (theta == "-") theta = -1;
        theta = parseFloat(theta);
        let m = this.#unitCircle(theta);
        let re = r*cos(theta);
        let im = sqrt(r**2 - re**2);
        console.log(re, im)
        re *= m.r;
        im *= m.i;
        console.log(re, im)
        let complex = this.normalize(round(re*1000)/1000, round(im*1000)/1000);
        return new ComplexNumber(complex);
    }
}
