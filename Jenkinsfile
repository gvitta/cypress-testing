pipeline  {
    agent any
    parameters{
        string(name: 'SPEC',defaultValue: "cypress/integration/**/**", description: "Enter the script path you want to execute" )
        choice(name: 'BROWSER',choices: ['chrome','firefox'],description: "Where you want to execute")

    }
    tools {nodejs "NODEJS"}
    stages{
        stage('Building'){
            steps{
                echo "Building the Application"
                sh "npm install"
                sh "npm install cypress --save-dev"
            }
            
        }
        stage('Testing'){
            steps{
                
                sh "npm cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying'){
             steps{
                echo "Deploying the Application"
             }
        }
    }
    post{
        always{
            archiveArtifacts artifacts: 'reports/json/*.json', followSymlinks: false
        }
    }
}