#Base image taken from: https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node16.16.0-chrome105-ff99-edge
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
RUN apt-get update && \
  apt-get install --no-install-recommends -y \
  # install cypress system dependencies
  libgtk2.0-0 \
  libgtk-3-0 \
  libnotify-dev \
  libgconf-2-4 \
  libgbm-dev \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  tidy \
  xauth \
  xvfb \
  # clean up
  && rm -rf /var/lib/apt/lists/*
#Commands the container will use
ENTRYPOINT ["docker run -v $PWD:/demo-assessment -t jpcampos24/demo-assessment-image:latest"]
#Specify more parameters to the last entrypoint
CMD [""]