#Base image taken from: https://github.com/cypress-io/cypress-docker-images
FROM cypress/included:10.8.0
#Create the folder where our project will be stored
RUN mkdir /demo-assessment
# Make it the work directory
WORKDIR /demo-assessment
# Files that must be used to run the scripts
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
#Install cypress dependencies
RUN npm install
#Commands the container will use
ENTRYPOINT ["npx", "cypress", "run"]
#Specify more parameters to the last entrypoint
CMD [""]