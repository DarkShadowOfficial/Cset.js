# Cset.js
A JavaScript library which allows the user to utilize complex numbers in their code.

## Documentation

To use Cset.js, first you need to import and link the script in your project. Once you do, let's initialize our first complex number.
```
let complex = new ComplexNumber("1 + 4i");
```
Our `complex` variable is now considered an object, an instance of class `ComplexNumber`. Every complex number has two properties: A real part, `complex.re`, and an imaginary part, `complex.im`. The imaginary part is stored as the coefficient of i, as a float rather than a string, for easier use.
To output the string representation of the full complex number, use the `.Normalize()` method.
```
console.log(complex.Normalize()) // Should output "1+4i".
```
An alternative is the `.normalize(re, im)` method, in lowercase, which returns the string representation of a complex number after passing in the real and imaginary coefficients, as floats.
```
console.log(complex.normalize(4, 2)) // Should output 4+2i
```
Additionally, one can perform basic operations with the object: Addition, Subtraction, Multiplication, and Division. Each operation has a capitalized method, such as `.Add(complex expressed as string)` or `.Divide(complex expressed as string)`. This performs the operation on the instance of the class and the complex number, as a string (e.g. "2 - 5i"). Also, each operation has a lowercase method, such as `.add(complex1, complex2)`. This just performs the operation between the two complex numbers.
###### Important Note: These operations require a string representation of your complex number(s), and return an instance of the `ComplexNumber` class. To get the string representation of the result back, just use the `.Normalize()` method.
Example:
```
console.log(ComplexNumber.prototype.add("1 + i", "1 - i")) // returns instance of ComplexNumber
console.log(ComplexNumber.prototype.add("1 + i", "1 - i").Normalize()) // returns "2"
```

To convert a complex to polar form, you can use the `.Polar()` or `.polar(complex as a string)` method. This returns the polar form in the format "re^(tpi*i)". "r" is given as a decimal to the nearest thousandth, while tpi is in radians. However, to make things easier, the pi is factored out for easier understanding of the angle. For example, rather than outputting 1.57..., it gives 0.5pi, so one can easily realize the angle is pi/2.

The library also can return the complex conjugate, using either the `.Conjugate()` method, which returns the conjugate of the instance, or the `.conjugate(complex as string)`, which returns the conjugate of a specified complex number. These return the conjugate in the form of an instance of class `ComplexNumber`.

###### Update: Oct 2, 2024 - 11:14 AM

You are now able to convert from polar form to complex form.
```
console.log(complex.polarToComplex("2e^" + PI/2 + "i").Normalize()) // returns -2i
```

Make sure to put it in the form re^ci. C should not have anything except your angle, such as 1.57...; Do not put 0.5pi, this will not work. Must calculate angle before plugging it in.
