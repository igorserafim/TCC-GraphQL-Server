const Subscriptions = {
    listenAddHello: {
        subscribe(parent, args, { pubsub }, info) {
            return pubsub.asyncIterator('addHello')
        }
    }
}

export { Subscriptions as default }