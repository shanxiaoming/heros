<template>
    <div id="app">
        <h2 class="sub-header">编辑英雄</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">英雄名称</label>
            <input type="txt" class="form-control" id="exampleInputEmail1" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">性别</label>
            <input type="txt" class="form-control" id="exampleInputPassword1" v-model="formData.gender">
          </div>
          
        
          <button type="submit" class="btn btn-success" @click.prevent="handleEdit">提交</button>
        </form>
      </div>
</template>

<script>
    import axios from 'axios';
    // import router from '../../routes/router.js';
    
    export default{
        
        data(){
            return {
                // name:'',
                // prop:''
                // id:this.$route.params.id
               formData:{
                   name:'',
                   gender:''
               }
            }
        },
        props:['id'],
        created(){
           this.loadData();
        //    console.log(this.$route.params.id);
        console.log(this.formData);
        },
        methods:{
            loadData:function(){
                 axios.get('http://127.0.0.1:3000/heroes/'+this.id)
                .then((res)=>{
                    if(res.status==200){
                        this.formData=res.data;
                    }
                })
                .catch((err)=>{
                    console.log(err);
                })
            },
            handleEdit:function(){
                axios.put(`http://127.0.0.1:3000/heroes/${this.id}`,this.formData)
                .then((res)=>{
                    if(res.status==200){
                        this.$router.push('/hero');
                        this.loadData();
                    }else{
                        alert('修改失败')
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })
                
            }

        }
    }
</script>

<style>

</style>

