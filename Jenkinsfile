pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Build') {
            steps {
                sh "npm install"
                sh "npm run deploy"
            }
        }
        stage('Test') {
            steps {
                sh "npm run test"
                sh "npm run e2e"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}