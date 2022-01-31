FROM openjdk:16-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} mapedonija-backend.jar
ENTRYPOINT ["java","-jar","/mapedonija-backend.jar"]