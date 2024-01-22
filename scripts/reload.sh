#!/bin/bash

echo "Reloading Server..."

pm2 reload export-jute-app

echo "Server Reloaded!!!"