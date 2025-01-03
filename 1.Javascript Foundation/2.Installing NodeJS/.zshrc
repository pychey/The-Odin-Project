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

#node is an open source or cross-platform runtime environment for excuting javascript code outside of browser,
#node is often used to build back-end services, api(application program interface), 
#these are services that power our client application like a web app running inside of a web browser or mobile app running on a mobile device,
#these client apps are what user see, but it need to talk to the services sittting on server or in the cloud to store data, send email,push notification, kick off workflow and so on.
#node is easy to start with and highly scalable, there are also framework used to build backend service like Django, rail , etc
