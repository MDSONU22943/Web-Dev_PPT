/*
Q.6 What’s z-index and How does it Function ?
Ans-In HTML and CSS, the z-index property is used to control the stacking order of positioned elements. It determines how elements are stacked and layered on top of each other in the web page's visual hierarchy. The z-index property can be applied to elements with a positioned property such as relative, absolute, or fixed positioning.

The z-index property accepts a numerical value, where a higher value means the element will appear on top of elements with lower values. Elements with the same z-index value are stacked based on their order in the HTML markup, with the last element appearing on top.

For example, let's say you have three HTML elements: A, B, and C. By default, they have a z-index value of 0. If you want element B to appear on top of the others, you can give it a higher z-index value like 1. This would result in the stacking order: A, C, B.

Here's an example of how you can use the z-index property in CSS:

```css
#elementA {
  position: relative;
  z-index: 1;
}

#elementB {
  position: relative;
  z-index: 2;
}

#elementC {
  position: relative;
  z-index: 0;
}
```

In this example, element B will appear on top of element A and C because it has a higher z-index value.

It's important to note that the z-index property only works on positioned elements. Elements with a static position will not be affected by the z-index property. Additionally, the z-index property will only work within the same stacking context. Elements in different stacking contexts, such as elements with different parent elements or those with position values like fixed or sticky, will have their own stacking orders independent of each other.

By using the z-index property strategically, you can control the stacking order and layering of elements to create visually appealing designs and manage element overlaps in HTML and CSS.

*/