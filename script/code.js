//  const app = Vue.createApp({
     
//     template: `
//     <div  v-if='isVisible 'id ='box1'>
//     <p>{{greeting}}</p>
//    </div>
//     <input type='text' v-model='greeting'/>
//     <button v-on:click='display'>Click Me</button>
//     `,
//     data: function() {
//         return {
//             greeting: 'Asalaamu Alaykum',
//             isVisible:true
//         }
//     },
//     methods: {
//         display() {
//             this.isVisible = !this.isVisible;
//         }
//     }
//  });
// app.mount('#app');  


const app = Vue.createApp({
   
         template:`
         <form>
         <input type='text' placeholder='name' v-model= 'FirstName' required>
       
         <input type='number' placeholder='age' v-model= 'Age' required>
         <button v-on:click.prevent= 'display' >Click Me</button>
         </form>
         <div v-if='isVisible' id='box1'>
         <p>{{FirstName}}  {{LastName}}  is {{Age}} old and feeling good</p>
         </div>
         `,
         data: function() {
            return{
             FirstName:'',
             
             Age:0,
             isVisible:false
            }
         },
         methods:{
            display(){
                if(this.Age > 17) {
                    this.isVisible = true;
                }else {
                    this.isVisible = false;
                }
            }
         }
   
    });
    //NEED TO MOUNT IT
    app.mount('#app');