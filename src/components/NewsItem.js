import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";

class NewsItem extends Component {

    render() {
        let {title, description, imageUrl, newsUrl} = this.props
        return (
            <>
                <Card className="my-3">
                    <Card.Img variant="top" src={imageUrl}/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button variant="primary" className={"btn-sm"} href={newsUrl}>Read More</Button>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default NewsItem;