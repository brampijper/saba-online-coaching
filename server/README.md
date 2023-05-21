
# Saba Online Coaching - Server

This repository contains the server-side code for the Saba Online Coaching application. The server is built with [Strapi](https://strapi.io/), which is a CMS to manage the data and APIs used by the application.

## Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/brampijper/saba-online-coaching.git
   ```

2. Navigate to the server directory:

   ```bash
   cd saba-online-coaching/server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure the environment variables:
   - Create a `.env` file in the `server` directory.
   - Open the `.env` file and set the following variables:
     - `DATABASE_URI`: The connection URL for your database.
     - `JWT_SECRET`: A secret key used for JSON Web Token (JWT) authentication.
     - Any other necessary environment variables based on your configuration.

5. Set up the database:
   - Ensure that you have a compatible database (such as MySQL, PostgreSQL, MongoDB) available.
   - Update the `config/database.js` file to configure the database connection settings according to your setup.

6. Build the admin panel:

   ```bash
   npm run build
   ```

7. Start the server:

   ```bash
   npm run develop
   ```

8. The server should now be running on `http://localhost:1337`.

## Usage

Once the server is up and running, you can access the Strapi admin panel to manage the content and APIs for the Saba Online Coaching application. To access the admin panel, open your browser and navigate to `http://localhost:1337/admin`.

In the admin panel, you can perform the following tasks:

- Create and manage users, coaches, and coaching sessions.
- Define content types and manage their fields.
- Configure APIs and permissions.
- Customize the application's settings and behavior.

Refer to the Strapi documentation for more information on how to work with the admin panel and manage your application's content.

## License

This project is licensed under the [MIT License](LICENSE).
