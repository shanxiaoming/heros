<template>
    <div id="app">
      <!-- <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"> -->
        <h2 class="sub-header">添加武器</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1" >武器名称</label>
            <input type="txt" class="form-control" id="exampleInputEmail1" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">武器分类</label>
            <input type="txt" class="form-control" id="exampleInputPassword1" v-model="formData.prop">
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
                prop:''
            }
        }
    },
    methods:{
        handleAdd:function(){
            axios.post('http://127.0.0.1:3000/weapons',this.formData)
            .then((res)=>{
                if(res.status===201){
                    this.$router.push('/weapon')
                }
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
