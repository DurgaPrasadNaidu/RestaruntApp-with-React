import React  from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

function RenderMenu({dish,onClick}){
    return(
        <Card key={dish.id} onClick={() => onClick(dish.id)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    );
}
const Menu=(props)=>{

    const menu = props.dishes.map((dish) => {
        return(
            <diV key={dish.id} className="col-12 col-md-5 m-1">
              <RenderMenu  dish={dish} onClick={props.onClick}/>
              
            </diV>
  
        );
  
    });
          return(
           <div className="container">
                  <div class="row">
                          {menu}
                  </div>  
          </div>
  
          );
}
  
  
export default Menu;