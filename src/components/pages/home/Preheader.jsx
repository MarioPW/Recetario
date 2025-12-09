import { FaFacebookSquare, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";

export const Preheader = () => {

    return (
        <div className="flex flex-col sm:flex-row justify-between py-2 bg-blue-800">
            <div className="flex flex-col sm:flex-row my-2">
                    <p className="mx-4 text-blue-200"><a className="flex items-center" href="#"><MdOutlineMailOutline className="mr-2"/>mariotriana.dev@gmail.com</a></p>
            </div>
            <div className="flex gap-4 mx-4 text-white my-auto">
                    <p><a href="https://web.facebook.com/" target="blank"><FaFacebookSquare /></a></p>
                    <p><a href="https://twitter.com/" target="blank"><FaXTwitter /></a></p>
                    <p><a href="https://whatsapp.com/" target="blank"><ImWhatsapp /></a></p>
                    <p><a href="https://instagram.com/" target="blank"><FaInstagram /></a></p>
            </div>
        </div>
    )
}
