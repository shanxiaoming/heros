<template>
    <div id="app">
      <!-- <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"> -->
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1" >英雄名称</label>
            <input type="txt" class="form-control" id="exampleInputEmail1" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">性别</label>
            <input type="txt" class="form-control" id="exampleInputPassword1" v-model="formData.gender">
          </div>
          
          
          <button type="submit" class="btn btn-success" @click.prevent="handleAdd">提交</button>
        </form>
      <!-- </div> -->
    
    
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            formData:{
                name:'',
                gender:''
            }
        }
    },
    methods:{
        handleAdd:function(){
            axios.post('http://127.0.0.1:3000/heroes',this.formData)
            .then((res)=>{
                    this.$router.push({name:'HeroList'})
                
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }

};

</script>

<style>
</style>
