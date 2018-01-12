pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		git 'https://github.com/4admin2root/kingbrain'
		dir('./nginx') {
		  sh 'docker build -t 4admin2root/kingbrain_web:v1.0 .'
		}
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
		sh 'docker run -d --name web -p 8080:80 4admin2root/kingbrain_web:v1.0'
            }
        }
        stage('Push') {
            steps {
                echo 'Pushing..'
		sh 'docker push 4admin2root/kingbrain_web:v1.0'
            }
        }
        stage('Clean') {
            steps {
                echo 'Cleaning....'
		sh 'docker rm -f web'
            }
        }
    }
}
