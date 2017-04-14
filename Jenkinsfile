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
  }
}