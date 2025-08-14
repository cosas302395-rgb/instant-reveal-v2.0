import { eventSource, event_types } from '../../../script.js';

jQuery(async () => {
    console.log("[Instant Reveal] Extension loaded.");

    eventSource.on(event_types.MESSAGE_GENERATED, (message) => {
        if (message && message.text) {
            message.streaming = false;
            message.show_text = message.text;
        }
    });
});