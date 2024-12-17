# UniShare Website

## Table of Contents

- Getting Started
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- Development
  - [Running locally Frontend](#running-locally-frontend)
  - [Running locally Backend](#running-locally-backend)

## Getting Started

### Prerequisites

- Node.js
- npm
- Docker-compose

### Installation

1. Clone the repo

```sh
git clone https://github.com/Reberpower1/UniShare.git
```

2. Install NPM packages

```sh
cd UniShare/frontend
npm install
```

```sh
cd UniShare/backend
npm install
```

## Development

### Running locally Frontend

1. Go to the frontend folder

```sh
cd UniShare/frontend
```

2. Run the development server

```sh
npm start
```

### Running locally Backend

1. Go to the backend folder

```sh
cd UniShare/backend
```

2. Setup .env file based on .env.example

- Create a .env file in the backend folder
- Copy the content of .env.example to .env
- Change the values of the variables to your own

3. Run the MongoDB container

```sh
docker-compose up db
```

4. Run the development server

```sh
npm start
```

5.⁠ ⁠Stop MongoDB container

```sh
docker-compose down
```
