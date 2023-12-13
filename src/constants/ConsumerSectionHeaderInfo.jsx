import { HiIdentification } from "react-icons/hi";
import { FaTicketAlt } from "react-icons/fa";
import { MdError } from "react-icons/md";
export const ConsumerSectionHeaderInfo = [
  {
    id: 1,
    fig: 246,
    type: "KYC",
    status: "Approval Pending",
    icon: HiIdentification,
    style: {
      color: "bg-orange-100",
      iconColor: "orange",
    },
  },
  {
    id: 2,
    fig: 182,
    type: "High Risk",
    status: "Consumer",
    icon: MdError,
    style: {
      color: "bg-red-100",
      iconColor: "red",
    },
  },
  {
    id: 3,
    fig: 32,
    type: "Tickets Open",
    status: null,
    icon: FaTicketAlt,
    style: {
      color: "bg-blue-100",
      iconColor: "blue",
    },
  },
];
