import React, {Component} from "react";
import style from './carouselDemo.module.css'
import "./carousel.css"
import {Carousel, Card} from "antd";

class CarouselDemo extends Component {

    render() {
        return (
            <div>
                <Card className={style.card} title={"背景轮播"}>
                    <Carousel autoplay={true}>
                        <div>
                            <h3>React</h3>
                        </div>
                        <div>
                            <h3>Vue</h3>
                        </div>
                        <div>
                            <h3>Angular</h3>
                        </div>
                        <div>
                            <h3>三剑客</h3>
                        </div>
                    </Carousel>
                </Card>

                <Card className={style.card} title={"图片轮播"}>
                    <Carousel autoplay={true}>
                        <div>
                            <img src={"/carousel-img/carousel-1.jpg"}/>
                        </div>
                        <div>
                            <img src={"/carousel-img/carousel-2.jpg"}/>
                        </div>
                        <div>
                            <img src={"/carousel-img/carousel-3.jpg"}/>
                        </div>
                    </Carousel>
                </Card>
            </div>
        );
    }
}

export default CarouselDemo;


