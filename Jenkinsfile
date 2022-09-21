pipeline{
    environment{
        DOCKERHUB_CREDENTIALS=credentials('ee19e771-139b-4f8e-87e9-9cc020e72f08')
    }
    
    agent any

    tools{nodejs "node"}

    options {
        ansiColor('xterm')
    }

    stages {

        stage(' Building Image'){
            steps {
                 sh 'docker build -t jpcampos24/demo-assessment-image:latest .'
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
                 sh 'docker push jpcampos24/demo-assessment-image:latest .'
                }
        }        
        

        stage(' Cleanining up'){
            steps {
                 sh "docker rmi $registry:$BUILD_NUMBER"
                }
        }
    }

    post {
		always {
			sh 'docker logout'
		}
	}        
}

