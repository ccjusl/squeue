---
title: "Conditional Statements and Loops"
category: "programming"
author: "mr-devil"
cover: "images/coding-wallpaper.jpg"
date: "2019-08-07"
slug: "conditional-statements-and-loops"
tags:
  - programming
  - intro to programming
  - if-else
  - loop
  - while
  - for
  - c
  - break
  - continue
---

Till now, we know how to print something on screen, how to take inputs from user and how to define variables. Now, we are going to add few more thing in our plate that empower us to do many many things 😄. One advice is to read this post completely and don't move forward untill you understand the things taught in the current section!

---

####_if-else_ statements
In the previous post I asked you to write a program that will convert any given celcius temperature into farenhiet. If you have not done that then please try that first and then come back again! Now, to ensure that we are on the same page, you can find my solution [here](https://rextester.com/CGR49358).

Suppose we extend our requirements and I ask you to write a program that convert given farenhiet temperature to celcius temperature. Easy? Here is the twist 😉 What if I told you to write both of them in the same code and it is the choice of the user (who is running your code) to decide whether he wants to convert celcius temperature to farenhiet or vice-versa.

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

Conditions can be anything. Here is a small list -

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
Comments are for our benifits. They are completely ignored by the compilers. Suppose you wrote a very big code and sees it after 2 or 3 months again or suppose you send this huge code to your friend. Will you then (or your friend now) able to understand the entire code easily 🤔?

syntax for single line comments is `// <comment here>` and for multiline comments `/* <comment here> */`.
Take a look at the same code for the above problem (but with comments) [here](https://rextester.com/IBWUMX74453).

As our code gets bigger and bigger, the harder it is to maintain and debug! So, it is always a very good practice to properly add comments to our code.

####Loops
Loops are used to execute some part of code again and again (as many times as we want 😋). There are two types of loops **FOR** and **WHILE**. Both does exactly the same thing, the only difference lies in their syntax. Note that they are exactly same! We can always convert a **while** loop to corresponding **for** loop and vice-versa.

######While Loop syntax

```c
while( <condition> ) {    // executes untill the condition remains true
  <some code to execute>
}
```

######For Loop syntax

```c
for( <optional initialization st> ; <condition> ; <optional statement> ) {
   <some code to execute>
}
```

Let's look at an example of both. Suppose we want to print numbers from 1 to 100.

```c
#include <stdio.h>

int main(){
  int i = 1;

  // Using while loop
  while(i <= 100){
    // (i <= 100) is the condition here. Untill this is true following code will execute
    printf("%d ",i);
    i = i + 1;  // Notice that if you forget to add this line then code will never stop
  }
  return 0;
}
```

Let's see how the program is running.

- Initially `i` is defined and initialized value `1`. Then the control comes to the next line i.e. `while(i <= 100)`.
- Here, it first checks the condition.
  - If the condition is false then it goes directly to the end of the closing curly brace (that starts just after the loop) and start execution from there. Here it goes to the line `return 0;` if the condition is false.
  - If the condition is true then it executes the next line (inside the curly brace). Here `printf("%d ", i);`. Execution continues untill the control reaches the end of the loop (i.e. it encounters the closing curly brace). **Then the control goes to the start of the loop again (here to `while(i <= 100)`) and then follow the exact same steps!**

I **highly recommend** you to understand the above code completely before moving forward. Read the text above 2 times, 4 times, 8 times .... untill you get it completely.

```c
#include <stdio.h>

int main(){
  int i = 0;

  // Using for loop
  for(i = 1; i <= 100; i = i+1){

    // (i = 1) is the initialization section here (we can initialize) anything here
    // (i <= 100) is the condition here. Untill this is true following code will execute
    // (i = i+1) is the loop control statement. It controls untill when the loop runs

    printf("%d ",i);
  }
  return 0;
}
```

Let's see the execution of this code.

- `i` is defined and initialized to 0.
- Now, inside the for loop :
  - First, `i` is assigned a value `1` (through line `i = 1;`)
  - Next the condition `i <= 100;` is checked
  - If the condition is **true** then statements inside the loop are executed (here `printf("%d ",i);`) untill control reaches the end (encounter a closing curly brace) and if it is **false** then the program starts from the end of the `for` loop (here `return 0`)
  - After that the control goes to the starting of the `for` loop again and this time **instead of initialization statement i.e. `i = 1` the statement after the condition i.e. `i = i + 1` gets executed**
  - Then **as before the condition is checked** and process is repeated

Again, before moving forward make sure you understand the entire flow. Read it untill you get it completely.

Now, let's write the same code using `for` but in different forms -

```c
#include <stdio.h>

int main(){
  int i;
  i = 1;
  // same code with no initialization statement
  for( ; i <= 100; i = i + 1){
    printf("%d ",i);
  }

  // same code with no loop control statement
  for(i = 1 ; i <= 100; ){
    printf("%d ",i);
    i = (i + 1);
  }

  // same code with no loop control statement and no initialization
  i = 1;
  for( ; i <= 100; ){
    printf("%d ",i);
    i = (i + 1);
  }
  return 0;
}
```

---

####'break' and 'continue'
Now, that you have the knowledge of loops. Two keywords that comes hand-in-hand with loops are **break** and **continue**.

Suppose we are building a **counting machine**. User runs our code and then he(or she) presses any key except 'q', (and then press enter) whenever he want to increment the count and when he is done, he press 'q' to exit and after that we show the number of times he presses 'c'. Simple right? 😁

How to proceed writing code for this? Here are some steps -

- First of all, see that here we want to do some repetitive task. So, we have the intuition that we have to use loop in some way.
- Next, notice that we don't know in advance when to end (i.e. how many times we want to increment the counter). So, we can't write a condition in the loop in same way we have done before (i.e. like `i <= 100`).
- We have to count something. So, we have to use a variable.

Let's first think what should be the code inside the loop (i.e. which task is repitative). Here, the taks is to increment the count. So, if we assume that we maintains a variable `cnt` for this which is initialized to `0`. We can write something like `cnt = cnt + 1;` whenever we sees 'c'(or some other letter).

Now, the only problem is that we don't know when to exit from loop (this is decided by the user input). So, we can't write anything static in our code. Here comes **break** for rescue! **We can use 'break' inside the loop and then the program will break from the loop and execution starts from the line after the loop (it behaves as if the condition inside the loop is false. But, notice that condition now also may be true but even it breaks out from the loop)**. Here is the complete solution -

```c
#include <stdio.h>

int main(){
  int cnt;
  // initialize the count to '0'
  cnt = 0;
  // We give a condition inside the loop (which eventually will always be true)
  while(1 == 1){
    char ch;
    // take the user-input
    scanf("%c",&ch);

    // check the input
    if(ch == 'q') {
      // now, the progam will start from after the loop i.e. from line 'printf("....")'
      break;
    }
    else{
      // Increment the count
      cnt = cnt + 1;
    }
  }
  printf("Result is: %d\n",cnt);
  return 0;
}
```

Suppose the requirement changes a little. Now, **if user presses some other key instead of 'c', we don't increment the count and continue taking inputs from the user!**

So, here we have to **escape executing some part of code if something happens and start from the beginning of the loop again**. (Note that in `for` loop - by beginning I don't mean that we start executing the **initialization statements**, it executes the **statement after condition only**. i.e. the **entire things behaves as if we reaches the end of the curly brace of current loop**). So, the solution now will look like -

```c
#include <stdio.h>

int main(){
  int cnt;
  // initialize the count to '0'
  cnt = 0;
  // We give a condition inside the loop (which eventually will always be true)
  while(1 == 1){
    char ch;
    // take the user-input
    scanf("%c",&ch);

    // if the input character is not 'q' and not 'c' then we do nothing
    // and move forward to take the next character from the user
    if(ch != 'q' && ch != 'c') {
      continue;
    }

    // check the input
    if(ch == 'q') {
      // now, the progam will start from after the loop i.e. from line 'printf("....")'
      break;
    }
    else{
      // Increment the count
      cnt = cnt + 1;
    }
  }
  printf("Result is: %d\n",cnt);
  return 0;
}
```

---

#####Summary of things we did -

- How to use **if-else** statements
- Adding comments to our code
- Loops (**while** and **for**)
- **break** and **continue** keywords

#####Exercise

**Design a mini calculator**

- Include following operations : `+`, `-`, `*`, `/`.
- Untill user wants to exit, it continues to takes user inputs and perform the given operations.

Here is a short clip demonstrating the working of our calculator -
![calculator-demo](./out.gif)

It's your turn!😎

After you are done you can check my solution [here](https://rextester.com/KVCUQ67930).
