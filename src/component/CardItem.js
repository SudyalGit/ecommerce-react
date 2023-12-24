import "./CardItem.css";

const CardItem = ({img, title, description, price}) => {
    return (
        <>
            <div className="card-box">
                <div className="card-item">

                    <div className="card-img">
                        <img
                            src={img}
                            alt=""
                        />
                    </div>

                    <div className="details">
                        <div className="content">
                            <div className="title">
                                {title} <br />
                            </div>
                            <div className="description">
                                {description}
                            </div>
                            <div className="card-price">
                                <div className="price">Rs. {price}</div>
                                <button>Add to Cart</button>
                            </div>
                            <div className="card-update">
                                <img className="update" src="https://cdn-icons-png.flaticon.com/128/2919/2919592.png" alt="" />
                                <img className="delete" src="https://cdn-icons-png.flaticon.com/128/6460/6460112.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default CardItem;
