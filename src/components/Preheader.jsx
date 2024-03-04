import { FaFacebookSquare, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";

export const Preheader = () => {

    return (
        <div className="flex flex-col sm:flex-row justify-between py-2 bg-blue-800">
            <div className="flex flex-col sm:flex-row my-2">
                    <p className="mx-4 sm:my-0 text-yellow-200"><a className="flex items-center" href="#"><ImWhatsapp className="mr-2 "/>+1 (917) 573-6351</a></p>
                    <p className="mx-4 text-blue-200"><a className="flex items-center" href="#"><MdOutlineMailOutline className="mr-2"/>infocompany@email.com</a></p>
                    <p className="mx-4 text-red-600"><a className="flex items-center" href="#"><FaMapMarkerAlt className="mr-2"/>St. London 54th New York</a></p>
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
