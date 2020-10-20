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
        stage('Deploy') {
            steps {
                echo "${nextVersionFromGit('patch')}"
            }
        }
    }

    def nextVersionFromGit(scope) {
        def latestVersion = sh returnStdout: true, script: 'git describe --tags "$(git rev-list --tags=*.*.* --max-count=1 2> /dev/null)" 2> /dev/null || echo 0.0.0'
        def (major, minor, patch) = latestVersion.tokenize('.').collect { it.toInteger() }
        def nextVersion
        switch (scope) {
            case 'major':
                nextVersion = "${major + 1}.0.0"
                break
            case 'minor':
                nextVersion = "${major}.${minor + 1}.0"
                break
            case 'patch':
                nextVersion = "${major}.${minor}.${patch + 1}"
                break
        }
        nextVersion
    }
}