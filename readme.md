

#  Google home page integration  
####  GitHub  Page :   
  
##  Goals and origins of the project :  
Improving my skills in web front integration

## Tools / Dependencies
- npm
- live-server
- node-sass
- postcss-cli
- Visual Studio Code

  
##  What I  learned  :  

1) ### Visited link, the browser history
I was working on my local server. 
Deaspirating tries to change the color of a `<a href="#">`.
I think I loose 1h on this, the #551A8B color of the link was still here and nothing would change it.

After research, I found that this is the color of visited links. I though about it, but I never clicked on theses links since I started the project, so what's going on ? Why my browser put this color on my unvisited link ?

From where comes this "bug" ? The thing is that the url of the link `http://127.0.0.1:8080/public/#`, is present in many local project I had. So sure I was visited this url in the past ... and chrome remembers it.

So I simply put `` a:visited { color: inherit; }`` and everything was ok.
  
##  Time to do:  
  
1) Integration mobile first Iphone 6/7/8 without sidebar: 10h
  
#####  Created by Jonathan Lutz
