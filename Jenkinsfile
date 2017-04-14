pipeline {
  agent any
  stages {
    stage('Instalace knihoven') {
      steps {
        sh 'npm install'
      }
    }
    stage('Sestavení aplikace') {
      steps {
        sh 'electron-packager . LearnJS --platform=win32 --icon=favicon.ico'
      }
    }
    stage('zip artifact') {
      steps {
        sh 'zip -r LearnJS ./LearnJS-win32-x64'
      }
    }
    stage('Archive') {
      steps {
        archiveArtifacts(artifacts: 'LearnJS.zip', onlyIfSuccessful: true)
      }
    }
    stage('Clean workspace') {
      steps {
        deleteDir()
      }
    }
  }
}