pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
                // Add your build commands here, for example:
                // sh './build.sh'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add your test commands here, for example:
                // sh './run_tests.sh'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to production...'
                // Add your deploy commands here, for example:
                // sh './deploy.sh'
            }
        }
    }

    post {
        success {
            echo 'Build and Deploy successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
