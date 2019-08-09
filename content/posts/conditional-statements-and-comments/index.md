---
title: "Conditional Statements, Comments and Introdction to Competitive Programming"
category: "programming"
author: "mr-devil"
cover: "images/coding-wallpaper.jpg"
date: "2019-08-07"
slug: "conditional-statements-and-comments"
tags:
  - programming
  - intro to programming
  - if-else
  - comments
---

Till now, we know how to print something on screen, how to take inputs from user and how to define variables. Now, we are going to add few more things in our plate that empowers us to do many more stuff 😄.

---

####_if-else_ statements
In the previous post I asked you to write a program that will convert any given celcius temperature into farenhiet. If you have not done that then please try that first and then come back again! Now, to ensure that we are on the same page, you can find my solution [here](https://rextester.com/CGR49358).

Suppose we extend our requirements and I ask you to write a program that converts given temperature in farenhiet to celcius. Easy? Here is the twist 😉 What if I told you to write both of them in the same code and it is the choice of the user (who is running your code) to decide whether he wants to convert celcius temperature to farenhiet or vice-versa.

Till now, we don't know how to do this and here comes **if-else** statements for rescue!

The syntax is

```
if (<some condition>){
  <your code if the condition is satisfied>
}
else{
  <your code if the condition is not satisfied>
}
```

We can even add **if** without **else**. We can add multiple **if** conditions and then an **else** block also. Like -

```
if (<some condition>){
  <your code if the condition is satisfied>
}
else if (<some other condition>) {
  <your code if this condition is satisfied>
}
else{
  <your code if none of the above condition is not satisfied>
}
```

Conditions is a statement which evaluates to a boolean value(i.e. **true** or **false**). Here is a small list -

| Operator           | Symbol | Example that returns **true** |
| ------------------ | :----: | :---------------------------: |
| Equality           |   ==   |            2 == 2             |
| In-equality        |   !=   |            3 != 4             |
| Greater-than       |   >    |             4 > 3             |
| Greater-than-equal |   >=   |            4 >= 4             |
| Less-than          |   <    |             4 < 5             |
| Less-than-equal    |   <=   |            4 <= 4             |

We can also specify multiple conditions such that if **both** the conditions are true then only we do something OR if **any one** of them is true then we do something.

The operators for doing that are:

- `&&` (**and** i.e. if first **and** second condition both are true then only the code inside the `if` block is executed). An **example** is `if(1 == 1 && 3 < 4)`
- `||` (**or** i.e. if first **or** second any one of them is true then code will be executed). An **example** of condition using this is `if(1 != 1 || 4 < 5)`

So, the problem seems to be quite easy now 😛. We just need a condition that denotes whether to convert from celcius to farenhiet or vice-versa (Notice that this condition variable is also an user-input).

Go ahead and try this yourself and if you are done then click [here](https://rextester.com/YJDPD19867) to see my solution.

####Comments
Comments are for our benefits. They are completely ignored by the compilers. Suppose you wrote a very big code and check it after 2 or 3 months again or suppose you send this huge code to your friend. Will you then (or your friend now) able to understand the entire code easily 🤔?

Syntax for single line comments is `// <comment here>` and for multiline comments `/* <comment here> */`.
Take a look at the same code for the above problem (but with comments) [here](https://rextester.com/IBWUMX74453).

As our code gets bigger and bigger, the harder it is to maintain and debug! So, it is always a very good practice to properly add comments to our code.

####Know and unlock your potentials 😉
Now that we have some cool things in our plate. I am going to introduce you to the world of programming. There are several coding platforms where we can show our programming skills and win exciting prizes 😋. There are hype about these platforms that questions that are there are too tough and we can't able to solve them.

Currently you are just a beginner and it's just a few days when you had started. And believe me you are all set to solve your first question in one of the most popular platform **Codechef**.

#####Know the Environment

Let's first talk a little about the submission and judgement process in these platforms.

- You are given a **Problem statement** describing what exactly your code should do.
- Then there is an **Input/Output section** which describes how they will give the inputs to your code and how they expect output from us.
- Next comes **Constraints** (for now ignore them)
- Next there are a few **Sample test cases**.

  - Some of you might be thinking that what a **test-case** is?
  - To answer that I want you to revisit the problem that we are solving (**converting celcius to farenhiet and vice-versa depending on user's choice**).
  - Try to compare [this](https://rextester.com/IBWUMX74453) code and [this](https://rextester.com/GHCJ3776) code.
  - Found something 🤨?
  - **Hint**: try to run both the code and when it ask about the option (from cel to far or opposite) press '**g**'.
  - As we know that 'g' is an invalid input **but the second code will treat it as if user want to convert from farenhiet to celcius**. So the second code is simply incorrect!

  - So, a **test case is** any valid input on which one can run your code and if your code is correct then it will behave appropraitely according to the inputs.

  **In these platforms they explore all possible test cases (i.e. they simply give every possible input to your code)** and match your code's output with the actual answer. For our ease they will give a **sample input** and it's correct **output** (which they called as **Sample test case**).

####Solving our first problem: [DECINC](https://www.codechef.com/problems/DECINC) 🤩

Read and understand the problem statement carefully and then come back!

The problem is simple. They give us an integer(**N**) and we have to check **if** the integer is divisible by 4 then we have to print the value `N+1` otherwise we have to print `N-1`.

**Note**: One important thing to note here is that **we don't ask for the input (i.e. we don't need to write `printf("Enter the number : ");` from the user) Why ?? for now it is enough to know that the input is given by a machine and machine knows what to give as input!**.

Now, the solution is simple. We just need a `if-else` block to check whether `N` is divisible by `4` or not. And we print the required number accordingly.

```c
#include <stdio.h>

int main(){
  int n;
  scanf("%d",&n);

  // 'a % b' gives the remainder when a is divided by b
  // So, if the remainder is 0
  // then we have to increase N otherwise decrease

  if(n % 4 == 0) printf("%d",(n+1));
  else printf("%d",(n-1));
  return 0;
}
```

That's it !!😜 Go ahead and submit this solution (submit button appears in the top left corner once you log in into your account).

Congratulations 🎊. You got your first **AC** (means Accepted)

---

#####Summary of things we did -

- How to use **if-else** statements
- Adding comments to our code
- Introduction to programming platforms

####Exercise
Try to solve **[START01](https://www.codechef.com/problems/START01)** and **[DIFFSUM](https://www.codechef.com/problems/DIFFSUM)**.

See you soon! Happy Coding 😄
