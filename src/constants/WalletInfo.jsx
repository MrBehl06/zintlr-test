import { IoMdArrowDropright } from "react-icons/io";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";

export const WalletInfo = [
  {
    id: 1,
    icon: RiMoneyDollarCircleFill,
    iconStyle:
      "w-12 h-12 text-2xl bg-indigo-100 flex items-center justify-center rounded-full text-indigo-600",
    mainText: "TruCard Cash Wallet ",
    text: "Wallet History",
    iconSecond: IoMdArrowDropright,
  },
  {
    id: 2,
    icon: FaWallet,
    iconStyle:
      "w-12 h-12 text-2xl bg-orange-100 flex items-center justify-center rounded-full text-orange-600",
    mainText: "TruCard Bullion Wallet ",
    text: "Wallet History",
    iconSecond: IoMdArrowDropright,
  },
  {
    id: 3,
    icon: GiTakeMyMoney,
    iconStyle:
      "w-12 h-12 text-2xl bg-green-100 flex items-center justify-center rounded-full text-green-600",
    mainText: "Float",
    text: "Wallet History",
    iconSecond: IoMdArrowDropright,
  },
  {
    id: 4,
    icon: GiReceiveMoney,
    iconStyle:
      "w-12 h-12 text-2xl bg-pink-100 flex items-center justify-center rounded-full text-pink-600",
    mainText: "Lending",
    text: "Wallet History",
    iconSecond: IoMdArrowDropright,
  },
  {
    id: 5,
    icon: GiReceiveMoney,
    iconStyle:
      "w-12 h-12 text-2xl bg-pink-100 flex items-center justify-center rounded-full text-pink-600",
    mainText: "Activity Overview",
  },
  {
    id: 6,
    type: "WeekData",
    dataSet: ["Past Week", "Past Month", "Past Year", "All Time"],
  },
  {
    id: 7,
    icon: GiReceiveMoney,
    iconStyle:
      "w-12 h-12 text-2xl bg-pink-100 flex items-center justify-center rounded-full text-pink-600",
    mainText: "Refrral",
    text: "Review History",
    iconSecond: IoMdArrowDropright,
  },
  {
    id: 8,
    icon: GiReceiveMoney,
    iconStyle:
      "w-12 h-12 text-2xl bg-pink-100 flex items-center justify-center rounded-full text-pink-600",
    mainText: "Disable Consumer",
  },
  {
    id: 9,
    icon: GiReceiveMoney,
    iconStyle:
      "w-12 h-12 text-2xl bg-pink-100 flex items-center justify-center rounded-full text-pink-600",
    mainText: "Edit Consumer details",
  },
];
