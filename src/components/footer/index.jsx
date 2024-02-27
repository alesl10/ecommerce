import imgFace from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/gorjeo.png'
import whatsapp from '../../assets/images/whatsapp.png'


function Footer() {

    return (

        <div >
            <div className="flex flex-col items-center ">
                <h1 className=' text-xl font-semibold mt-4'>STALKEANOS EN NUESTRAS REDES SOCIALES</h1>
                <div className="flex gap-1 justify-center mt-5">
                    <a href="" target="_blank"><img src={instagram} alt='instragram logo' className='size-12' /></a>
                    <a href="" target="_blank"><img src={imgFace} alt="face logo" className='size-12' /></a>
                    <a href="" target="_blank"><img src={twitter} alt="twitter logo" className='size-12' /></a>
                </div>
            </div>

            <div className=" font-semibold text-center py-2 text-lg">
                <h5>Copyright 2023 © Creado por Lopez Alexis con fines practicos </h5>
            </div>
            <div className=" fixed bottom-4 right-6 size-20">
                <a href="https://wa.me/1137623836?text=Hola,%20somos%20saphirus,%20dejanos%20tu%20mensaje%20y%20nos%20contactamos%20a%20la%20brevedad"
                    target="_blank"><img src={whatsapp} alt="whatsapp" width="70px" height="70px" /></a>
            </div>

        </div>

    )
}

export default Footer


