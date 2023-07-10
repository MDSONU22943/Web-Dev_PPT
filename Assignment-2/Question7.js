/**
 Q.7 What’s Grid & Flex and difference between them?
Ans-Grid and Flexbox are both CSS layout systems that provide powerful tools for creating responsive and flexible web page layouts. While they have some similarities, they also have key differences in terms of their approach and use cases.

1. Flexbox:
Flexbox, also known as "Flexible Box Layout," is a one-dimensional layout system designed for arranging elements in a linear direction, either horizontally or vertically. It focuses on distributing space within a container along a single axis.

Key features of Flexbox:
- Main Axis and Cross Axis: Flexbox has a main axis (either horizontal or vertical) and a cross axis (the perpendicular axis).
- Flex Container and Flex Items: The parent container becomes a flex container by applying the `display: flex` property. The child elements within the flex container are called flex items.
- Flex Direction: It defines the main axis direction (`row`, `column`, `row-reverse`, `column-reverse`).
- Flexibility: Flex items can grow, shrink, or have a fixed size based on their flex properties (`flex-grow`, `flex-shrink`, `flex-basis`).
- Alignment: Flexbox provides alignment properties (`justify-content`, `align-items`, `align-self`) to control the positioning of flex items within the container.

Flexbox is best suited for creating one-dimensional layouts, such as navigation bars, flexible content containers, or vertically stacking elements. It excels at distributing space and aligning elements along a single axis.

2. Grid:
CSS Grid Layout, often referred to as just "Grid," is a two-dimensional layout system that allows you to create complex grid-based layouts with rows and columns. It provides more control over the placement and alignment of elements in both the horizontal and vertical directions.

Key features of Grid:
- Rows and Columns: Grid involves dividing the layout into rows and columns.
- Grid Container and Grid Items: The parent container becomes a grid container by applying the `display: grid` property. Child elements within the grid container are grid items.
- Grid Tracks: Rows and columns in the grid are known as grid tracks. They can be defined with fixed sizes (`px`, `%`) or flexible units (`fr`, `auto`).
- Grid Template Areas: Grid allows you to define named areas within the layout using `grid-template-areas`, making it easy to create complex and responsive designs.
- Placement and Spanning: Grid provides control over item placement using `grid-row` and `grid-column`. Items can span across multiple rows or columns.
- Alignment: Grid offers alignment properties (`justify-items`, `align-items`, `justify-content`, `align-content`, `justify-self`, `align-self`) to align items within cells or the grid as a whole.

Grid is ideal for creating more intricate and structured layouts, such as grids with multiple columns, card-based designs, or magazine-style layouts. It offers comprehensive control over both the horizontal and vertical dimensions of the layout.

In summary, Flexbox is well-suited for one-dimensional layouts, while Grid is more powerful for two-dimensional layouts. Depending on your layout requirements, you can choose between Flexbox and Grid or even combine them to create flexible and dynamic designs.
 */