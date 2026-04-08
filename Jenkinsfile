pipeline{
    agent any
    
    environment{
       APP_NAME='jenkins-node-app'
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
    }
    post{
        success{
            echo "Pipeline is Build , Run and Deploy Successfully"
        }
        failure{
            echo "Pipeline Failed"
        }
        always{
            echo "Pipeline Intialted"
        }
    }

}