pipeline {
    agent any

    stages {
        stage("git checkout") {
            steps {
                git branch: 'main', credentialsId: 'git_jenkins', url: 'https://github.com/gavika/reference-app-payroll-frontend.git'
            }
        }
         stage("Build Node.js Project") {
            steps {
                nodejs('node_20') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        
        stage('Debug') {
            steps {
                script {
                    // Print workspace and check the directory
                    echo "Workspace: ${WORKSPACE}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    sh "docker build -t bhupendrargoud/node-app ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    
                    sh "docker push bhupendrargoud/node-app:latest"
                }
            }
        }

        stage('Deploy on k8s') {
            steps {
                withKubeConfig(credentialsId: 'minikube', serverUrl: 'https://192.168.49.2:8443') {
                    sh "kubectl apply -f nginx-deployment.yaml"
                    sh "kubectl apply -f node-service.yaml"
                    
                }
            }
        }
    }
}


