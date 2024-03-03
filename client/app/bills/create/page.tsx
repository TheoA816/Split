"use client";

import {
  ChangeEvent,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CalendarIcon, TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type Item = {
  name: string;
  quantity: number;
  cost: string;
};

type Participant = {
  profilePicture: string;
  email: string;
  name: string;
};

type Data = {
  title: string;
  date: Date;
  total: string;
  items: Item[];
  participants: Participant[];
};

function isNumeric(value: string) {
  return /^-?\d+$/.test(value);
}

export default function Page() {
  // Fetch bill data based on query params

  // Dummy data for bill
  const data: Data = {
    title: "Maccas",
    date: new Date(),
    total: "69.0",
    items: [
      {
        name: "Random item #1",
        quantity: 1,
        cost: "6.9",
      },
      {
        name: "Random item #2",
        quantity: 1,
        cost: "6.9",
      },
    ],
    participants: [],
  };

  const [title, setTitle] = useState<string>(data.title);
  const [date, setDate] = useState<Date>(data.date);
  const [total, setTotal] = useState<string>(data.total);
  const [items, setItems] = useState<Item[]>(data.items);
  const [participants, setParticipants] = useState<Participant[]>(
    data.participants
  );

  const addItem = useCallback(() => {
    setItems([
      ...items,
      {
        name: "",
        quantity: 1,
        cost: "0.0",
      },
    ]);
  }, [items]);

  const updateItem = useCallback(
    (key: keyof Item, value: string, index: number) => {
      const newItems = [...items];
      // Update that specific key value pair of row
      ((newItems[index] as Item)[key] as string) = value;
      setItems(newItems);
    },
    [items]
  );

  const updateItemQuantity = useCallback(
    (quantity: number, index: number) => {
      const newItems = [...items];
      // Update that specific key value pair of row
      ((newItems[index] as Item)["quantity"] as number) = quantity;
      setItems(newItems);
    },
    [items]
  );

  const removeItem = useCallback(
    (index: number) => {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
    },
    [items]
  );

  // need a way to collect all participants
  // from frontend + add participants accordingly

  const removeParticipant = useCallback(
    (index: number) => {
      const newParticipants = [...participants];
      newParticipants.splice(index, 1);
      setParticipants(newParticipants);
    },
    [participants]
  );

  // dummy function
  const submitBill = () => {};

  const readyToSubmit = useMemo(
    () =>
      title &&
      date &&
      total &&
      isNumeric(total) &&
      items.every(
        (item: Item) =>
          item.name && isNumeric(item.cost) && Number.isInteger(item.quantity)
      ),
    [title, date, total, items]
  );

  return (
    <div className="text-splitDarkBlue space-y-8 mb-16 px-12 py-10">
      <h1 className="font-bold text-2xl">Confirm split bill</h1>
      {/** Title **/}
      <div className="space-y-2">
        <label htmlFor="bill-create-title" className="text-xl font-bold block">
          Title
        </label>
        <input
          type="text"
          id="bill-create-title"
          name="title"
          className="px-4 py-2 mt-2 border border-splitDarkBlue/25 rounded-md w-full duration-200 focus:outline-none focus:shadow-md focus:shadow-splitDarkBlue/10"
          placeholder="Enter title"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
      </div>
      {/** Date **/}
      <div className="flex justify-between gap-2 items-center">
        <p className="font-bold text-xl">Date</p>
        <p className="text-lg">{data.date.toUTCString().slice(0, -13)}</p>
      </div>
      {/** Total **/}
      <div className="flex justify-between gap-2 items-center">
        <label className="font-bold text-xl" htmlFor="bill-create-total">
          Total
        </label>
        <input
          type="text"
          id="bill-create-total"
          name="total"
          className="px-4 py-2 mt-2 text-right border border-splitDarkBlue/25 rounded-md duration-200 focus:outline-none focus:shadow-md focus:shadow-splitDarkBlue/10"
          value={total}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTotal(e.target.value)
          }
          min={0}
        />
      </div>
      {/** Items **/}
      <label className="text-xl font-bold block" htmlFor="bill-create-items">
        Items
      </label>
      {items.length > 0 && (
        <>
          <div className="grid grid-cols-4 gap-2">
            {["Quantity", "Name", "Cost"].map(
              (heading: string, index: number) => (
                <p key={index}>{heading}</p>
              )
            )}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {items.map((item: Item, index: number) => (
              <>
                <input
                  type="number"
                  id={`bill-create-item-quantity-${index + 1}`}
                  value={item.quantity}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateItemQuantity(Number(e.target.value), index)
                  }
                  className="p-2 mt-2 border border-splitDarkBlue/25 rounded-md duration-200 focus:outline-none focus:shadow-md focus:shadow-splitDarkBlue/10"
                  min={0}
                />
                <input
                  type="text"
                  id={`bill-create-item-name-${index + 1}`}
                  value={item.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateItem("name", e.target.value, index)
                  }
                  className="p-2 mt-2 border border-splitDarkBlue/25 rounded-md duration-200 focus:outline-none focus:shadow-md focus:shadow-splitDarkBlue/10"
                />
                <input
                  type="text"
                  id={`bill-create-item-name-${index + 1}`}
                  value={item.cost}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateItem("cost", e.target.value, index)
                  }
                  className="p-2 mt-2 border border-splitDarkBlue/25 rounded-md duration-200 focus:outline-none focus:shadow-md focus:shadow-splitDarkBlue/10"
                />
                <button className="ml-auto" onClick={() => removeItem(index)}>
                  <TrashIcon className="w-4 h-4 duration-200 hover:text-splitDarkBlue/85"></TrashIcon>
                </button>
              </>
            ))}
          </div>
        </>
      )}
      <button
        className="w-full bg-splitDarkBlue duration-200 hover:bg-splitDarkBlue/85 px-12 py-4 text-white rounded-lg"
        onClick={() => addItem()}
      >
        Add item
      </button>
      {/** Participants **/}
      <p className="font-bold text-xl">Add friends to split with</p>
      {/** Information of current user **/}
      <div className="flex gap-4 items-center flex-wrap">
        <div className="h-10 w-10 rounded-full bg-splitBlue" />
        <p>Username</p>
      </div>
      {participants.map((participant: Participant, index: number) => (
        <div
          className="flex justify-between gap-6 items-center flex-wrap"
          key={index}
        >
          {/* <Image src={""} width={48} height={48} alt={participant.name} /> */}
          <div className="flex gap-4 items-center flex-wrap">
            <div className="h-10 w-10 rounded-full bg-splitBlue" />
            <p>{participant.name}</p>
          </div>
          <button onClick={() => removeParticipant(index)}>
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      ))}
      {/** Confirm split bill **/}
      <button
        className="bg-splitDarkBlue text-white disabled:bg-splitDarkBlue/25 px-12 py-4 w-full rounded-xl shadow-md shadow-splitDarkBlue/10"
        onClick={() => submitBill()}
        disabled={!readyToSubmit}
      >
        Confirm split bill
      </button>
    </div>
  );
}
