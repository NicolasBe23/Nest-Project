# My Nest Project 🚀

A project developed using the **NestJS** framework, with database support provided by **PostgreSQL** via TypeORM.

## 📋 Features  

- **Task Management**:
  - Create, list, update, and delete tasks.
  - Each task includes a title, description, status, and expiration date.
- **User Authentication**:
  - User registration.
  - Password hashing for security.

## 🛠️ Technologies  

- **Backend**: [NestJS](https://nestjs.com/)  
- **Database**: PostgreSQL  
- **ORM**: TypeORM  
- **Configuration Management**: Dotenv  
- **Others**: Docker (optional)  

## 🖥️ Project Setup and Execution  

### Prerequisites  
Make sure you have the following tools installed:  
- [Node.js](https://nodejs.org/) (recommended LTS version)  
- [PostgreSQL](https://www.postgresql.org/)  
- (Optional) [Docker](https://www.docker.com/)  

### Steps  

1. Clone this repository:
   ```bash
   git clone <REPOSITORY_URL>
   cd my-nest-project



Install dependencies:
```bash
npm install
```


Set up environment variables:

Create a .env file in the root directory based on .env.example.

Set the values for variables such as DB_HOST, DB_USERNAME, DB_PASSWORD, etc.

Run the project:
```bash
npm run start:dev
```

With Docker:
```bash
docker-compose up --build
```

Run migrations to configure the database:
```bash
npm run migration:run
```

🧪 Tests
To run tests, execute:
```bash
npm run test
```

📂 Project Structure
Below is the main structure of the project:
```bash
src/
├── db/                 # Database configuration and migrations
│   ├── entities/       # TypeORM entities
│   └── migrations/     # Migration files
├── task/               # Task-related functionalities
├── users/              # User-related functionalities
├── app.module.ts       # Main NestJS module
└── main.ts             # Bootstrap file
```

📝 License
This project is licensed under the MIT License. See the LICENSE file for more information.
