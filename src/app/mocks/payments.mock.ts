import { Payment } from "../models/payment";

export const mockPayments: Payment[] = [
  {
    id: 1,
    name: "Pennie Dumphries",
    username: "pdumphries0",
    title: "Dental Hygienist",
    value: 19.96,
    date: "2020-07-21T05:53:20Z",
    image:
      "https://robohash.org/asperioresprovidentconsequuntur.png?size=150x150&set=set1",
    isPayed: true,
  },
  {
    id: 2,
    name: "Foster Orthmann",
    username: "forthmann1",
    title: "Professor",
    value: 207.36,
    date: "2021-01-28T14:01:29Z",
    image: "https://robohash.org/quasetqui.png?size=150x150&set=set1",
    isPayed: true,
  },
  {
    id: 3,
    name: "Crissie Summerill",
    username: "csummerill2",
    title: "VP Product Management",
    value: 464.54,
    date: "2020-02-09T18:20:32Z",
    image:
      "https://robohash.org/natusinciduntsapiente.png?size=150x150&set=set1",
    isPayed: false,
  },
];
