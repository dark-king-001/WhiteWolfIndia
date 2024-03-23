#!/bin/bash

echo "pulling from repo..."
git pull

echo "installing backend dependencies..."
npm install

cd ./client

echo "installing frontend dependencies and building frontend (it will be running in a seperate cpu thread. BEWARE!!!)..."
npm instal

echo "running server with nodemon..."
cd ../