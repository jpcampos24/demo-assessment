#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/included:10.8.0
#Create the folder where our project will be stored
RUN mkdir /demo-assessment
#We make it our workdirectory
WORKDIR /demo-assessment
#Let's copy the essential files that we MUST use to run our scripts.
ENV CHROMIUM_EXTRA_LAUNCH_ARGS=--disable-gpu
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
# execute the tests
RUN npm install
RUN npm install cypress
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run --headless --spec "cypress/e2e/1-getting-started/*" --browser chrome 