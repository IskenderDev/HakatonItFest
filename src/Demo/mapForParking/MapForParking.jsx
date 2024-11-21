import React, { useState } from "react";

const ModalWin = ({ onClose, onConfirm }) => {
  return (
    <div className="w-[420px] fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[400px] p-4 rounded shadow-lg">
        <p className="text-lg font-bold mb-2">Вы действительно хотите забронировать парковку?</p>
        <p className="mb-4">Порковка стоит 25 сомов на бронь!</p>
        <p className="mb-4">Вы должны успеть за 15 минут, иначе место будет отдан другим. Согласны?</p>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            onClick={onClose}
          >
            Отмена
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            onClick={onConfirm}
          >
            Бронь
          </button>
        </div>
        <div className="flex items-center justify-center mt-4 text-red-600">00:15</div>
      </div>
    </div>
  );
};

const MapForParking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [parkingLot, setParkingLot] = useState([
    "red",
    "red",
    "green",
    "green",
    "red",
    "green",
    "green",
    "red",
    "red",
    "green",
    "green",
    "red",
    "red",
    "green",
    "green",
  ]);

  const handleSlotClick = (index) => {
    if (parkingLot[index] === "green") {
      setSelectedSlot(index);
      setIsModalOpen(true);
    }
  };

  const handleConfirm = () => {
    if (selectedSlot !== null) {
      const updatedParkingLot = [...parkingLot];
      updatedParkingLot[selectedSlot] = "red";
      setParkingLot(updatedParkingLot);
      setSelectedSlot(null);
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      {isModalOpen && (
        <ModalWin
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirm}
        />
      )}

      <div className="w-[420px] flex justify-center align-center">
        <div className="flex align-center justify-center flex-col">
          <h1>Parking</h1>
          <div className="flex justify-between align-center flex-row p-4 bg-slate-600 w-[400px] h-[650px]">
            <div className="flex flex-col items-end justify-start gap-6 mt-5 w-[100px]">
              {parkingLot.slice(0, 8).map((color, index) => (
                <>
                  <div className="w-[100px] h-[3px] bg-white -rotate-12"></div>
                  <div
                    key={`left-${index}`}
                    className={`w-[7px] h-[7px] bg-${color}-600 mb-[15px]`}
                    onClick={() => handleSlotClick(index)}
                    style={{
                      cursor: color === "green" ? "pointer" : "not-allowed",
                    }}
                  ></div>
                </>
              ))}
              <div className="w-[100px] h-[3px] bg-white -rotate-12"></div>
            </div>
            <div className="w-[2px] bg-white"></div>
            <div className="flex flex-col items-center justify-start gap-5 mt-8 w-[100px]">
              {Array(20)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={`middle-${index}`}
                    className="w-[1px] h-[10px] bg-white"
                  ></div>
                ))}
            </div>

            <div className="w-[2px] bg-white"></div>
            <div className="flex flex-col items-start justify-start gap-6 mt-5 w-[100px]">
              {parkingLot.slice(7).map((color, index) => (
                <>
                  <div className="w-[100px] h-[3px] bg-white -rotate-12"></div>
                  <div
                    key={`right-${index}`}
                    className={`w-[7px] h-[7px] bg-${color}-600 mt-[15px]`}
                    onClick={() => handleSlotClick(index + 8)}
                    style={{
                      cursor: color === "green" ? "pointer" : "not-allowed",
                    }}
                  ></div>
                </>
              ))}
              <div className="w-[100px] h-[3px] bg-white -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  

export default MapForParking;
