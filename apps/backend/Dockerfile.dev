FROM node AS builder
WORKDIR /usr/src/app
RUN npm install -g turbo
COPY . .
RUN turbo prune --scope=backend --docker

FROM node AS runner
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/out/json/ .
RUN npm install

EXPOSE 8000

COPY --from=builder /usr/src/app/out/full/ .
CMD npx turbo dev --filter=backend
