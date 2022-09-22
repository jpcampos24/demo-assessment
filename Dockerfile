#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/included:10.8.0
#Create the folder where our project will be stored
RUN mkdir /demo-assessment
#We make it our workdirectory
WORKDIR /demo-assessment
# disabling chrome acceleration rendering
ENV ELECTRON_EXTRA_LAUNCH_ARGS=--disable-gpu
ENV LIBVA_DRIVER_NAME=--disable-software-rasterizer
#Let's copy the essential files that we MUST use to run our scripts
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
#Install cypress dependencies
RUN npm install
#Commands the container will use
ENTRYPOINT ["npx", "cypress", "run"]
#Specify more parameters to the last entrypoint
CMD [""]
