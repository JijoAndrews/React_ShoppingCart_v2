import React, { useContext } from 'react'
import { contextdata } from './HomeComponent'

export const CardComponent = ({data}) => {

    const {cardcount,setcardCount}=useContext(contextdata)
    
    function remvebtnstatus(id)
    {
        let val=[...cardcount]
        val=val.filter((element)=>element.id===id)
        return val[0].removebtn
    }

    function singlecountstatus(id)
    {
        let val=[...cardcount]
        val=val.filter((element)=>element.id===id)
        return val[0].count
    }

    const addelementtocart=(id)=>{
        
        let values=[...cardcount];
        values=values.map((element)=>{
            if(element.id===id){
                element.count+=1;
                element.removebtn=true;
                return element;
            }else{
                return element
            }

        })
            setcardCount(values);
    }
    
    const removeelementtocart=(id)=>{
        
        let values=[...cardcount];
        values=values.map((element)=>{
            if(element.id===id && element.count>0){
                element.count-=1;
                element.removebtn=element.count===0?false:true
                return element;
            }else{
                return element
            }

        })
        
        setcardCount(values);
    }

    const cardsetup=(element)=>
        {
            return(
            <div key={element.id} className="col mb-5">
                    <div className="card h-100">
                        <div className="badge bg-dark text-white position-absolute cardapperance" >Sale</div>
                        <img className="card-img-top imageclass" src={element.image} alt="..."/>
                        <div className="card-body p-4">
                            <div className="text-center">
                                <h6 className="titletext">{element.title}</h6>
                                <div className="d-flex justify-content-center small text-warning mb-2">
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                </div>
                                <span className="text-muted">Price: ${element.price}</span>
    
                            </div>
                        </div>
                        <div className="footerclass">
                            
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                             onClick={()=>{addelementtocart(element.id)}}>Add to cart</a>
                            </div>
        

                            <div className = {`removebtn${remvebtnstatus(element.id)}`}>
                                <a className='removebtnelement' onClick={()=>{removeelementtocart(element.id)}}>Remove</a>
                                <div className='countext'>Count: {`${singlecountstatus(element.id)}`}</div>
                            </div>
                        </div>
                    </div>
            </div>
           
            )
            
    }
    
    const cards=data.map((e,index)=>{return cardsetup(e)})
    
    return(
        
        <section className='py-5'>
            <div className='container px-4 px-lg-5 mt-5'>
                <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
                    {cards}
                </div>
            </div>
        </section>
    )
}
