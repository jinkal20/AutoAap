(()=>{
    
    const vm = new Vue({
        el: '#app',
        data: {
            mainmessage : "Car page",
            kidsdata: [],
            singlecarappdata: [],
            kidsdescription :"",
            showDetails : false
        },
        created : function(){
            this.fetchKidsData(null);
        },
        methods : {
            fetchKidsData(carapp) {
                url = carapp ? `./includes/index.php?carapp=${carapp}` : './includes/index.php';
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    if (carapp){
                        console.log(data);
                        this.singlecarappdata =data;
                    } else {
                        console.log(data);
                        this.kidsdata =data;
                    }
                })
            }
        }
    });
})();