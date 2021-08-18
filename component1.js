import Component2 from "./component2";
function Component1(){
    const a=[
{img:"C:\Users\Hp\Desktop\react\app\c.png",
 title:"python",
desc:"python book"},
{img:"C:\Users\Hp\Desktop\react\app\c.png",
desc:"java book",
title:"Java"},
{img:"C:\Users\Hp\Desktop\react\app\c.png",
title:"Javascript"
},
{img:"C:\Users\Hp\Desktop\react\app\c.png",
desc:"c book",
title:"c"
},
{
img:"app/c.png",desc:"c++ book",
title:"c++"}];
return(

        <div>{
            a.map((data,index)=>( <Component2 title={data.title} img={data.img} desc={data.desc}/>))}</div>)}
export default Component1;