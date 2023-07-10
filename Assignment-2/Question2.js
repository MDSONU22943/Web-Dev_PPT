/*
Q.2 What are the Different Types of Selectors in CSS & what are the advantages of them?
Ans- 
CSS selectors are used to target specific elements on a web page and apply styles to them. There are various types of selectors in CSS, each with its own advantages and use cases. Here are some commonly used CSS selectors:

1. Element Selectors: They target HTML elements by their tag name. For example, `p` selects all `<p>` elements. The advantage of element selectors is their simplicity and broad applicability, as they can be used to target multiple elements at once.

2. Class Selectors: They target elements based on the presence of a specific class attribute. Class selectors begin with a dot (`.`) followed by the class name. For example, `.my-class` targets all elements with the class "my-class". The advantage of class selectors is that they allow for more specific targeting and can be applied to multiple elements.

3. ID Selectors: They target elements based on their unique ID attribute. ID selectors begin with a hash (`#`) followed by the ID name. For example, `#my-id` targets the element with the ID "my-id". ID selectors are highly specific and can be useful when you want to target a single element on a page.

4. Attribute Selectors: They target elements based on the presence or value of a specific attribute. Attribute selectors are enclosed in square brackets (`[]`). For example, `[type="text"]` targets elements with the attribute `type` set to "text". Attribute selectors provide flexibility in targeting elements based on their attributes.

5. Descendant Selectors: They target elements that are descendants of a specific parent element. Descendant selectors use a space to separate the parent and descendant elements. For example, `ul li` targets all `<li>` elements that are descendants of a `<ul>` element. Descendant selectors allow for hierarchical targeting of elements.

6. Pseudo-classes and Pseudo-elements: Pseudo-classes target elements based on a specific state or condition, such as `:hover` for elements being hovered over. Pseudo-elements target specific parts of an element, like `::before` or `::after` to style the content before or after an element. They provide additional control and styling options.

The advantages of these different types of selectors in CSS are:

- Flexibility: CSS selectors provide a wide range of options to target elements based on various criteria, allowing for precise styling and layout control.

- Reusability: Class selectors and ID selectors allow styles to be applied to multiple elements or specific individual elements, respectively, which promotes code reusability.

- Specificity: CSS selectors with different levels of specificity enable targeting elements with varying levels of granularity, allowing for fine-tuned styling.

- Cascading and Inheritance: CSS selectors take advantage of the cascading nature of stylesheets, allowing styles to be inherited by child elements or overridden as needed.

By understanding and utilizing the different types of selectors in CSS, you can effectively style and manipulate the elements on your web page.

*/