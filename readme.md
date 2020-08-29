

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

2) ### Responsive Strategy
Let's talk about my strategy to make responsive.
I know em is a sizing unit, related to the pixel sizing of the font. So if you decide to zoom in your page (ctrl +), this is increasing the size of the text, also the size of elements wich is dimensioned with em.

Default browser text size: 16px, so 1em = 16px

For the moment I looked at the width and height of the element on the official google homepage to know the exact size of the elements. And after I convert this size px to em, hoping it would make my design responsive. 

So if element wich is, 100% width is equal to 375px, I convert 375px to 23.4375em (at font-size: 16px).

When somebody will zoom +50%, the text + elements will grow +50%.

But this method isn't working as I expected, when I make my screen bigger, the footer wich is in em didn't grow as expected, there's a gap next to the footer.

When design broke, we call this breakpoint, so normally I should use media query to re-size every element at this breakpoint. But I want to try another thing, a little more complicate but maybe worth it.

My next goal is to make all elements sizes dynamics, so I will use the method calc() to write less code as possible, and make everything responsive. Let's try.

  
##  Time to do:  
  
1) Integration mobile first Iphone 6/7/8 without sidebar: 11h
  
#####  Created by Jonathan Lutz
