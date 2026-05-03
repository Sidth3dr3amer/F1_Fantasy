pipeline {
    agent any

    environment {
        EC2_IP = '13.62.114.8'
        EC2_USER = 'ubuntu'
    }

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Install Backend Dependencies') {
            steps {
                dir('Backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('Frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh """
                        sonar-scanner \
                          -Dsonar.projectKey=f1-fantasy \
                          -Dsonar.sources=Backend/src,Frontend/src \
                          -Dsonar.exclusions=**/node_modules/**,**/dist/**,**/generated/**
                    """
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 3, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent(['ec2-ssh-key']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_IP} \
                          'bash ~/deploy.sh'
                    """
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful. App is live.'
        }
        failure {
            echo 'Pipeline failed. Check logs.'
        }
    }
}
