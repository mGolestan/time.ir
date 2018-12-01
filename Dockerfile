
FROM keymetrics/pm2:latest-alpine

# Copy APP files
COPY . .

# Set env variables
ENV NODE_ENV=production
ENV CONSOLE_LOG_LEVEL=warn
ENV FILE_LOG_LEVEL=error
ENV PORT=4000
ENV TIME_IR_MAIN_URL=http://www.time.ir

# Install app dependencies
RUN yarn
RUN yarn build

#CMD [ "pm2-runtime", "start", "pm2.json" ]
