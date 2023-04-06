Project :DecorHub

Documentation for Furniture Shop Product Page React Project

Introduction:
This React project is a furniture shop product page where users can view product details, select desired colors, view related furniture items, and add products to the cart. The project uses React functional components and hooks such as useState, useContext, and useReducer for state management. This documentation provides a guide on how to use the Furniture Shop Product Page React Project.

Getting Started:
To get started, you need to have Node.js installed on your machine. Clone the repository and install the dependencies using the command "npm install". After installing the dependencies, you can run the project using the command "npm start" to view the app in the browser.

Components:
The Furniture Shop Product Page React Project consists of the following components:

Product Detail Component: This component displays the product details such as name, price, description, and color options. The user can select a desired color and add the product to the cart by clicking the "Add to Cart" button. The component uses the useContext hook to update the cart value each time an item is added to the cart. The user can also view the related furniture items at the bottom of the page.

Image Gallery Component: This component displays the product images in a carousel format. The user can click on the thumbnail images to view the corresponding image in the carousel.

Related Products Component: This component displays the related furniture items at the bottom of the product detail page. Each related product item displays an image, title, and price. The user can click on a related product item to view the product details.

Cart Component: This component displays the items that have been added to the cart. The user can remove an item from the cart and click the "Buy Now" button to go to the cart page to complete the purchase.

State Management:
The Furniture Shop Product Page React Project uses the useState, useContext, and useReducer hooks for state management.

useState Hook: This hook is used to manage the state of the selected product color.

useContext Hook: This hook is used to share the cart state across different components. The cart value is updated each time an item is added to the cart.

useReducer Hook: This hook is used to manage the state of the cart items. The cart items are added and removed from the cart using this hook.

Conclusion:
The Furniture Shop Product Page React Project provides an interactive interface for users to view product details, select desired colors, view related furniture items, and add products to the cart. The project uses React functional components and hooks for state management. The use of useContext and useReducer hooks provides efficient and organized state management.
