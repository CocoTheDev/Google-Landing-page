

#  Google home page integration  
####  GitHub  Page : https://cocothepimp.github.io/Google-Landing-page/
  
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
I create a mixin called responsive, and wrote inthere each variations according to each media query.

**_responsive.scss**
```
@mixin responsive-mixin{

    // Mobile Iphone 5/SE
    @media screen and (max-device-width:374px), screen and (max-width:374px) {

        .main {
            height: 408px;
        }
        
    }

    ...
}
```
**styles.scss**
```
@import 'responsive';
body { 
    @include responsive-mixin;
}
```





## Tips & Advices
0. Set body height and width to 100 vh vw
1. Code it Mobile First ! (Iphone 5/SE should be a good base)
2. First create sections with nothing in, place it on the page, and set @media queries *(use different background-color for better visual)* 
3. Use the responsive dev tool to play with your project and see how it breaks
4. Continue with the child sections *(Don't miss to look at different viewport to see how div's moving)*
5. Sometimes zoom out your view to see if all is centered
6. If you're using mixin like me for responsive, call it at the end of your css file to overwritting default style






##  Time to do:  
  
1. **Integration mobile first Iphone 6/7/8 without sidebar: 10h** 
2. **Technological monitoring about responsive design : 6h**
3. **Restarted using media query : Xh**
  
## Ideas to release
1. improve accessibility 
    1. search bar focusable
    2. vocal search
    3. localisation
    4. language


#####  Created by Jonathan Lutz
