#!/bin/bash
export PATH=$PATH:/root/.nvm/versions/node/v20.9.0/bin

IMAGE_NAME=portfolio-website

cd ~/portfolio-website

git pull origin main

docker stop $IMAGE_NAME
docker rm $IMAGE_NAME
docker rmi atul24112001/$IMAGE_NAME:latest
docker build -t atul24112001/$IMAGE_NAME:latest .
 
if [ $? -eq 0 ]; then 
    echo "Docker image build success."
else 
    echo "Docker image build failed"
    exit 1
fi


docker run -d -p 3000:3000 atul24112001/$IMAGE_NAME:latest
echo "Build completed"