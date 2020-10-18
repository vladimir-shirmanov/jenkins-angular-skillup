pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Build') {
            steps {
                sh "npm install"
                sh "ng build --prod"
            }
        }
        stage('Test') {
            steps {
                sh "ng test"
                sh "ng e2e"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}