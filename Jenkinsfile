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
        sh 'electron-packager . LearnToWeb --platform=win32 --icon=favicon.ico'
      }
    }
    stage('zip artifact') {
      steps {
        sh 'zip -r LearnToWeb ./LearnToWeb-win32-x64'
      }
    }
    stage('Archive') {
      steps {
        archiveArtifacts(artifacts: 'LearnToWeb.zip', onlyIfSuccessful: true)
      }
    }
    stage('Clean workspace') {
      steps {
        deleteDir()
      }
    }
  }
}