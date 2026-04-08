pipeline{
    agent none
    
    environment{
       APP_NAME='jenkins-node-app'
    }
    parameters{
        choice(name : 'ENV' , choices:['prod', 'non-prod', 'sandbox', 'dr'], description: 'Select environment')
    }
    stages{
        stage('echo stage 1'){
            agent{
                docker { image 'node:18-alpine' }
            }
            steps{
                echo "The pipline app name is ${APP_NAME}"
                sh 'node --version'
                }
        }
        stage('npm stage 2'){
           agent{
                docker { image 'node:18-alpine' }
            }
           steps{
             sh 'npm ci'
             }
        }
        stage('test stage 3'){
              agent{
                docker { image 'node:18-alpine' }
            }
            steps{
                sh 'npm test'
                }
        }
        stage('Build Docker Image stage 4'){
            agent any
            steps{
                sh 'docker build -t jenkins-node .'
            }
        }
        stage('Deploy only on main stage 5'){
            agent any
            when{
                branch 'main'
            }
            steps{
                echo 'Deploying to production...'
            }
        }
        stage('Select Parameter stage 6'){
            agent any
            steps{
                echo "Deploying to ${params.ENV}"
                }
            }
    }
    post{
        always{
            echo "Pipeline Intialted"
        }
        success{
            echo "Pipeline is Build , Run and Deploy Successfully"
        }
        failure{
            echo "Pipeline Failed"
        }
    }

}