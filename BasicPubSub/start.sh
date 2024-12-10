
# run pub/sub sample app using certificates downloaded in package
printf "\nRunning pub/sub sample application...\n"
mvn exec:java -Dexec.mainClass=pubsub.PubSub -Dexec.args='--endpoint a12yr2ogmvu50k-ats.iot.us-east-1.amazonaws.com --client_id sdk-java --topic sdk/test/java --ca_file root-CA.crt --cert Prueba1.cert.pem --key Prueba1.private.key'