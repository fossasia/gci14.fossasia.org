This repository has been created to save files of Google Code-In FOSSASIA's website telling about GCI 2014 mentors and students.
---
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

---
FOSSASIA is Free and Open Source Software (FOSS) event for developers, officials and users in South-East Asia. Its main goal is fostering FOSS projects in Asia.
This year FOSSASIA is one of mentoring organizations during Google Code-In. 

---

FOSSASIA invites all students to work on tasks mentored by itself. If you're the student you can add your name and photo to http://fossasia.github.io/ by uploading image and editing index.html file. 
There you can see guidelines: http://www.google-melange.com/gci/task/view/google/gci2014/4526650616184832 . Below there's simple instruction:

1) Sign up or login into GitHub (http://github.com/)

2) Fork this (https://github.com/fossasia/fossasia.github.io) repository using button in right top corner.

3) Enter in console `git clone https://github.com/YOURNICK/fossasia.github.io.git`

4) Go to the folder using `cd fossasia.github.io` command

5) Copy your photo to `images/students` directory rescaling it before (to size about 300px * 300 px)

6) Enter command `git add images/students/nameofyourphoto.yourfilextenstion`

7) Use editor to open index.html file in main directory, look for section for students and using samples add your name and photo to it. You can see example of code below:

```html
<div class="sympl onethird">
	<section class="person person--student">
	  <div class="person__img">
      <div class="person__img__info"><div class="person__img__info__cont">
        <a href="https://twitter.com/YOURTWITTER"><i class="icon-twitter"></i></a> <!-- You can remove this line -->
        <a href="http://github.com/YOURGITHUB"><i class="icon-github"></i></a> <!-- You can remove this line -->
      </div></div>
      <img src="images/students/NAMEOFYOURPHOTO.EXTENSTIONOFYOURPHOTO">
	  </div>
	  <h1 class="person__name">YOUR NAME THERE</h1>
	</section>
</div>
```



8) Enter command `git add index.html`

9) Commit changes: `git commit -m "Added photo"`

10) Send them to the server: `git push origin master`

11) Go to the browser and your forked repository and press "Pull request"

12) Describe what changes have you made and press "Create pull request"

13) Congrats! Now wait until it will be reviewed!

---
URL of website: http://fossasia.github.io/  
URL of main FOSSASIA's website: http://fossasia.org/  
FOSSASIA's Facebook: http://facebook.com/fossasia  
FOSSASIA's Twitter: http://twitter.com/fossasia  
