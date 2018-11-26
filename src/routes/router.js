import Vue from 'vue';
import VueRouter from 'vue-router';
import HeroList from '../views/heroes/list.vue';
import WeaponList from '../views/Weapons/list.vue';
import Equips from '../views/equips/list.vue';
import equipsAdd from '../views/equips/add.vue';
import HeroAdd from '../views/heroes/add.vue';
import WeaponAdd from '../views/Weapons/add.vue';


import EquipsEdit from '../views/equips/edit.vue';
import HeroesEdit from '../views/heroes/edit.vue';
import WeaponsEdit from '../views/Weapons/edit.vue';

Vue.use(VueRouter);

var router=new VueRouter({
    linkActiveClass:'active',
    routes:[
        {path:'/',redirect:{name:'HeroList'}},
        {name:'HeroList',path:'/hero',component:HeroList},
        {name:'HeroAdd',path:'/hero/add',component:HeroAdd},
        {name:'WeaponList',path:'/weapon',component:WeaponList},
        {name:'WeaponAdd',path:'/weapon/add',component:WeaponAdd},
        {name:'Equips',path:'/equip',component:Equips},
        {name:'equipsAdd',path:'/equip/add',component:equipsAdd},
        //编辑列表组件
        {name:'EquipsEdit',path:'/equip/edit/:id',component:EquipsEdit,props:true},
        {name:'HeroesEdit',path:'/hero/edit/:id',component:HeroesEdit,props:true},
        {name:'WeaponsEdit',path:'/weapon/edit/:id',component:WeaponsEdit,props:true}
    ]
});

export default router;

