# README.md

## Description
This repo is going to envolve all the demo assessment needed for a seniority position, envolving UI tests, API tests and DB tests.

# Run the project locally

The project can be executed locally running any of the following commands
```
npx cypress@10 open
cypress run --spec <ROOT_FILE>/*.cy.js
```

## Run the project with Cypress Docker Image

The project is integrated with docker so you need to run the following commands on folder root cmd to run the project

```
docker run -it -v "%cd%":/e2e -w /e2e cypress/included:10.8.0 --spec <ROOT_OF_SPEC> --browser <BROWSER_NAME>
```

## Build and Run the project with DockerFile

The project is integrated with docker and it could be runned creating an image and running the project

```
docker build demo-assesment:1.0.0 . #creating the image of the project
docker run -i  -v "%cd%":/demo-assessment -t demo-assesment:1.0.0 #in case you want to run and specific spec you can add the command <--spec> and the root of the spec
```

## Set up the project to run from jenkins

The project can be setted up to run from a Jenkins local image, to do it you need to go https://www.jenkins.io/doc/book/installing/docker/ and follow the steps to create a Jenkins image to run the project






