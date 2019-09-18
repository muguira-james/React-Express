pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                dir('bend') {
                    sh 'npm install'
                }
                dir('fend') {
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }
        stage('Test') {
            steps {
                sh 'cd fend && npm test'
            }
        }
        stage('Deliver') {
            steps {
                sh 'docker-compose build'
            }
        }
    }
}