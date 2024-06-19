import React from "react";
import StatusButton from "./StatusButton";

const ModalDetailHistory = ({ ticket, onClose }) => {
  if (!ticket) {
    return <div>No ticket</div>;
  }

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "issued":
        return "bg-[#73CA5C] text-white";
      case "unpaid":
        return "bg-[#FF0000] text-white";
      case "cancelled":
        return "bg-[#8A8A8A] text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2 ">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-lg w-full  py-4 ">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 w-5"
            style={{
              fontSize: "30px",
            }}
          >
            <strong>&times;</strong>
          </button>
        </div>
        <div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-5">
              <h3 className="text-gray-900 font-poppins text-lg font-bold">
                Detail Pesanan
              </h3>
              <p className="flex items-center justify-center rounded-full p-1 px-4 text-center text-sm text-white">
                <div
                  className={`${getStatusStyle(
                    ticket.ticket_status
                  )} px-3 py-1 rounded-full inline-block mb-1`}
                >
                  {ticket.ticket_status.charAt(0).toUpperCase() +
                    ticket.ticket_status.slice(1)}
                </div>
              </p>
            </div>
            <div className="flex">
              <h4 className="text-gray-900 font-poppins text-lg font-bold">
                <span className="font-normal text-gray-900">Booking Code:</span>
                <span className="text-[#7126B5]">{ticket.booking_id}</span>
              </h4>
            </div>
          </div>

          <div className="flex flex-col gap-15px">
            <div className="flex items-start">
              <div className="flex flex-1 flex-col items-start">
                <h5 className="text-gray-900 font-poppins w-33% text-sm font-bold leading-5 md:w-full">
                  <span className=" text-gray-900">Departur Time</span>
                  <br />
                  <span className="font-normal text-gray-900">
                    Departur Date
                  </span>
                </h5>
                <p className="text-gray-900 font-poppins text-sm font-medium">
                  departure location
                </p>
              </div>
              <div className="relative ml-[-78px] flex">
                <h6 className="text-[#7126B5] font-poppins text-xs font-bold text-deep_purple-300">
                  Keberangkatan
                </h6>
              </div>
            </div>
            <hr className="border-t-2 border-gray-300 " />
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <div className="flex">
              <div className="flex flex-col justify-center py-16 md:py-5">
                <img
                  className="h-24px object-cover"
                  src="logoplane.svg"
                  alt="Logo"
                  loading="lazy"
                />
              </div>
              <p className="text-gray-900 font-poppins w-93% text-xs font-medium leading-18px">
                <span className="text-sm font-bold text-gray-900">
                  kelas ticket
                  <br />
                  kode flight
                  <br />
                </span>
                <span className="text-sm font-bold text-gray-900">
                  Informasi:
                </span>
                <br />
                Penumpang 1 2 3 4
              </p>
            </div>
            <hr className="border-t-2 border-gray-300 " />
          </div>

          <div className="flex flex-col gap-3.5 pt-3">
            <div>
              <div className="flex items-start">
                <div className="flex flex-1 flex-col items-start gap-0.5">
                  <p className="text-gray-900 font-poppins w-41% text-sm font-bold leading-5 md:w-full">
                    <span className="text-gray-900">arival time</span>
                    <br />
                    <span className="font-normal text-gray-900">
                      arival date
                    </span>
                  </p>
                  <p className="text-gray-900 font-poppins text-sm font-medium">
                    arival location
                  </p>
                </div>
                <div className="relative ml-[-24px] flex">
                  <p className="text-[#7126B5] font-poppins text-xs font-bold text-deep_purple-300">
                    Kedatangan
                  </p>
                </div>
              </div>
            </div>
            <hr className="border-t-2 border-gray-300 " />
          </div>

          <div className="flex flex-col gap-0.5 py-2">
            <div className="flex">
              <p className="text-gray-900 font-poppins text-sm font-bold">
                Rincian Harga
              </p>
            </div>
            <div className="flex justify-between gap-5">
              <div className="flex flex-1">
                <p className="text-gray-900 font-poppins text-sm font-normal">
                  2 Adults
                </p>
              </div>
              <div className="flex">
                <p className="text-gray-900 font-poppins text-sm font-normal">
                  segini
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-1">
                <p className="text-gray-900 font-poppins text-sm font-normal">
                  1 Childern
                </p>
              </div>
              <p className="text-gray-900 font-poppins text-sm font-normal">
                segini
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-1">
                <p className="text-gray-900 font-poppins text-sm font-normal">
                  1 Baby
                </p>
              </div>
              <p className="text-gray-900 font-poppins text-sm font-normal">
                segini
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-1">
                <p className="text-gray-900 font-poppins text-sm font-normal">
                  Tax
                </p>
              </div>
              <p className="text-gray-900 font-poppins text-sm font-normal"></p>
            </div>
            <hr className="border-t-2 border-gray-300 " />
            <div className="flex items-center gap-2 border-t border-solid border-blue-gray-100 py-2.5">
              <div className="flex flex-1">
                <h6 className="text-gray-900 font-poppins text-base font-bold">
                  Total
                </h6>
              </div>
              <h6 className="text-[#7126B5] font-poppins text-lg font-bold text-deep_purple-500">
                IDR 150.000.000
              </h6>
            </div>
            <div>
              <StatusButton
                status={
                  ticket.ticket_status.charAt(0).toUpperCase() +
                  ticket.ticket_status.slice(1)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetailHistory;