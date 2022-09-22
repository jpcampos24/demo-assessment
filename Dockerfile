#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node16.16.0-chrome105-ff99-edge
#Create the folder where our project will be stored
RUN mkdir /demo-assessment
#We make it our workdirectory
WORKDIR /demo-assessment
#Let's copy the essential files that we MUST use to run our scripts.
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
#Install the cypress dependencies in the work directory
RUN npm install
RUN npm install cypress
# execute the tests
RUN npm install
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run --browser firefox
RUN $(npm bin)/cypress run --browser chrome 