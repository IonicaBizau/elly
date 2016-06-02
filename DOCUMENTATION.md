## Documentation

You can see below the API reference of this module.

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
- **NodeList** The `NodeList` object containing the selected elements.

