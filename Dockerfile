# Verwende ein offizielles Node.js-Image als Basis
FROM node:18 AS base

# Arbeitsverzeichnis festlegen
WORKDIR /usr/src/app

# Port freigeben
EXPOSE 3000

# Verwende die aktuellste Version von npm
RUN npm install npm@latest -g
COPY package*.json /

# Installieren aller Abhängigkeiten, um die Anwendung produktiv zu betreiben
FROM base AS prod
RUN npm install -g ts-node
RUN npm install --no-optional && npm cache clean --force
COPY . .
CMD ["ts-node", "src/index.ts"]

# Installieren aller Abhängigkeiten, um die Anwendung in der Entwicklungsumgebung zu betreiben
FROM base AS dev
RUN npm install --no-optional && npm cache clean --force
COPY . .
CMD ["npm", "run", "start:dev"]