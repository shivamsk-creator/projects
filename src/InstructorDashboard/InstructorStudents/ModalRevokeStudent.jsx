import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const ModalRevokeStudent = ({ open, handleOpen }) => {
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="min-w-[80%] md:min-w-[60%] lg:min-w-[50%]"
      >
        <DialogHeader className="text-center justify-center">
          {" "}
          Revoke Course
        </DialogHeader>
        <DialogBody divider className="h-[25rem] overflow-y-scroll">
          <div className="my-5">
            <table className="table-auto w-full">
              <thead className="border-b border-b-gray-600  text-[var(--secondary-color)]">
                <tr className="uppercase text-start">
                  <th className="px-3 py-3 text-start ">Course</th>
                  <th className="px-3 py-3 text-start hidden md:table-cell">
                    Description
                  </th>
                  <th className="px-3 py-3 text-start">delete</th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td className="px-3 py-5 text-sm">Web Development</td>
                  <td className="px-3 py-5 hidden md:table-cell text-sm max-w-xs">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Enim ipsum molestiae magni quod illo voluptatem harum autem
                    ut tenetur porro!
                  </td>
                  <td className="px-3 py-5 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ModalRevokeStudent;
