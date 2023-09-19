#
# Build
#
FROM maven:3.6.0-jdk-11-slim AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package  -DskipTests=true
#
# Package stage
#
From openjdk:11
COPY --from=build /home/app/target/convention-0.0.1-SNAPSHOT.jar convention-0.0.1-SNAPSHOT.jar
CMD ["java","-jar","convention-0.0.1-SNAPSHOT.jar"]