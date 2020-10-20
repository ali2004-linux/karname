let app = new Vue({
    el: "#app",
    data: {
        cour: [],
        mark: "",
        namec: "",
        s: false,
        m: false
    },
        
    methods: {
       addcource(){
            if(this.mark > 20){
                alert("نمره نباید بیشتر از ۲۰ باشد")
            }
            if(this.mark < 0){
                alert("نمره نباید")
            }
            else if(this.namec && this.mark){
                this.cour.push({name:this.namec,mark:parseFloat(this.mark)})
                this.namec = '';
                this.mark = '';
            }
       },
       totalmark(){
            var total = 0;
            for (var i=this.cour.length-1;i>=0;i--){
                total+=this.cour[i].mark
            }
            let t = (total/this.cour.length).toFixed(2)
            if(t=='NaN'){this.s=true}else{this.s=false;this.m=true}
            return t
        }
    },
    
})
