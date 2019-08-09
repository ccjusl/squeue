---
title: "Introduction to Loops"
category: "programming"
author: "mr-devil"
cover: "images/coding-wallpaper.jpg"
date: "2019-08-08"
slug: "intro-to-loops"
tags:
  - programming
  - intro to programming
  - loop
  - while
  - for
  - c
  - break
  - continue
---

In this post we are going to look at one of the most widely used concept in the world of programming. Every programmer uses this day in and day out 😄. One advice is to read this post completely and don't move forward until you understand the concepts taught in the previous section!

---

####Loops
Loops are used to execute some part of code again and again (as many times as we want 😋). There are many types of loops but the most useful ones are **FOR** and **WHILE**. Both does exactly the same thing, the only difference lies in their syntax. Note that they are exactly same! We can always convert a **while** loop to corresponding **for** loop and vice-versa.

######While Loop syntax

```c
while( <condition> ) {    // executes until the condition remains true
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
    // (i <= 100) is the condition here. Until this is true following code will execute
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
  - If the condition is true then it executes the next line (inside the curly brace). Here `printf("%d ", i);`. Execution continues until the control reaches the end of the loop (i.e. it encounters the closing curly brace). **Then the control goes to the start of the loop again (here to `while(i <= 100)`) and then follow the exact same steps!**

I **highly recommend** you to understand the above code completely before moving forward. Read the text above 2 times, 4 times, 8 times .... until you get it completely.

```c
#include <stdio.h>

int main(){
  int i = 0;

  // Using for loop
  for(i = 1; i <= 100; i = i+1){

    // (i = 1) is the initialization section here (we can initialize) anything here
    // (i <= 100) is the condition here. Until this is true following code will execute
    // (i = i+1) is the loop control statement. It controls until when the loop runs

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
  - If the condition is **true** then statements inside the loop are executed (here `printf("%d ",i);`) until control reaches the end (encounter a closing curly brace) and if it is **false** then the program starts from the end of the `for` loop (here `return 0`)
  - After that the control goes to the starting of the `for` loop again and this time **instead of initialization statement i.e. `i = 1` the statement after the condition i.e. `i = i + 1` gets executed**
  - Then **as before the condition is checked** and process is repeated

Again, before moving forward make sure you understand the entire flow. Read it until you get it completely.

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

- Loops (**while** and **for**)
- **break** and **continue** keywords

#####Exercise

**Design a mini calculator**

- Include following operations : `+`, `-`, `*`, `/`.
- Until user wants to exit, it continues to takes user inputs and perform the given operations.

Here is a short clip demonstrating the working of our calculator -
![calculator-demo](./out.gif)

It's your turn😎. After you are done post your code in the comment section below!

You can check my solution [here](https://rextester.com/KVCUQ67930).
