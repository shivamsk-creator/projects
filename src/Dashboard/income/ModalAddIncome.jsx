import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Radio,
} from "@material-tailwind/react";
import baseurl from "../../Config";
import { toast } from "react-toastify";

const ModalAddIncome = ({ open, handleOpen, getIncomeList }) => {
  const [income_head, setIncome_head] = useState("");
  const [name, setName] = useState("");
  const [invoice_number, setInvoice_number] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [attach, setAttach] = useState([]);
  const [desc, setDesc] = useState("");

  const onSubmitClick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("income_head", income_head);
    formData.append("name", name);
    formData.append("invoice_number", invoice_number);
    formData.append("attach", attach);
    formData.append("desc", desc);
    formData.append("date", date);
    formData.append("amount", amount);

    // Empty the value of fields
    setIncome_head("");
    setName("");
    setInvoice_number("");
    setAttach("");
    setDesc("");
    setAmount("");
    setDate("");

    // Post Api For Posting Data
    fetch(baseurl + "/api/income", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        toast.success("Income Added Successfully");
        getIncomeList();
        handleOpen();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        size="sm"
        className="min-w-[80%] md:min-w-[60%] lg:min-w-[50%]"
      >
        <DialogHeader className="text-center justify-center">
          {" "}
          Add Income
        </DialogHeader>
        <DialogBody divider className="h-[25rem] overflow-y-scroll">
          <form className="w-full px-5 mt-5" onSubmit={onSubmitClick}>
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* Expense Head */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="income_head"
                >
                  Expense Head
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="income_head"
                  type="text"
                  placeholder="Electricity"
                  value={income_head}
                  onChange={(e) => {
                    setIncome_head(e.target.value);
                  }}
                />
              </div>
              {/* Name */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  type="text"
                  placeholder="Fun Fest"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              {/* Invoice Number */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="invoice_number"
                >
                  Invoice Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="invoice_number"
                  type="number"
                  placeholder="632612"
                  value={invoice_number}
                  onChange={(e) => {
                    setInvoice_number(e.target.value);
                  }}
                />
              </div>
              {/* Date */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="date"
                >
                  Date
                </label>
                <input
                  className="scroll-smooth appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
              {/* Amount */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="amount"
                >
                  Amount
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="amount"
                  type="number"
                  placeholder="2000"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
              </div>
              {/* Attach */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="attach"
                >
                  Attach Document
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="attach"
                  type="file"
                  onChange={(e) => {
                    setAttach(e.target.files[0]);
                  }}
                />
              </div>
              {/* Description */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="desc"
                >
                  Description
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="desc"
                  type="text"
                  placeholder="Description"
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </div>
              <input
                type="submit"
                className="p-2 bg-[var(--theme-color)] rounded-lg text-white hover:bg-[var(--secondary-color)] cursor-pointer transition-all"
              />
            </div>
          </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ModalAddIncome;
