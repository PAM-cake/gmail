import React from "react";
import { MdCropSquare, MdOutlineStarBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedEmails } from "../redux/appSlice";
import { motion } from "framer-motion";


const Email = ({email}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(setSelectedEmails(email))
    navigate(`/mail/${email.id}`); // Navigate to a specific email with ID 1234546
  };

  return (
    <motion.div
      onClick={openMail}
      whileHover={{ scale: 1.03, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="flex items-center justify-between px-4 py-3 text-sm border-b border-gray-200 hover:cursor-pointer"
    >
      {/* Left Icons and Title */}
      <motion.div
        className="flex items-center gap-2"
        whileHover={{ color: "#1f2937" }} // Changing color on hover
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-gray-400"
          whileHover={{ scale: 1.2, color: "#1f2937" }} // Icon hover animation
        >
          <MdCropSquare size={"20px"} />
        </motion.div>
        <motion.div
          className="text-gray-400"
          whileHover={{ scale: 1.2, color: "#1f2937" }} // Icon hover animation
        >
          <MdOutlineStarBorder size={"20px"} />
        </motion.div>
        <motion.div>
          <motion.h1
            className="font-semibold"
            whileHover={{ scale: 1.1, color: "#1f2937" }} // Text hover animation
          >
            Paammcakeee
          </motion.h1>
        </motion.div>
      </motion.div>

      {/* Email Message Preview */}
      <motion.div
        className="flex-1 ml-4"
        whileHover={{ x: 5 }} // Shifts text slightly on hover
        transition={{ type: "spring", stiffness: 100 }}
      >
        <p>{email?.message}</p>
      </motion.div>

      {/* Date */}
      <motion.div className="flex-none text-sm text-gray">
        <motion.p
          whileHover={{ opacity: 0.7 }} // Fades the date on hover
          transition={{ duration: 0.3 }}
        >
          {new Date(email?.createdAt?.seconds * 1000).toUTCString()}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Email;
