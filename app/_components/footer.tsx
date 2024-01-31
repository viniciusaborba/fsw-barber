import { format } from "date-fns";

const Footer = () => {
    return (
      <div className="w-full bg-secondary py-6 px-5 mt-[4.5rem]">
        <p className="text-gray-400 text-xs font-bold opacity-75">{`© ${format(new Date(), "yyyy")} Copyright FSW Barber`}</p>
      </div>
    );
}
 
export default Footer;