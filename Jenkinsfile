pipeline  {
    agent any
    parameters{
        string(name: 'SPEC',defaultValue: "cypress/integration/**/**", description: "Enter the script path you want to execute" )
        choice(name: 'BROWSER',choices: ['chrome','firefox'],description: "Where you want to execute")

    }
    
    stages{
        stage('Building'){
            steps{
                echo "Building the Application"
            }
            
        }
        stage('Testing'){
            steps{
                sh "npm i"
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
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
            publishHTML([allowMissing: false,alwaysLinkToLastBuild:false,keepAll:true])
        }
    }
}