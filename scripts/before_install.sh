#!/bin/bash

echo 'installing nodejs...'
apt update
apt install python-software-properties
curl -sL https://deb.nodesource.com/setup_14.x | bash -
apt install -y nodejs
echo '---------------before_install.sh Terminated---------------'