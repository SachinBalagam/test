# Use an OpenJDK base image
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy everything
COPY . .

# 🔧 Make Maven wrapper executable
RUN chmod +x mvnw

# Build the JAR
RUN ./mvnw package -DskipTests

# Expose port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "target/*.jar"]
