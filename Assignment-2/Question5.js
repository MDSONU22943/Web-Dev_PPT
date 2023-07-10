/*
Q.5 How is Border-box different from Content Box?
Ans-In HTML, the terms "border-box" and "content box" are actually related to the CSS box-sizing property, which determines how the total width and height of an element are calculated.

Content Box (default behavior):

When the box-sizing property is set to "content-box" (the default value), the width and height of an element are calculated by considering only the content area.
In this mode, any padding or border added to the element increases its total width and height. The content area remains unchanged.
Border-box:

When the box-sizing property is set to "border-box", the width and height of an element are calculated by including the content area, padding, and border.
In this mode, the specified width and height of the element include the padding and border. The content area shrinks to accommodate the padding and border dimensions.
The key difference between "border-box" and "content-box" is how the dimensions of an element are calculated and what elements they include:

"Content-box" calculates the dimensions based on the content area alone, with padding and border added on top.
"Border-box" calculates the dimensions by including the content area, padding, and border together.
*/