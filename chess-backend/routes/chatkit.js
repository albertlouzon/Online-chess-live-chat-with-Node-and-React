var Chatkit = require('@pusher/chatkit-server');

const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:7bc01ee4-56d0-4947-9406-75a8fffd5adc',
    key: '384ab8d2-7bbc-472b-9f68-03d2eb357635:tkzmjuHAn3Fps87neOj6UUTT3oZmHqUaeeaJDcQR7Gc='
});

module.exports = chatkit;
