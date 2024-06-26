#!/bin/bash
source ~/.bashrc
export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh
source ~/.nvm/bash_completion
{
  nvm install "v$NVM_NODE_VERSION" --lts
  nvm alias default "v$NVM_NODE_VERSION"
  nvm alias node "v$NVM_NODE_VERSION"
  nvm alias system "v$NVM_NODE_VERSION"
  nvm use "v$NVM_NODE_VERSION"
  npm install -g yarn

  "$@"
} || {
  exit 1
}
