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
 2. 'wemux join www'
 3. 'wemux'
 4. 'sudo git pull'
 5. 'sudo chown <user> public/stylesheets/style.*'
 6. 'forever app.js' (OBS OBS ej sudo!)

Döda servern mha CTRL+C efter steg 3.

Vet inte om man behöver ändra git pull origin för andra användare.

Steg 4 behövs för att LESS ska kunna köra och uppdatera on-demand.

Fundera på att ta bort det i production?

Om www.lhs.nu ger något felmeddelande, kör 'sudo apachectl restart' och sedan 'forever app.js'