
[![elly](http://i.imgur.com/hQjyLBz.png)](#)

# elly

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/elly.svg)](https://www.npmjs.com/package/elly) [![Downloads](https://img.shields.io/npm/dt/elly.svg)](https://www.npmjs.com/package/elly)

> A tiny library for creating and selecting DOM elements.

## Is this a jQuery alternative?

Well, in many cases yes. *elly* is a tiny wrapper around the `querySelector`, `querySelectorAll` and `document.createElement`, so, it basically can select and create DOM elements.


## :cloud: Installation


Check out the [`dist`](/dist) directory to download the needed files and include them on your page.

If you're using this module in a CommonJS environment, you can install it from `npm` and `require` it:

```sh
$ npm i --save elly
```


## :clipboard: Example



```js
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <script type="text/javascript" src="../dist/elly.min.js"></script>
        <title>Elly Example</title>
    </head>
    <body>
        <ul class="my-list">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <script>
            // Select the list element
            var $myList = $(".my-list");

            // A new element
            $myList.appendChild(
                $("<li>", {
                    "class": "new-item"
                  , text: "4"
                })
            );
            // <ul class="my-list">
            //     <li>1</li>
            //     <li>2</li>
            //     <li>3</li>
            //     <li class="new-item">4</li>
            // </ul>

            // Select all the list items and remove the first one.
            $.$$(".my-list > li")[0].remove();
            // <ul class="my-list">
            //     <li>2</li>
            //     <li>3</li>
            //     <li class="new-item">4</li>
            // </ul>
        </script>
    </body>
</html>
```

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


### `elly(input, contextOrAttributes)`
Selects the DOM elements based on the provided selector. If there is no
commonjs/module environment, the `$` global variable will be created.

#### Params
- **String|HTMLElement** `input`: The element selector (e.g. `'#my-id > .my-class'`), the element tag you want to create
(e.g. `'<ul>'`) or the HTML element (will be returned by the function).
- **Object|HTMLElement** `contextOrAttributes`:

#### Return
- **HTMLElement** The HTMLElement that was provided or selected.

### `elly.$$(selector, context)`
Selects multiple elements. Note that if there is no commonjs/module environment, you will access this function using `$.$$`.

#### Params
- **String** `selector`: The DOM query selector.
- **HTMLElement** `context`: The element context/container. Defaults to `document`.

#### Return
- **Array** The array of elements.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bloggify-paypal-donate-popup`](https://github.com/Bloggify/bloggify-paypal-donate-popup#readme)—A plugin to display a PayPal donation popup on the page.
 - [`bloggify-social`](https://github.com/Bloggify/social)—A Bloggify plugin for sharing articles on social networks.
 - [`dom-repeater`](https://github.com/IonicaBizau/dom-repeater#readme)—Render lists in DOM easily.
 - [`github-calendar`](https://github.com/IonicaBizau/github-calendar#readme)—Embed your GitHub contributions calendar anywhere.
 - [`mini-lightbox`](https://github.com/ionicabizau/mini-lightbox)—Minimalist image lightbox

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
