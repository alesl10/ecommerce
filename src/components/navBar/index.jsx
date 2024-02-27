import CartWidget from '../cardWidget'
import { useContext } from 'react';
import { Context } from '../../context';
import { NavLink } from 'react-router-dom'



function NavBar() {

    const { setIsCategoryRoute, isCategoryRoute, setLoading } = useContext(Context)

    function handleChangeCategory(value) {
        {
            setTimeout(() => {
                setIsCategoryRoute(value);

            }, 2000);
            setLoading(true)
        }
    }

    return (
        <nav className='flex justify-around  gap-10 text-2xl items-center h-[4rem] w-full bg-white shadow  px-2 fixed'>
            <h1>

                <NavLink to={"/"}> E-Commerce</NavLink>

            </h1>
            <div>
                <select className='text-xl border border-black rounded-sm' value={isCategoryRoute} onChange={(e) => handleChangeCategory(e.target.value)}>
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