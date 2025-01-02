FROM node:20

# Create and set the working directory
RUN mkdir /app
WORKDIR /app

# Copy the package.json and package-lock.json (if present) for optimized caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Build your application (if applicable)
RUN npm run build

# Expose the port the app will run on
EXPOSE 443

# Start the application
CMD ["npm", "run", "preview", "--", "--host", "--no-open"]
