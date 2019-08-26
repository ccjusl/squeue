---
title: "Loops all around"
category: "programming"
author: "mr-devil"
cover: "images/coding-wallpaper.jpg"
date: "2019-08-25"
slug: "loops-all-around"
tags:
  - programming
  - intro to programming
  - loops
  - c
---

Currently we have the knowledge of loops and conditional statements. Before adding something new let's brush up our knowledge of loops. If you feel confident about using nested `for` and `while` loops and solving problems related to them then you can straight away skip to the next blog. In this blog we will solve some problems to remove the fear of **nested loops** 😄. I will **strongly** recommend to solve **all** the assignments given in the previous two blogs ([this](/intro-to-loops) and [this](conditional-statements-and-comments)) before moving ahead. If you face any kind of difficulties in those problems ask them in the comment sections of the respective blog!

Futhermore, your fear for **nested loops** will go away only when you think of the problem on your own. Believe me, they are very easy 😉. There are several problems discussed here. Always take a pause after each question and try to think about solution (I personally recommend to spend atleast 10-15 minutes to think about solution).

---

####Problem-1
You are given a number `n` by the user (who is running your code) and you have to print the following pattern on the screen

```
For n = 4:
****
****
****
****

For n = 5:
*****
*****
*****
*****
```

Got the question ? If not let's first understand the question. For any given `n` let's say `4` we have to print `4` stars(`*`) `4` times. Similarly if `n` equals `5` we have to print `5` stars(`*`) `5` times.

Time to take a pause and try to think of a solution before moving ahead.
#####Approach
Remember the use of loops. They are used to avoid some kind of repetitive tasks. So, do you find any repetitive task here 🤔?

Let me help you out. Notice at each line we are printing same thing (i.e. a sequence of stars(`*`)). This is repetitive taks right ? So, now we know how to do this using `for` loops. We just need to think about logic for printing a single line of stars and we can use `for` (or `while`) loops to repeat that `n` times!

Cool! So, now we just have to right the logic for printing a single line of stars. How to do that ? Well what if I say we can find something repetitive here too 😋. Guess what ?

Notice that we have to print `*` for some fixed number of times (here `n`). So, we can use loops here also right ?

#####Complete solution

1. Take value of `n` from user.
2. Write a `for` loop that will run `n` times and it will print `*` each time.
3. Wrap up the above `for` loop inside another `for` loop. So, that the same sequence will be printed `n` times.

```c
#include <stdio.h>

int main(){
  int n;
  // take user input
  printf("Enter the value of n: ");
  scanf("%d",&n);

  int j;
  for(j = 0; j < n; j++){
    int i;
    // To print a single line of stars
    for(int i = 0; i < n; i++){
      printf("*");
    }
    // Go to the next line after printing a line
    printf("\n");
  }
  return 0;
}
```

---

####Problem-2
You are given a number `n` by the user (who is running your code) and you have to print the following pattern on the screen

```
For n = 3:
1 2 3
5 4 6
7 8 9

For n = 2:
1 2
3 4
```

Got the question ? If not let's first understand the question. For any given `n` let's say `3` we have to print numbers from `1` to `9` (i.e. `3*3`) keeping only `3` numbers in any lines. Similarly if `n` equals `4` we have to print the numbers from `1` to `16` keeping only `4` numbers in one line.

Time to take a pause and try to think of a solution before moving ahead.
#####Approach
Again the same question. Do you find any repetitive task here 🤔?

Let's see ! Notice, we have to print `n` numbers in one line. Isn't it is repetitive ? And also suppose there is variable (say `X`) which will give us what number comes next (i.e. suppose magically every time we print `X` it will correctly print the number at that specific position). Now what we are printing in each line ? `X` right ? Now, it is also repetative !

As you know there is no magic in world of programming. Everything has a proper reason behind it! So, we have to find the value of `X` at each position. What is the value of `X` in **(i, j)** (i.e. in the ith row and jth coulumn) ? Try to come up with a simple math formula.

Isn't it (`(i - 1) * n + j`) ? HOW ?? - Suppose `n` equals `3`. So, what is the value at (2, 2) ? When we are at `2nd` row, how many numbers do we have printed already ? We had already printed one complete row i.e. `3` numbers (`(i - 1) * n`), and in the current row, how many we have printed ? We are at `2nd` column. So, we have filled `1st` column. So, we had printed `1` number (i.e. `j - 1` numbers). So, currently we are going to print (`3 + 1 + 1`) (i.e (`(i-1) * n + (j - 1) + 1`)).

#####Complete solution

1. Take value of `n` from user.
2. Run two `for` loops (both from `1` to `n`) and in the second loop calculate the value of `X` and print it!

Try to write the code and run it to see the output. You can find my solution [here](https://rextester.com/LQXCV38579)

---

####Problem-3
You are given a number `n` by the user (who is running your code) and you have to print the following pattern on the screen

```
For n = 4:
* * * *
 * * * *
  * * * *
   * * * *

For n = 5:
* * * * *
 * * * * *
  * * * * *
   * * * * *
    * * * * *
```

Got the question ? If not let's first understand the question. Given any `n` we have to print a rhombus shape having each side of length `n`.

Time to take a pause and try to think of a solution before moving ahead.
#####Approach
Any repetitive task here 🧐 ? Yes ! By far from our experience we know that atleast there is 1 repetitive task i.e. to print `n` lines. But how ? In each line we are not printing the same thing at all !

If you notice carefully, we can break the printed caracters in each line into two parts. First some **spaces** and then `n` **space separated stars**. So, again if we assume that the number of spaces that we have to print in each line is given by a variable `X` then isn't the whole task is repetitive now 😎 ?

Only thing remains is to find value of `X` for each line. Again by some observation (i.e. drawing some rhombus manually) we can notice that at the `ith` row we have to print `i - 1` spaces!

#####Complete solution

1. Take value of `n` from user.
2. Run the first loop from `1` to `n` and

   - Run a loop that will print `i - 1` spaces on the screen
   - Run another loop that will print `n` space separated stars(`*`)
   - Finally to end the current line don't forget to print a **new line escape character**

Try to write the code and run it to see the output. Try to give some large `n` (may be 40 or 30) and enjoy 😂 !! You can find my solution [here](https://rextester.com/HFUK88687).

---

####Problem-4
You are given a number `n` by the user (who is running your code) and you have to print the following pattern on the screen

```
For n = 4:
* * * *
 * * *
  * *
   *
  * *
 * * *
* * * *

For n = 3:
* * *
 * *
  *
 * *
* * *
```

Got the question ? If not let's first understand the question. Given any `n` we have to first print an inverse equilateral triangle shape having each side of length `n` and then print an equilateral triangle having side `n`.

Time to take a pause and try to think of a solution before moving ahead.
#####Approach
Any repetitive task here 🙄 ? Try to break the problem into simpler problem (**may be printing two separate equilateral triangles and then simply merging their code into single code?**). Found something ?

Let me help you out ! Suppose we have two problem. First to print an inverse equilateral triangle and second to print an equilateral triangle. How to print an inverse triangle ?

Again we can break the characters of one line into 2 parts. First to print **some spaces** and then to print some **space separated stars(`*`)**. Notice that at each line `i` we have to print `i - 1` spaces first and then `n - i` space separated stars(`*`).

Now, repeat the above process `n` times and we have our **inverse equilateral triangle**! Similarly we can print a non inverted triangle. (**Leaving this as an exercise for you**) Finally merge the two codes that you have written and you have the above pattern printed. **Isn't it 😛 ??**

I am not providing you the solution steps this time. Write it by your own. You can see **[my solution](https://rextester.com/AFG81230)** if you are stuck.

---

Congratulations 🥳! You make it to the end.

Some problems to try :

- print the following pattern ([solution](https://rextester.com/XNALCX16994))

```
For n = 4:
    *
   * *
  * * *
 * * * *
  * * *
   * *
    *
```

- Know **pascal's triangle** ? Get an idea about it [here](https://en.wikipedia.org/wiki/Pascal%27s_triangle). Go ahead and try to print the pascal's triangle for any given `n`. Post your **OWN** solutions in the comments.

Hope you got a fair understanding of using **nested loops**. If anyone still finds it hard and want some more problems to be discussed please mention it in comment section. As always if you find something unclear, please don't hegitate to ask in the comment section! Good luck 🤠.
