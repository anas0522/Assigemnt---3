import '../App.css';
import { BsFillBagFill, BsSearch } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import main from '../main.png'
import React from 'react';
import img1 from '../All Images/1.png'
import img2 from '../All Images/2.png'
import img3 from '../All Images/3.png'
import img4 from '../All Images/4.png'
import img5 from '../All Images/5.png'
import img6 from '../All Images/6.png'
import img7 from '../All Images/7.png'
import img8 from '../All Images/8.png'

function NavBar() {
    const Imagess = [img1, img2, img3, img4, img5, img6, img5, img8]
    const allThing = [
        {
            img: img1,
            title: "Pueraria Mirifica And Study Phyto Estrogens",
            price: "$599.00"
        },
        {
            img: img2,
            title: "Pueraria Mirifica And Study Phyto Estrogens",
            price: "$599.00"
        },
        {
            img: img3,
            title: "Pueraria Mirifica And Study Phyto Estrogens",
            price: "$599.00"
        },
        {
            img: img4,
            title: "Pueraria Mirifica And Study Phyto Estrogens",
            price: "$599.00"
        },
        {
            img: img5,
            title: "Pueraria Mirifica And Study Phyto Estrogens",
            price: "$599.00"
        },
        {
            img: img6,
            title: "Pueraria Mirifica And Study Phyto Estrogens",
            price: "$599.00"
        },
        {
            img: img7,
            title: "Pueraria Mirifica And Study Phyto Estrogens",
            price: "$599.00"
        },
        {
            img: img8,
            title: "Pueraria Mirifica And Study Phyto Estrogens",
            price: "$599.00"
        }
    ]
    var xx = 0

    return (
        <div>
            <div className='contParah1'>
                <p className='parah1'>Free shipping for orders above USD 150</p>
            </div>
            <div className='navBar'>
                <h1 className='matter'>matter</h1>
                <p className='shop'>SHOP</p>
                <p className='FABRIC'>FABRIC</p>
                <p className='Journal'>Journal</p>
                <p className='About'>About</p>
                <p className='Login'>Login</p>
                <BsSearch className='bse' />
                <MdFavoriteBorder className='fav' />
                <BsFillBagFill className='bag' />
            </div>
            <article className='article'>
                <img className='mainImg' src={main} width="100%" height={600} />
                <h1 className='Perfume'>Perfume Tips Tricks</h1>
                <div className='shopUnder'>SHOP NOW</div>
            </article>
            <h1 className='Featured'>Featured</h1>
            <div className='centerF'>
                <div className='Images'>
                    {allThing.map((item) =>
                        <div className='allDiv'>
                            <img src={item.img} className="Images1" />
                            <div className='font_img_price'>
                                <h3 className='font_img'>{item.title}</h3>
                                <h3 className='font_price'>{item.price}</h3>
                            </div>
                        </div>
                    )}

                </div>
            </div>

        </div >
    );
}
export default NavBar;
