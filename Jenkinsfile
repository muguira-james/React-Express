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
                dir('fend') {
                    sh 'npm test'
                }
            }
        }
        stage('Deliver') {
            agent { dockerfile true }
            steps {
                dir('bend') {
                    sh 'build-container.sh'
                }
                
            }
        }
    }
}