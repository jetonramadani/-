FROM openjdk:16
EXPOSE 8080
ADD target/mapedonija-backend-container.jar mapedonija-backend-container.jar
ENTRYPOINT ["java","-jar","/mapedonija-backend-container.jar"]