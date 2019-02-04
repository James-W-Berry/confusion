import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component { 

    renderComments() {
        if(this.props.dish.comments != null){
            const commentList = this.props.dish.comments.map((comment) => {
                return (
                    <div className="container">
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {new Intl.DateTimeFormat(
                            'en-US', {year: 'numeric', month: 'short', day: '2-digit'})
                            .format(new Date(Date.parse(comment.date)))} </p>
                    </div>
                )
            });

            return (commentList)
        } else {
            return (
                <div></div>
            )
        }
    }
 
    render() {

        console.log('DishDetail component render invoked')

        if(this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" object src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h3>Comments</h3>
                            {this.renderComments()}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default DishDetail;