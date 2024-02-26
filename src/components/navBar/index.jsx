import CartWidget from '../cardWidget'
import logo from '../../assets/images/sB.png'
import { useContext } from 'react';
import { Context } from '../../context';



function NavBar() {

    const { setIsCategoryRoute, isCategoryRoute } = useContext(Context)

    return (
        <nav className='flex justify-around  gap-10 text-2xl items-center h-[4rem] w-full bg-white shadow  px-2 fixed'>
            <h1>
                E-Commerce
            </h1>
            <div>
                <select className='text-xl border border-black rounded-sm' value={isCategoryRoute} onChange={(e) => setIsCategoryRoute(e.target.value)}>
                    <option value="" >All</option>
                    <option value="women's clothing" >women's clothing</option>
                    <option value="men's clothing" >men's clothing</option>
                    <option value="electronics" >electronics</option>
                    <option value="jewelery" >jewelery</option>

                </select>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar