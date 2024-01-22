#!/bin/bash
set -e

echo "Deployment started..."

git pull origin master

echo "Installing Dependencies..."
npm install --yes

echo "Creating Production Build..."
npm run build

echo "PM2 Reload"
pm2 reload export-jute-app

echo "Deployment Finished!!!"