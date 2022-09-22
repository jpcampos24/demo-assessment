pipeline{
    environment{
        DOCKERHUB_CREDENTIALS=credentials('ee19e771-139b-4f8e-87e9-9cc020e72f08')
    }
    
    agent any

    options {
        ansiColor('xterm')
    }

    tools{nodejs "node"}

    stages {

        stage(' Testting e2er'){
            steps {
                 sh 'npm install'
                 sh 'npx cypress run --headless --spec "cypress/e2e/1-getting-started/*"'
            }
        }

        stage(' Building Image'){
            steps {
                 sh 'docker build -t jpcampos24/demo-assessment-image:latest .'
            }
        }

        stage(' Deploying Image'){
            steps {
                 sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                 sh 'docker push jpcampos24/demo-assessment-image:latest'
                }
        }        
        

        stage(' Cleanining up'){
            steps {
                 sh "docker rmi jpcampos24/demo-assessment-image:latest"
                }
        }
    }

    post {
		always { 
			sh 'docker logout'
            
		}
	}        
}

