import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


  function  RenderDish({dish}){
       if(dish!=null){
        return(
        <div className="col-12 col-md-5 m-1">
        <Card>
         <CardImg top src={dish.image} alt={dish.name} />
             <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
        </Card>
        </div>
        );
      } else
      return(
        <div></div>
        );
   }

function  RenderComments({comments}){
    console.log(comments);
        if (comments!= null) {
           
        const cmnts=comments.map((innercmnts)=>{
         
            return(
               <li key={innercmnts.id}>
                   <p>{innercmnts.comment}</p>
                   <p>{innercmnts.author} ,
                   &nbsp;
                   {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(innercmnts.date))}
                   
                   </p>
                   
               </li>
            );

        });

        return(
               <div className="col-12 col-md-5 m-1">    
                 <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
               </div>

        );
  
   }else{
       return(
         <div></div>
       );
   }
}

  const DishDetail=(props)=>{
    const dish=props.dish;
    console.log('disdetail is invoked');
    if (dish == null) {
      return (<div></div>);
  }
  
  
 return(
       <div className="container">
           <div className="row">
           <RenderDish dish={dish} />;
           <RenderComments comments={dish.comments}/>
           </div>
       </div>

   );

  }
      


  


export default DishDetail;