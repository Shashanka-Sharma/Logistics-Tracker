#!/bin/bash
git pull origin master
cd back-end/src
npm install
cd ../../front-end
npm install
npm start