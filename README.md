# PixelPasts

**PixelPasts** is a full-stack e-commerce application that enables users to register accounts, browse products, manage shopping carts, check out using Stripe, and select pickup points via the PostNord API. This project incorporates a custom authentication system, Stripe webhooks for real-time payment processing, and utilizes modern web technologies

## Features

* Custom Authentication: Secure user authentication system built from scratch using cookie-based sessions.
* E-commerce Functionality: Comprehensive product browsing, cart management, and checkout flow integrated with Stripe.
* Real-Time Notifications: Utilizes Stripe webhooks to handle post-purchase events.
* Pickup Point Integration: Allows users to select PostNord pickup points related to their delivery address.
  

## Prerequisites
* Node.js
* npm or yarn



## Installation
**These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.**

**Clone the repository:**
* git clone https://github.com/frankosgit/PixelPasts
  
**Install frontend dependencies:**
```cd pixelpasts/client```
``` npm install```

**Install backend dependencies:**
```cd pixelpasts/server```
```npm install```

**Set up environment variables:**
Create a .env file in the **backend directory** and add the following variables:


* STRIPE_API_KEY = your_stripe_apikey
* SERVER_PORT = your_serverport
* SESSION_SECRET = your_session_secret (for cookiesessions)
* ENDPOINT_SECRET = your_endpoint_secret (for stripe webhook)
  
Create a .env.local file in **frontend directory** and add the following variables:
* VITE_POSTNORD_KEY= your_postnord_key


## Start the backend server:
```cd pixelpasts/server```
```nodemon```
  
## Start the frontend application:
```cd pxielpasts/client```
```npm run dev```

The app should now be running on http://localhost:5173.

## Setting Up Stripe Webhooks for Local Development

To ensure that the Stripe webhooks function correctly in your local development environment, you will need to set up the Stripe CLI to forward webhook events to your local server. This allows you to handle events like payment confirmations in real time.

### Install Stripe CLI

If you haven't already installed Stripe CLI, follow the instructions on the [Stripe CLI documentation page](https://stripe.com/docs/stripe-cli) to install it on your machine.

### Start Listening to Stripe Events

Once the Stripe CLI is installed, open your terminal and run the following command to start listening to webhook events and forward them to your local server endpoint:

```stripe listen --forward-to localhost:3000/verify/confirmationwebhook```

This command creates a bridge between Stripe and your local server, allowing Stripe to send webhook events directly to your application.

### Obtain a Webhook Signing Secret
When you run the *stripe listen* command, it will provide you with a webhook signing secret. Update your server's environment variables to include this webhook signing secret:
* ENDPOINT_SECRET=your_webhook_signing_secret_here

### Keep the Terminal Running
* Keep the terminal where the Stripe CLI is running open while you are developing. If you close it, your local backend will no longer receive webhook events.

By following these steps, you can test and develop features that rely on Stripe webhooks right in your local environment, ensuring that everything functions as expected before deployment.

## Usage
**User Registration and Login:** 
* Create an account in order to progress beyond cart, to checkout.
* Folow checkout process using fake stripe payment details: 
cardnum: 4242 4242 4242 4242,
expiry: 04 / 35,
CVC: 656,
* Optional usage of discount voucher pixel10 at checkout,
* On checkout completion navigate to profile, and view your order, and add a postnord service point correlating to the address given in profile creation.
  
## Built With
* React - The web framework used
* Node.js - Backend server Environment
* Express - Web application framework for routing and middleware
* Stripe - Payment processing.
* Cookie-sessions - Session management and authentication.


## Authors
Francis Jones



