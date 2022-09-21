pipeline{
    agent {
        docker{
            image "cypress/base:16.16.0"
        }
    }

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
        
        stage('Testing') {
            steps {
                sh 'npm install'
                sh 'npm install cypress'
                sh "npx cypress run"
            }
        }
        
        stage('Deploy'){
            steps {
                echo "Deploying"
            }
        }
    }

}