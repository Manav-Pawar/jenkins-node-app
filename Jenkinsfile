pipeline{
    agent any
    
    environment{
       APP_NAME='jenkins-node-app'
    }
    parameters{
        choice(name : 'ENV' , choices:['prod', 'non-prod', 'sandbox', 'dr'], description: 'Select environment')
    }
    stages{
        stage('echo stage 1'){
            steps{
                echo "The pipline app name is ${APP_NAME}"
                }
        }
        stage('npm stage 2'){
           steps{
             sh 'npm ci'
             }
        }
        stage('test stage 3'){
            steps{
                sh 'npm test'
                }
        }
        stage('Build Docker Image stage 4'){
            steps{
                sh 'docker build -t jenkins-node .'
            }
        }
        stage('Deploy only on main stage 5'){
            when{
                branch 'main'
            }
            steps{
                echo 'Deploying to production...'
            }
        }
        stage('Select Parameter stage 6'){
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