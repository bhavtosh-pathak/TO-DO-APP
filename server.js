const app=require('./src/app');

const port=8000;
app.get('/',(req,res)=>{
    console.log(`server is running`);
})
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})