var app = new Vue({
    el: '#app',
    data: {
        baseUrl: 'http://192.168.178.50:3000/',
    },
    methods: {
        on: function () {
            this.$http.get(this.baseUrl + 'on').then(function (response) {
                if (response.status == "200") {
                    console.log(response);
                }
            });
        },
        off: function () {

            this.$http.get(this.baseUrl + 'off').then(function (response) {
                if (response.status == "200") {
                    console.log(response);
                }
            });
        }
    }
});