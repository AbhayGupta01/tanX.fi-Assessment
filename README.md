# Ecommerce (React) Coding Assessment

## Working functionalities:
1. Login/SignUp.
2. Favourites Page and adding items to favourites.
3. Cart Page (Incrementing, Decrementing item quantities, remove the item from cart, calculating the total bill with some discount and Order confirmation).
4. Multiple users can register in this site, it is not limited to one user.
5. Only if user has logged in, the cart and favourites become functional otherwise the user won't be able to add items in the cart or favourites.
6. Email and Password verification from the db.json file.
7. Email format validations.

## Improvements if more time is given:
1. I have used localStorage to handle the session of any user, a better approach could have been using the jsonwebtoken to handle the sessions.
2. There is issue in favourites and cart page which was due to the distribution of item.id of favourites page items and cart page items being similar. Can be resolved if more time is alloted.

I have done my best to achieve all the required functionalities while keeping the UI as minimal as possible.

## Development Setup

- Clone this repo
- `npm install` - To install the dependencies
- `npm run server` - To start the JSON server
- `npm start` - To start the react app

## Screenshots

### Login/Register page:

![image](https://github.com/AbhayGupta01/tanX.fi-Assessment/assets/80665616/06a96c89-ba30-4f3f-8d9a-bac8df5b5516)

## Email Validation (It also verifies the user using password):

![image](https://github.com/AbhayGupta01/tanX.fi-Assessment/assets/80665616/3c38bf12-46f8-4962-a5dc-d07e1e179868)


## Email, Username and Password Validations:

![image](https://github.com/AbhayGupta01/tanX.fi-Assessment/assets/80665616/8abc3e37-c2f3-46d9-ae62-7e8fb6b7cded)

### Home page / Products page:

![image](https://github.com/AbhayGupta01/tanX.fi-Assessment/assets/80665616/93496eb8-a2e3-4de0-8c44-4a6188eaa055)

## Favourites page:

![image](https://github.com/AbhayGupta01/tanX.fi-Assessment/assets/80665616/d90c3cfc-7f58-402d-ac9b-4cbab99a7f64)

### Product detail page

![image](https://github.com/AbhayGupta01/tanX.fi-Assessment/assets/80665616/ec3a7da9-7d2a-49f6-8307-1e4e27dfd53c)

![image](https://github.com/AbhayGupta01/tanX.fi-Assessment/assets/80665616/564354fa-0baa-4c8e-8ad4-a1bd157d31ac)


### Cart page

![image](https://github.com/AbhayGupta01/tanX.fi-Assessment/assets/80665616/55191145-25d8-4f60-afc0-8c399982be22)


![image](https://github.com/AbhayGupta01/tanX.fi-Assessment/assets/80665616/b1efe0ff-29b1-4980-8609-f7d063c9048b)


![image](https://github.com/AbhayGupta01/tanX.fi-Assessment/assets/80665616/2d0a52ab-d077-4a5e-8f94-d5a72f78873d)

API can be launched using npm run server.
| Endpoint | Result |
|------------------------------|-----------------------------------------------------|
| /users | Lists all available users |
| /products | Lists all available products |
| /orders | Lists all available orders  
| /favourites | Lists all available favourites

Refer - [JSON sever](https://www.npmjs.com/package/json-server) docs for more information



