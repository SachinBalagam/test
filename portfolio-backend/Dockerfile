# Use an OpenJDK base image
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy everything into the container
COPY . .

# Build the JAR using Maven wrapper (if you use mvnw)
RUN ./mvnw package -DskipTests

# Expose the port your app runs on
EXPOSE 8080

# Run the JAR
CMD ["java", "-jar", "target/*.jar"]
