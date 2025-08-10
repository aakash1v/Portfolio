pipeline {
    agent any

    environment {
        DEPLOY_DIR = "/var/www/aakash1z.online"
    }

    stages {
        stage('Pull Latest Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/aakash1v/Portfolio.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                sh '''
                    rm -rf ${DEPLOY_DIR}/*
                    cp -r dist/* ${DEPLOY_DIR}/
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Deployment completed successfully!"
        }
        failure {
            echo "❌ Deployment failed. Check the logs."
        }
    }
}

