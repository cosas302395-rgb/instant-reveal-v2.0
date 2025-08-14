module.exports = {
    onEnable(_, { eventSource, eventTypes }) {
        console.log("[Instant Reveal] Activada.");
        this.listener = (message) => {
            if (message && message.text) {
                message.streaming = false;
                message.show_text = message.text;
            }
        };
        eventSource.on(eventTypes.MESSAGE_GENERATED, this.listener);
    },

    onDisable(_, { eventSource, eventTypes }) {
        console.log("[Instant Reveal] Desactivada.");
        if (this.listener) {
            eventSource.off(eventTypes.MESSAGE_GENERATED, this.listener);
            this.listener = null;
        }
    }
};