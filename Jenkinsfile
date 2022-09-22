pipeline{
    environment{
        DOCKERHUB_CREDENTIALS=credentials('ee19e771-139b-4f8e-87e9-9cc020e72f08')
    }

    agent {dockerfile true}

    parameters{
        string(name: "SPEC", defaultValue: "cypress/e2e/**/**", description: "Corriendo todos los specs")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Escoja el browser para correr los specs")
    }

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
                sh 'docker run -v $PWD:/demo-assessment -t jpcampos24/demo-assessment-image:latest'
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

