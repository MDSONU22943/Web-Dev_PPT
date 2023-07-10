/*
Q.8 Difference between absolute and relative and sticky and fixed position explain with example.
Ans-Sure, here is the difference between absolute, relative, sticky, and fixed position in CSS:

| Position | Description | Example |
|---|---|---|
| **Static** | This is the default position for all elements. Elements with static position are placed in the normal flow of the document, and they are not affected by any of the other positioning properties. | `<div>This is a static element.</div>` |
| **Relative** | Elements with relative position are positioned relative to their normal position in the flow of the document. This means that you can use the `top`, `right`, `bottom`, and `left` properties to move the element around, but it will still be affected by the surrounding elements. | `<div style="position: relative; top: 10px;">This is a relative element.</div>` |
| **Absolute** | Elements with absolute position are positioned absolutely to their nearest positioned ancestor. If there is no positioned ancestor, then the element is positioned absolutely to the document body. Absolute elements are removed from the normal flow of the document, so they will not affect the surrounding elements. | `<div style="position: absolute; top: 10px; left: 10px;">This is an absolute element.</div>` |
| **Sticky** | Elements with sticky position are positioned relatively until they reach a certain point in the document, then they are positioned absolutely. This means that the element will stay in place as you scroll past it, until it reaches the bottom of its parent element. | `<div style="position: sticky; top: 0;">This is a sticky element.</div>` |

Here is a table that summarizes the key differences between these four positioning types:

| Property | Static | Relative | Absolute | Sticky |
|---|---|---|---|---|
| **Affected by surrounding elements** | Yes | Yes | No | Yes (until the element reaches its fixed position) |
| **Removed from the normal flow** | No | No | Yes | No |
| **Positioned relative to** | The document flow | The element's normal position | The nearest positioned ancestor | The nearest positioned ancestor, or the document body if there is no positioned ancestor |

I hope this helps! Let me know if you have any other questions.
*/