---
title: "Getting started with programming II"
category: "programming"
author: "mr-devil"
cover: "images/coding-wallpaper.jpg"
date: "2019-08-05"
slug: "getting-started-with-programming-2"
tags:
  - programming
  - intro to programming
  - variables
  - c
---

Currently you know how to write a basic program. How to run it and a basic knowledge of `printf`. In this post we will learn more about `printf` and some new concepts.

---

###More about `printf`
We know how to print a particular string using `printf`. Now, we will learn how to print an integer using `printf`. Some of you might be thinking that what's new in that? We can always write something like `printf("2+4");` and `2+4` gets printed on the screen. But, what if I asked you to write a code to get the result of multiplication of two big numbers?

In this case you have to first multiply the number yourself and get the result and then substitute it in your `printf` statement. Right ? But what if I tell you that you can do this directly here!

**The syntax is `printf("%d",2)`** (`%d` is replaced by the integer after the double quotes).

So, you can predict what should be the output of the following code:

```c
#include <stdio.h>

int main(){
  printf("%d * %d = %d",2 ,4, 2*4);
  return 0;
}
```

We know everywhere the `%d` is replaced by the corresponding integer. So, first one is replaced by 2, second one by 4 and the third one by 8. So, the output will be `2 * 4 = 8`.

**`%d`** is known as **Format Specifier** for integers. Similarly, there are format specifiers for **real numbers** (**`%f`**), for **characters** (**`%c`**), etc.

---

###Variables
Next, we introduce a new concept called **variables**. As the name suggest, in variables we can store a variable.

For example: Suppose I give you three integers and want you to print the values of addition of all the pairs of integers. Suppose the integers are **`2223, 3345, 5462`**. What should you write? -

```c
#include <stdio.h>

int main(){
  printf("%d, %d, %d", (2223 + 3345), (3345 + 5462), (2223 + 5462));
  return 0;
}
```

Now, suppose I changed the integers to **`34532, 980754, 890756`**. Now, again you have to change the integer values at each and every place in your code! Here comes **variables** for rescue 😃

For defining a variable we need to give it a **name** and **data-type**. Data-Type denotes the **type of data** the varibale is going to store and **name** can be any combination of alphabets and digits. Only it need to be **unique and must start either with an alphabet or an underscore**.

Some valid data-types are **int, float, long int, double, char**.

Some valid variable names – **aAf, AF, a34f, \_a, \_\_A\_**.

Following are some **invalid** variable name – **3A, ..f, aa.**

A valid declaration is – `int a;`

Again notice the semicolon(`;`) at the end. **int** denote that the variable can store integers and **a** is the name of the variable.

So, here comes the solution for the our original question -

```c
#include <stdio.h>

int main(){
  int a = 2223;
  int b = 3345, c = 5462;
  printf("%d, %d, %d", (a + b), (b + c), (c + a));
  return 0;
}
```

Some more datatypes are - **float**(for real numbers), **char**(for characters), etc.

---

###Taking user inputs
Taking the same example of printing the sum of all the pairs. Every time I change my integer set, you need to change your code and then compile it and run it. Don't you think if there is a way to take inputs from user while our code is running is helpful ? And fortunately there is!

The syntax is **`scanf("<format specifier>",&<variable name>);`**

Suppose we want to take an integer input then we write `scanf("%d",&a)` (**a** is an integer variable)

Again, we can modify our previous code a little bit -

```c
#include <stdio.h>

int main(){
  int a, b, c;
  scanf("%d%d%d",&a ,&b ,&c);
  printf("%d, %d, %d", (a + b), (b + c), (c + a));
  return 0;
}
```

_**A few things to notice about the above code**_

- We don't initialize the variable **a, b, c**. So, they contains **GARBAGE** values initially i.e. if we write something like

```c
#include <stdio.h>

int main(){
  int a, b, c;
  printf("%d, %d, %d", a, b, c);
  return 0;
}
```

then the output is undefined. It can be anything (it may or may not change after each run)! **So, be aware of such mistakes!**

- Once you run your code, you will see that it is stuck and here you can write the value of first integer and press enter and then write the value of second integer and again press enter and write the third integer value and finally after you press enter now, you will see the result.

- If your code gets run by another user then he (or she) gets confused what to write (**Why the code is stucked here ? What it is expecting ?**). So, it is always a good idea to write some `printf` which give some hint to the user (running the code) to answer his questions. So, we can rewrite the code as -

```c
#include <stdio.h>

int main(){
  int a, b, c;

  printf("Enter the value of 'a' and press enter: ");
  scanf("%d",&a);
  printf("Enter the value of 'b' and press enter: ");
  scanf("%d",&b);
  printf("Enter the value of 'c' and press enter: ");
  scanf("%d",&c);

  printf("%d, %d, %d", (a + b), (b + c), (c + a));
  return 0;
}
```

Run this code yourself and you will definitely appreciate your experience.

---

Summary of things we did -

- Explore different options of `printf`.
- Idea of **Format Specifiers**, **data types**.
- What are **Variables** and how to use them ?
- How to take user inputs ?

Go ahead and write some code. As an **exercise** you can write code that will take input from user temperature value in _celcius_ and convert it to _farenhiet_. Happy Coding 😃!
