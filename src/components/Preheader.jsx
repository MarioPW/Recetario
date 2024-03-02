import { FaFacebookSquare, FaWhatsappSquare, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

export const Preheader = () => {

    return (
        <div className="flex justify-between">
            <div className="flex gap-4 text-blue-900">
                    <p ><a className="flex items-center" href="#"><FaPhone className="mr-2 "/>+000 1234 5678</a></p>
                    <p><a className="flex items-center" href="#"><MdOutlineMailOutline className="mr-2"/>infocompany@email.com</a></p>
                    <p><a className="flex items-center" href="#"><FaMapMarkerAlt className="mr-2"/>St. London 54th New York</a></p>
            </div>
            <div className="flex gap-4 text-blue-900">
                    <p><a href="https://web.facebook.com/" target="blank"><FaFacebookSquare /></a></p>
                    <p><a href="https://twitter.com/" target="blank"><FaXTwitter /></a></p>
                    <p><a href="https://whatsapp.com/" target="blank"><FaWhatsappSquare /></a></p>
                    <p><a href="https://instagram.com/" target="blank"><FaInstagram /></a></p>
            </div>
        </div>
    )
}
