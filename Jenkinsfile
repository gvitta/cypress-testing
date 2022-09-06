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
                
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
                sh "Execution completed"
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
            archiveArtifacts artifacts: 'cypress/reports/json/*.json', followSymlinks: false
            cucumber buildStatus: 'UNSTABLE',
                failedFeaturesNumber: 1,
                failedScenariosNumber: 1,
                skippedStepsNumber: 1,
                failedStepsNumber: 1,
                reportTitle: 'Cypress Test Report',
                fileIncludePattern: 'cypress/reports/json/*.json',
                sortingMethod: 'ALPHABETICAL',
                trendsLimit: 100
        }
    }
}