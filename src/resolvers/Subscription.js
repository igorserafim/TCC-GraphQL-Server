const Subscriptions = {
    listenAddHello: {
        subscribe(parent, args, { pubsub }, info) {
            return pubsub.asyncIterator('addHello')
        }
    },
    listenAddProntuario: {
        subscribe(parent, args, { pubsub }, info) {
            return pubsub.asyncIterator('addProntuario')
        }
    }
}

export { Subscriptions as default }