<template>
    <div id="app">
        <h2 class="sub-header">武器列表</h2>
        <!-- <a class="btn btn-success" href="add.html">添加</a> -->
        <router-link to="/weapon/add" class="btn btn-success">添加</router-link>
        <div class="table-responsive">
            <table class="table table-striped">
            <thead>
                <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in list" :key="item.id">
                <td>{{index}}</td>
                <td>{{item.name}}</td>
                <td>{{item.prop}}</td>
                <td>
                    <!-- <a href="edit.html">编辑</a> -->
                    <router-link :to="{name:'WeaponsEdit',params:{id:item.id}}">编辑</router-link>
                    &nbsp;&nbsp;
                    <a href="#" @click.prevent="handleDel(item.id)">删除</a>
                </td>
                </tr>


                
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        data(){
            return {
                list:[]
            }
        },
        created(){
            this.loadData()
        },
        methods:{
            loadData:function(){
                        axios.get('http://127.0.0.1:3000/weapons')
                .then((response)=>{
                    if(response.status===200){
                        this.list=response.data;
                    }
                })
            },
            handleDel:function(id){
                if(window.confirm('您确定删除这件武器吗')){
                    axios.delete('http://127.0.0.1:3000/weapons/'+id)
                    .then((res)=>{
                        if(res.status==200){
                            this.loadData();
                        }else{
                            alert('删除失败')
                        }
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                }
               
            }
        }
    }
</script>

<style>

</style>

