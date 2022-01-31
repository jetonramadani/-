FROM openjdk:17
EXPOSE 8080
ADD target/auth-container.jar auth-container.jar
ENTRYPOINT ["java","-jar","/auth-container.jar"]