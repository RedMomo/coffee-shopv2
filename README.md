# Emotional Support Coffee, v2.0

This is the frontend for a second version of a basic e-commerce coffee shop, meant to solidify my react-rails knowledge. It will utilize a RESTful API, created with ruby on rails (Coffee_Shopv2).

## Features

This application will have the following components in the front-end: 

1. A navbar header linking to the storefront, an about page, the landing pge (homepage), the login/signup page, and the cart. 
2. A landing page with a "featured products" section. Each product will have a "more details" button routing to a details page for that product, as well as an "add to cart" button, which will add the product to a shopping cart. There will also be a "shop all" button routing to the storefront.
3. A storefront listing all of the products, each with a "more details" button routing to a details page for that product and an "add to cart" button, which will add the product to a shopping cart.
4. Details pages for each product displaying information about the product, including additional photos and info on its process. This page will also include a working "add to cart" button.
5. A shopping cart listing all of the products the user plans to buy. If there are multiples of a product, those multiples will be listed in the same line with an accurate and updateable "quantity" field. There will also be a delete button to remove items from the cart. 
6. A full checkout process utilizing Stripe or Square. 
7. A footer displaying contact information, including location, hours, and social media links (with the appropriate icons). 
8. Fully functional signup, login, and logout pages:
    a. An admin page will display a dashboard allowing the admin-user to create, edit, and delete listings. 
    b. The user page will display a dashboard allowinng the customer-user to view their cart history. 