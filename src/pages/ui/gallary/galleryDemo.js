import React, {Component} from "react";
import style from './galleryDemo.module.css'
import {Card, Col, Row, Modal} from "antd";


class GalleryDemo extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            currentImageUrl: "",
            showModalBoolean:false
        })


    }


    openGallery(imgSrc) {
        this.setState({currentImageUrl: imgSrc,showModalBoolean:true})
    }

    render() {
        const imgs = [
            ["1.png", "2.png", "3.png", "4.png", "5.png"],
            ["6.png", "7.png", "8.png", "9.png", "10.png"],
            ["11.png", "12.png", "13.png", "14.png", "15.png"],
            ["16.png", "17.png", "18.png", "19.png", "20.png"],
            ["21.png", "22.png", "23.png", "24.png", "25.png"],
        ];

        let imageCardList = imgs.map((list) =>
            list.map((item) =>
                <Card
                    className={style.card}
                    cover={<img src={"./gallery/" + item} onClick={() => this.openGallery("./gallery/" + item)}/>}
                    key={item}>
                    <Card.Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
            )
        );
        return (
            <div>
                <Row gutter={20}>
                    <Col md={5}>
                        {imageCardList[0]}
                    </Col>

                    <Col md={5}>
                        {imageCardList[1]}
                    </Col>

                    <Col md={5}>
                        {imageCardList[2]}
                    </Col>

                    <Col md={5}>
                        {imageCardList[3]}
                    </Col>

                    <Col md={4}>
                        {imageCardList[4]}
                    </Col>
                </Row>

                <Modal
                visible={this.state.showModalBoolean}
                title={this.state.currentImageUrl}
                onCancel={()=>this.setState({showModalBoolean:false})}
                footer={null}>
                    <img src={this.state.currentImageUrl} className={style.image}/>
                </Modal>
            </div>
        );
    }
}

export default GalleryDemo;


