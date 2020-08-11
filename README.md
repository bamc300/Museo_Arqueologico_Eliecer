Museo_Arqueologico

Exportar base de datos:
mongodump -d apostrophe-open-museum -o /home/bryant/Escritorio/
Nombre de la base de datos + la direccion

Importr base de datos:
mongorestore -d Museo-Sol C:\Users\monky\Documents\ApostropheCms\DB\apostrophe-open-museum
Nombre de la base de datos + la direccion

Windows:

Ejecutar mongodb
Abrir terminal
mongod

Ejecutar app
abrir nuevo terminal
dirigirse en donde se encuentra el aplicativo
y escribir node app
se desplegara el aplicativo en el puerto 3000

Linux:

Ejecutar MongoDB
Abrir terminal
sudo systemctl start mongod
sudo systemctl status mongod

Ejecutar app
dirigirse en donde se encuentra el aplicativo
y escribir node app
se desplegara el aplicativo en el puerto 3000


Desplegar aplicacion

npm install
node app apostrophe-users:add admin admin
[Ingresar contraseña del admin]
node app