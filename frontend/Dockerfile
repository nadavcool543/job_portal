FROM node:16-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install
RUN npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# Copy project files
COPY . .

# Change ownership of the /app directory to node user
RUN chown -R node:node /app

# Switch to node user
USER node

EXPOSE 3000

CMD ["npm", "start"]