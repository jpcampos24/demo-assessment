pipeline{
    agent {
        docker{
            image "cypress/base:16.16.0"
        }
    }

    tools{nodejs "node"}

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/1-getting-started/**', description: 'running specs')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
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
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        
        stage('Deploy'){
            steps {
                echo "Deploying"
            }
        }
    }

}