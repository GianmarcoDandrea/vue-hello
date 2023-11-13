const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            text: "Hello world",
            image: "img/Hello.svg"
        }
    }
});

app.mount("#app");