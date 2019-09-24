pipeline {
    agent any
    
    environment {
        CI = 'true'
        bendImage = ''
        fendImage = ''
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
/*        stage('Deliver') {
            
            steps {
                dir('bend') {
                    script {
                        bendImage = docker.build("muguirajames/bend")
                    }
                }
                dir('fend') {
                    script {
                        fendImage = docker.build('muguirajames/fend')
                    }
                }
            }
            
            
        } */
    }
}
