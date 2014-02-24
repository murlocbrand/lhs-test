lhs-test
========
http://www.lhs.nu web site!

requirements
============
 * Node.JS

work it
=======
 1. download
 2. 'npm install'
 3. 'node app.js'

@server
=======
 1. do stuff locally
 2. 'tmux a -t 3'
 3. 'sudo git pull'
 4. 'sudo chown <user> public/stylesheets/style.*'
 5. 'forever app.js' (OBS OBS ej sudo!)

Döda servern mha CTRL+C efter steg 2.
Vet inte om man behöver ändra git pull origin för andra användare.

Steg 4 behövs för att LESS ska kunna köra och uppdatera on-demand.
Fundera på att ta bort det i production?