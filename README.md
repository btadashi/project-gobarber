<h1 align="center">
  <img alt="logo" title="gobarber" src=".github/logo.png" />
</h1>
<h1 align="center">Project GoBarber</h1>
<p align="center">ReactJS application for GoBarber Project</p>

<p align="center">
 <a href="#about">About</a> •
 <a href="#layout">Layout</a> •
 <a href="#technologies">Technologies</a> •
  <a href="getting">Getting Started</a> •
 <a href="#contribution">Contribution</a> •
 <a href="#license">License</a> •
 <a href="#author">Author</a>
</p>

## About
<p align="justify">Application used to make appointments for barbershop services. The project is divided into back-end (Node.js), front-end (ReactJS) and mobile (React Native).</p>

## Layout
<p align="justify">You can view the layout accessing the following link: <a href="https://www.figma.com/file/BXCihtXXh9p37lGsENV614/GoBarber?node-id=34%3A1180">See it</a>

## Technologies
The project's been developed using the following technologies:
- Node.js
- Typescript
- ReactJS
- React Native
- Docker
- PostgreSQL
- MongoDB
- Redis

## Getting started
```bash
# Clone this repository
$ git clone https://github.com/btadashi/project-gobarber.git

# Navigate to the folder 'backend'
$ cd project-gobarber
```
### Docker
Make sure you have Docker installed in your machine.
```bash
# Open a command-line terminal and run the following commnand to initialize docker:
$ docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Verify if the images are running as expected:
$ docker ps

# In case images are not running try out the command below:
$ docker start database
```
### Back-end
```bash
# Navigate to the folder 'backend'
$ cd backend

# Install all dependencies:
$ yarn

# Run the migrations:
$ yarn typeorm migration:run

# Start application:
$ yarn dev:server
```
### Front-end
```bash
# Navigate to the folder 'frontend'
$ cd frontend

# Install all dependencies:
$ yarn

# Start application:
$ yarn start
```
### Mobile
```bash
# Navigate to the folder 'mobile'
$ cd mobile

# Install all dependencies:
$ yarn

# Start application:
$ yarn android
```
## Contribution
1. Fork this repository.
2. Create a new branch with your changes ```git checkout -b my-feature```
3. Commit your changes to the branch ```git commit -m "feature: My feature"```
4. Now just push it ```git push origin my-feature```
5. Submit pull request
## License
This project is under MIT license. 
## Author
This project's been developed by <a href="https://www.linkedin.com/in/bruno-yamaguchi/">Bruno Yamaguchi</a> during GoStack Bootcamp.
