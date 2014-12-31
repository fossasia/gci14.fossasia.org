# Fossasia's site for Google Code-in

GCI (Google Code-In) is annual contest sponsored by Google, which directed for students of middle and secondary schools. 
Students have to be between 13 and 17 years old, they also have to upload parental consent and document, which proofs their attendance to pre-university institution.
Main goal of contest is to propagate open-source idea between young people and give them possibility to solve tasks for partnering organizations.

There 5 kinds of tasks:

a) Code

b) Documentation/Training

c) Outreach/research

d) Quality assurance

e) User interface

For solving tasks students can get many prizes. Grand Prize is founded by Google four-day trip to San Francisco and Google headquaters.

Contest is hosted on Melange system. Its website is: http://www.google-melange.com/gci/homepage/google/gci2014

## About

FOSSASIA is Free and Open Source Software (FOSS) event for developers, officials and users in South-East Asia. Its main goal is fostering FOSS projects in Asia.
This year FOSSASIA is one of mentoring organizations during Google Code-In. 

## Developers

There's number of tasks with a wide variety outthere. Feel free to claim and work on!  

**Remember** : It is important that you do many tasks. But doing most tasks is not enough to be a winner. Out of the top ten students the finalists are picked on the quality of work. So in addition to finishing tasks quickly pay attention to submit the best work you can. Help each others out. Engage in conversations. Make friends!. Enjoy!!

## Adding images

FOSSASIA invites all students to work on tasks mentored by itself. If you're the student you can add your name and photo to http://fossasia.github.io/ by uploading image and editing index.html file. 
There you can see guidelines: http://www.google-melange.com/gci/task/view/google/gci2014/4526650616184832 . Below there's simple instruction:

1. Sign up or login into GitHub (http://github.com/)

1. Fork this (https://github.com/fossasia/fossasia.github.io) repository using button in right top corner.

1. Enter in console `git clone https://github.com/YOURNICK/fossasia.github.io.git`

1. Go to the folder using `cd fossasia.github.io` command

1. Copy your photo to `images/students` directory rescaling it before (to size about 300px * 300px). If the image isn't exactly square, it cannot be accepted. Please ensure a lowercase extension (`jpg` instead of `JPG`).

1. Run the imageSize test. You'll need to install [Mocha](http://mochajs.org/) and [nodejs](http://nodejs.org/) for the tests. In the `fossasia.github.io` directory, first run `npm install` to install the needed dependencies. Then run the test by typing `mocha tests/imageSize`. If the test passes, you'll see two ticks. If it fails, please modify the image you have added for it to have an equal height and width. The pull request cannot be accepted if this test fails.

1. Enter command `git add images/students/nameofyourphoto.yourfilextenstion` into the command line.

1. Use editor to open index.html file in main directory, look for section for students. Copy a student's section and make changes to it. Add your name, photo, and social network details.

1. Enter command `git add index.html`

1. Commit changes: `git commit -m "Added photo and information"`

1. Send them to the server: `git push origin master`

1. Go to the browser and your forked repository and press "Pull request"

1. Describe what changes have you made and press "Create pull request"

1. Congrats! Now wait until it will be reviewed!

URL of website: http://fossasia.github.io/  
URL of main FOSSASIA's website: http://fossasia.org/  
FOSSASIA's Facebook: http://facebook.com/fossasia  
FOSSASIA's Twitter: http://twitter.com/fossasia  