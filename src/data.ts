import { Food } from "./app/components/partial/header/shared/model/Food";
import { Tag } from "./tag";


export const sample_foods:Food[]=[
    {
        id:'1',
        name:'Pizza',
        price:500,
        tags:['FastFood','Lunch','brunch','Dinner'],
        favorite:false,
        origins:['Italy'],
        stars:3.0,
        imageUrl:'assets/food-1.jpg',
        cookTime:'40-50'
    },

    {
        id:'2',
        name:'Meat balls',
        price:400,
        tags:['starter','Lunch','brunch','Dinner'],
        favorite:true,
        origins:['India'],
        stars:4.0,
        imageUrl:'assets/food-2.jpg',
        cookTime:'30-40'
    },
    {
        id:'3',
        name:'Burger',
        price:300,
        tags:['FastFood','brunch'],
        favorite:false,
        origins:['Italy','America'],
        stars:3.5,
        imageUrl:'assets/food-3.jpg',
        cookTime:'40-50'
    },
    {
        id:'4',
        name:'French fries',
        price:150,
        tags:['FastFood','brunch'],
        favorite:false,
        origins:['Italy','Japan'],
        stars:3.0,
        imageUrl:'assets/food-4.jpg',
        cookTime:'40-50'
    },
    {
        id:'5',
        name:'Chiken - Soup',
        price:250,
        tags:['starter'],
        favorite:false,
        origins:['India'],
        stars:3.0,
        imageUrl:'assets/food-5.jpg',
        cookTime:'40-50'
    },
    {
        id:'6',
        name:'Pizza',
        price:500,
        tags:['FastFood','Lunch','brunch','Dinner'],
        favorite:false,
        origins:['India'],
        stars:4.0,
        imageUrl:'assets/food-6.jpg',
        cookTime:'40-50'
    },
    {
        id:'7',
        name:'Chicken Biryani',
        price:500,
        tags:['FastFood','Lunch','brunch','Dinner'],
        favorite:false,
        origins:['Italy'],
        stars:3.0,
        imageUrl:'assets/food-7.jpeg',
        cookTime:'40-50'
    },
    {
        id:'8',
        name:'Momos',
        price:500,
        tags:['FastFood','brunch'],
        favorite:false,
        origins:['Italy'],
        stars:4.0,
        imageUrl:'assets/food-8.jpeg',
        cookTime:'40-50'
    },

    {
        id:'9',
        name:'Chicken Nuggets',
        price:600,
        tags:['FastFood','Lunch','Brunch','Dinner'],
        favorite:false,
        origins:['India'],
        stars:4.0,
        imageUrl:'assets/food-9.jpeg',
        cookTime:'10-20'
    },
    {
        id:'10',
        name:'Hakka Noodles',
        price:200,
        tags:['FastFood','Lunch','Brunch','Dinner'],
        favorite:false,
        origins:['Italy','China'],
        stars:5.0,
        imageUrl:'assets/food-10.jpeg',
        cookTime:'20-30'
    },
    {
        id:'11',
        name:'Full Meal',
        price:750,
        tags:['Lunch','Brunch','Dinner'],
        favorite:false,
        origins:['India'],
        stars:4.0,
        imageUrl:'assets/food-11.jpeg',
        cookTime:'40-50'
    },
    {
        id:'12',
        name:'Paratha',
        price:300,
        tags:['Lunch','Dinner'],
        favorite:false,
        origins:['India'],
        stars:3.0,
        imageUrl:'assets/food-12.jpeg',
        cookTime:'40-50'
    }
]

export const sample_tags:Tag[]=[
    {name:'All',count:12},
    {name:'FastFood',count:4},
    {name:'Lunch', count:8} ,
    {name:'Brunch',count:4},
    {name:'Fry',count:1},
    {name:'Soup',count:1},
    {name:'Dinner',count:5}


]