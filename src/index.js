const messages = [
    "Edward",
    "Ana",
    "Rafael",
    "Maria",
    "João",
    "Pedro",
    "Paulo"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };