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

Contest is hosted on Melange system. Its website is: [Melange System](http://www.google-melange.com/gci/homepage/google/gci2014)

## About

FOSSASIA is Free and Open Source Software (FOSS) event for developers, officials and users in South-East Asia. Its main goal is fostering FOSS projects in Asia.
This year FOSSASIA is one of mentoring organizations during Google Code-In. 

## Developers

There's number of tasks with a wide variety outthere. Feel free to claim and work on!  

**Remember** : It is important that you do many tasks. But doing most tasks is not enough to be a winner. Out of the top ten students the finalists are picked on the quality of work. So in addition to finishing tasks quickly pay attention to submit the best work you can. Help each others out. Engage in conversations. Make friends!. Enjoy!!

## Contribution Guidelines

1. Please use **4 spaces** for indentation everywhere. Do not use tabs.
1. Comment your code wherever possible.
1. JavaScript is written based on the [jQuery styleguide](http://contribute.jquery.org/style-guide/js). Please follow this whenever writing JavaScript.

## Adding images

FOSSASIA invites all students to work on tasks mentored by itself. If you're the student you can add your name and photo to [FOSSASIA's website](http://fossasia.github.io/) by uploading image and editing index.html file. 
There you can see [guidelines](http://www.google-melange.com/gci/task/view/google/gci2014/4526650616184832) . Below there's simple instruction:

1. Sign up or login into [GitHub](http://github.com/)

1. Fork [this repository](https://github.com/fossasia/fossasia.github.io) using button in right top corner.

1. Enter in console `git clone https://github.com/YOURNICK/fossasia.github.io.git`

1. Go to the folder using `cd fossasia.github.io` command

1. Copy your photo to `images/students` directory rescaling it before (to size about 300px * 300px). **If the image isn't exactly square, it cannot be accepted.** Please ensure a lowercase extension (`jpg` instead of `JPG`).

1. Enter command `git add images/students/nameofyourphoto.yourfilextenstion` into the command line.

1. Use any editor to open `_data/students.json` file. Add your own data there by copying and pasting a previous student's code and modifying it. For social networks, please only enter your *username*, not the whole URL. Feel free to remove lines of social networks you're not a part off.

1. Enter command `git add _data/students.json`

1. Commit changes: `git commit -m "Added photo and information"`

1. Send them to the server: `git push origin master`

1. Go to the browser and your forked repository and press "Pull request"

1. Describe what changes have you made and press "Create pull request"

1. Congrats! Now wait until it will be reviewed!


URL of website: http://fossasia.github.io/  
URL of main FOSSASIA's website: http://fossasia.org/  
FOSSASIA's Facebook: http://facebook.com/fossasia  
FOSSASIA's Twitter: http://twitter.com/fossasia  

## Installing GitHub on Windows
1) Signup for a [GitHub account](https://www.github.com) , or Login if you already have one.

2)	Download the setup for GitHub from [Windows GitHub](https://windows.github.com/)
 
 ![Download Button Previe](http://i58.tinypic.com/1677bki.png "Download Button Preview")
 
Click on `Download GitHub for Windows` to download GitHub.

3)	The download will take a while (depending on your Internet connection). After the installation, a window like this should appear:

![GitHub Window Preview](http://i58.tinypic.com/30kghtg.png "GitHub Window Preview")
 
4)	Login and then open up your web browser and log in to your account. Go to [FOSSASIA's GitHub Repository](https://github.com/fossasia/fossasia.github.io) and click on `Fork` at the top right corner.

![Forking Preview](http://i61.tinypic.com/350udl5.png "Forking Preview")
 
5)	Open up your GitHub client and clone the repository by clicking on the `+` sign on the top right corner, selecting `Clone` and then `Clone fossasia.github.io`.

![Cloning Repository Preview](http://i61.tinypic.com/21d0chd.png "Cloning Repository Preview")
 
6)	The cloning process may take a while. After that, open up the cloned folder `fossasia.github.io`, navigate to `images/students` and add your image there.


7)	Navigate to `_data` and open up `students.json` in your text editor. As others have added, add yourself to the list with the same format, your entered text should look something like this:

```javascript
{
    "social": {
        "github": "your github username",
        "twitter": "your twitter username, no @",
        "facebook": "your facebook username",
        "mail": "your email ID",
        "link": "A link to your website/other profile",
        "gplus": "Google plus username, without +"
    },
    "imgName": "The filename of the image you added.extension",
    "name": "Your Name"
},
```

The text after the colon (`:`) should be your own credentials—your own facebook URL (not the complete, but just the part after `.com`), your email, your twitter (without the `@`) etc. Note the commas and the quoted values. All social links are optional, you can even remove the social part entirerly. 

8)	When you are done, your GitHub client’s window should look something like this:

![Making The Changes Preview](http://i60.tinypic.com/e6q1qe.png "Making The Changes Preview")
 
Describe the changes made and then click on `Sync` at the top right corner.

9)	After that, open up your forked repository from your profile which would have a url of this type: `https://github.com/[yourusername]/fossasia.github.io.git`.

![Making The Pull Request Preview](http://i61.tinypic.com/2lm5e7d.png "Making The Pull Request Preview")
 
10)	Now click on `Pull Request`; describe the changes you made and click on `Create Pull Request`. Congratulations, your pull request has been successfully made with your name and your photo added. 
