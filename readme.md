

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

My next goal is to make all elements sizes dynamics, so I will use the calc() method, and viewport units to write less code as possible in media query. Let's try.

3) ### Using Variables in @media Query
The footer and navbar heights are the same in all devices. 
Only the height of the main section change, for that reason I tried to declare a main_height variables in @media query, to fit the main section depends on device viewport. Exemple: 
```
// Mobile Iphone 6/7/8
@media screen and (min-device-width:375px), screen and (min-width:375px) {
    $main_height: 528px;
}

...
```
Unfortunely this doesn't work. Let's see if there's another solution..

4) ### Using mixins
I finally found a solution : mixins !
I create a mixin called responsive-main-height, and wrote inthere each height size according to each media query.

**_variables.scss**
```
@mixin responsive-main-height{

    // Mobile Iphone 5/SE
    @media screen and (max-device-width:370px), screen and (max-width:370px) {
        height: 429px;
    }

    ...
}
```
**styles.scss**
```
@import 'variables';
main { 
    @include responsive-main-height;
}
```


5) ### How I made it responsive
- Using 100% width instead of 100vw for header, main and footer
- Use vh to set the height of nav, main, and footer sections



##  Time to do:  
  
1) Integration mobile first Iphone 6/7/8 without sidebar: 10h *(check files index_old and styles_old.scss)*
2) Technological monitoring about responsive design : 5h
  
#####  Created by Jonathan Lutz
