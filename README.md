
[![elly](http://i.imgur.com/hQjyLBz.png)](#)

# elly

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/elly.svg)](https://www.npmjs.com/package/elly) [![Downloads](https://img.shields.io/npm/dt/elly.svg)](https://www.npmjs.com/package/elly) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

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


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bloggify-social`](https://github.com/Bloggify/social)—A Bloggify plugin for sharing articles on social networks.
 - [`dom-repeater`](https://github.com/IonicaBizau/dom-repeater#readme)—Render lists in DOM easily.
 - [`github-calendar`](https://github.com/IonicaBizau/github-calendar#readme)—Embed your GitHub contributions calendar anywhere.
 - [`mini-lightbox`](https://github.com/ionicabizau/mini-lightbox)—Minimalist image lightbox

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
