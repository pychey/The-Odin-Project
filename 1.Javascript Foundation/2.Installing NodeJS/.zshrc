there are nvm and npm, but we will use nvm (node version manager) bcuz its easy.
#step 1 : nvm will look for a .zshrc file in your user home directory. By default, this file does not exist so we need to create it.
touch ~/.zshrc
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
#step 2 : restart terminal or copy paste the following lines.
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
#step 3 : check nvm version to see if its installed
nvm --version
#step 4 : install node in long term support (lts)
nvm install --lts
#step 5 : tell nvm to LTS version
nvm use --lts
#step 6 : check node version to see if its installed
node --version

#to use node in console, oepn terminal and type the following lines
node #to run node console
.quit #to quit the console
