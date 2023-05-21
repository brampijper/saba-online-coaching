# Saba Online Coaching - Client

This repository contains the client-side code for the Saba Online Coaching application. The client is built with [React](https://reactjs.org/) and Gatsby.
It communicates with the server-side API to fetch data and provide a user interface for the application.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/brampijper/saba-online-coaching.git
   ```

2. Navigate to the client directory:

   ```bash
   cd saba-online-coaching/client
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure the environment variables:
   - Create a `.env` file in the `client` directory.
   - Open the `.env` file and set the following variables:
     - `REACT_APP_API_BASE_URL`: The base URL of the server-side API. (For example: `http://localhost:1337`)
     - Any other necessary environment variables based on your configuration.

5. Start the client application:

   ```bash
   npm start
   ```

6. The client application should now be running on `http://localhost:8000`.


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Make sure to follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
