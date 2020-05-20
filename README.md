<p align="center">
  <img src="sample.png" width="600">
</p>

# react-cosha

[![latest version on npm](https://img.shields.io/npm/v/@lbsonley/react-cosha)](https://www.npmjs.com/package/@lbsonley/react-cosha) [![npm downloads a month](https://img.shields.io/npm/dm/@lbsonley/react-cosha)](https://www.npmjs.com/package/@lbsonley/react-cosha) [![required node version](https://img.shields.io/node/v/@lbsonley/react-cosha)](https://github.com/nodejs/Release) [![package license](https://img.shields.io/npm/l/@lbsonley/react-cosha)](license)

> Colorful shadows for your images in React. 🎨

***Port [cosha](https://npm.robinloeffel.ch/cosha) to React***

## How

```sh
yarn add @lbsonley/react-cosha
```

```jsx
import React from "react";
import Cosha from "react-cosha";

const Page = () => (
  <>
    <h1>Colorfully Shadowed Images</h1>
    {/* With a plain old image */}
    <Cosha>
      <img src="palm-tree.jpg" alt="nice vibes"/>    
    </Cosha>
    {/* With a picture tag */}
    <Cosha>
      <picture class="colorful-shadow">
        <source srcset="palm-tree-1200.jpg 1200w, palm-tree-800.jpg 800w, palm-tree-400.jpg 400w" type="image/jpeg">
        <source srcset="palm-tree-1200.webp 1200w, palm-tree-800.webp 800w, palm-tree-400.webp 400w" type="image/webp">
        <img src="palm-tree-400.jpg" alt="nice vibes"/>
      </picture>
    </Cosha>
  </>
);

export default Page;

```

## Customizing your shadow

`react-cosha` takes the follow props. Use them to customize the shadow attributes. Or just wrap your images in a `<Cosha>` tag and use the defaults.

| Name | Type | Required |Default | Description |
| --- | --- | --- | --- |
| blur | string | no | "10px" | Shadow blur |
| brightness | no | string | "125%" | Shadow brightness |
| saturation | no | string | "110%" | Shadow saturation |
| x | string | no | "2px" | Shadow horizontal offset |
| y | string | no | "6px" | Shadow vertical offset |

## Gotcha

It runs in every browser except Internet Explorer. This is because of missing support for [CSS `filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter#Browser_compatibility) properties. In case cosha detects it's running in a browser that doesn't have [`NodeList.prototype.forEach`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility) available, which at this point is only IE &lt;= 11, it simply doesn't do anything.

## License

MIT

## Giving Credit Where Credit is Due

Big shoutout to [Robin Loeffel](http://robinloeffel.ch) for creating the vanilla JS package. This project here simply adapts the original concept to use React's DOM API.
