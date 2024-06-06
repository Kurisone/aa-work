# JavaScript Project

Coding projects are a great way to test your newfound JavaScript skills! You
will be completing coding tasks and testing them to see if you completed them
correctly. To complete this project successfully, you need __all__ of the test
specs to pass, so keep working until 100% of the specs turn green!

## Getting started

1. Download the project at the bottom of this page by clicking the green
   "Download Project" button.
2. Unzip the project zip file that you downloaded. The files should be extracted
   to a folder. Make sure the folder contains two folders: __problems/__ and
   __test/__.
3. Open the "Visual Studio Code" application (VS Code) and open the project
   folder that contains two folders: __problems/__ and __test/__ by choosing the
   menu "File" > "Open Folder..." and selecting the project folder.
4. Finally, open a new terminal navigated to the project folder in VS Code by
   clicking "Terminal" > "New Terminal".

In the VS Code Explorer side menu, you will see the following folders and files:

```plaintext
.
├── problems/
├── test/
└── README.md
```

The __README.md__ file in a coding project typically contains setup instructions
and other useful instructions that you should **ALWAYS** read before starting to
change or write code in the project.

The __problems/__ folder contains the files that you should read and implement
the problems assigned to you in this project. Follow the numbering of the files
to complete the problems in order.

The __test/__ folder contains the files that are used to measure how well you
implemented the problems by defining inputs and expected outputs to the
problems. Do NOT modify the code in these files. You should interact with the
test specs in these files through the terminal only. Feel free to browse through
the code in these files if you're curious though.

## Instructions

Follow all the prompts in each of the files inside of the __problems/__ folder.
A corresponding test spec file that you can use to test your code will be
provided in the __test/__ folder for each file in the __problems/__ folder.

Each file in the __problems/__ folder will have specific instructions on how you
can test your code to make sure you have completed all the requirements.
Typically this will mean running `npx mocha test/<name-of-spec-file>` in your
terminal. So, e.g., to test your code in the __problems/01-avg-value.js__
file, you would go to the terminal and run

```sh
npx mocha test/01-avg-value-spec.js
```

To run tests for all the __problems/__ files at once, just run `npx mocha` in
the terminal without specifying a particular file:

```sh
npx mocha
```

What if you just want to run your code to see the output of `console.log`s like
you did in the REPLs? You can do that too. In this case, the command you will
run is `node` followed by the path and filename of the file whose code you want
to run. For instance, to run the code in __problems/01-avg-value.js__,
you would go to the terminal and run

```sh
node problems/01-avg-value.js
```

Note that in this case, you should specify the actual file from the
__problems/__ folder and **NOT** the corresponding spec file from the __test/__
folder.

Once you pass all the test specs, submit the project for grading!

## Submission instructions

1. To make sure you are passing all of the specs for every part, re-run all the
   test specs by running the following command in your terminal:

   ```sh
   npx mocha
   ```

   __If you miss even just one spec, you will not pass the prepwork.__

   Whenever you run a command beginning with `npx mocha`, the command should
   conclude by reporting how many passing / failing specs you have and returning
   you to the terminal prompt. __If the command does not return you to the
   terminal prompt, you likely have an infinite loop somewhere in your code.__
   In this case, type `<Ctrl>+c` to exit the test and return to the prompt.
   __Having to exit a test in this way indicates a failing test, even if all the
   specs that appear in the output--i.e., all the specs run before encountering
   the loop--show green check marks.__

   __Note:__ A few specs that tend to produce infinite loops check for this
   condition, break the loop if one occurs, and report a normal failing spec
   when an infinite loop is detected. This check does not occur on every spec,
   however, so you should be aware of an infinite loop's presenting symptoms.

2. Compress or zip up this folder and its contents.
3. Submit the zip file by clicking the green "Submit Project" button at the
   bottom of this page.
4. You will receive an email within a day with your graded score. You can
   continue with the rest of your assigned work even if you haven't received
   your graded score.
