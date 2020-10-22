pipeline {
    agent any

    tools {nodejs "node"}

    environment {
        QA = 'waws-prod-dm1-163.ftp.azurewebsites.windows.net'
        DIST_FOLDER = '/site/wwwroot/'
        APP_SERVICE_CREDS = credentials('jen-tut-qa')
        TAG_VERSION = nextVersionFromGit('patch')
    }

    stages {
        stage('Build') {
            steps {
                sh "npm install"
                sh "npm --no-git-tag-version version ${env.TAG_VERSION}"
                sh "npm run deploy"
            }
        }
        stage('Deploy QA') {
            when {
              expression {
                currentBuild.result == null || currentBuild.result == 'SUCCESS' 
              }
            }
            steps {
                sh "lftp -u '${env.APP_SERVICE_CREDS_USR}',${env.APP_SERVICE_CREDS_PSW} -e 'rm -r ${env.DIST_FOLDER}; mirror -R ${env.WORKSPACE}/dist/jen-tut/ ${env.DIST_FOLDER}; quit' ${env.QA}"
                sh "git tag -a ${env.TAG_VERSION} -m 'qa version ${env.TAG_VERSION}'"
                sh "git push ${env.GIT_URL} ${env.TAG_VERSION}"
            }
        }
        stage('Prod check deployment') {
            steps {
                input "Do we need to proceed with prod deployment?"
            }
        }
        stage('Deploy PROD') {
            steps {
                echo 'Deploying prod...'
            }
        }

    }
    post {
        always {
            deleteDir()
        }
        success {
            echo 'Finished successfuly'
        }
        failure {
            echo 'Finished with errors'
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