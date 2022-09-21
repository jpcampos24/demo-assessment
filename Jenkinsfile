pipeline{
    environment{
        registry = 'jpcampos24/demo-assessment'
        registryCredential= 'ee19e771-139b-4f8e-87e9-9cc020e72f08'
    }
    
    agent any

    tools{nodejs "node"}

    options {
        ansiColor('xterm')
    }

    stages {
        
        stage('Build'){
            //The steps section defines a series of one or more steps to be executed in a given stage directive.
            steps {
                echo "Building the application"
            }
        }

        stage(' Building Image'){
            steps {
                 dockerImage = docker.build registry + ":$BUILD_NUMBER" 
            }
        }

                stage('Testing Image') {
            steps {
                sh 'npm install'
                sh 'npm install cypress'
                sh "npx cypress run"
            }
        }

        stage(' Deploying Image'){
            steps {
                 docker.withRegistry( '', registryCredential ) { 
                        dockerImage.push() 
                }
            }        
        }

        stage(' Cleanining up'){
            steps {
                 sh "docker rmi $registry:$BUILD_NUMBER"
                }
            }        
        }

}