"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DynamicProduct = () => {
  const [record, setRecord] = useState("");
  const params = useParams();
  const { id } = params;
  console.log("dynamic Client ID:", id);
  const recordHandler = async () => {
    try {
      const response = await fetch(`}`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network Response was not ok");
      }
      const newData = await response.json();
      console.log(newData);
      setRecord(newData, data);
    } catch (error) {
      console.error("Failed to fetch record:", error);
      //optionally handle error state here
    }
  };
  useEffect(() => {
    recordHandler();
  }, [id]);
  const bookingHandler = async () => {
    if (!selectedDates) {
      alert("please select booking dates");
    }
    const userBookingDetails = { record, selectedDates };
    try {
      const response = await bookingAction(userBookingDetails);
      console.log(userBookingDetails);
      if (response.success) {
        alert("Booking Confirmed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDateSelect = (dates) => {
    setSelectedDates(dates);
    console.log("booking Dates:", dates);
  };
  return (
    <div>
      <Link href="/">
        <p align="center">Go Back</p>
      </Link>
      <CalenderComponent onDatesSelect={handleDateSelect} />

      {record ? (
        <div className="">
          <div className="singleSection">
            <div className="singleLeft">
              <div className="">
                <h2>{record.title}</h2>
              </div>
              <img
                src={record.image}
                alt={record.title}
                className="singleImage"
              />
            </div>
            <div className="singleCenter">
              <div className="SinglePrice">Rs.{record.price}</div>
              <p className="singleDesc">{record.desc}</p>
              <div className="">
                {record.amen.map((item, i) => {
                  return (
                    <div className="singleAmen" key={i}>
                      <span>*</span>
                      {item}
                    </div>
                  );
                })}
              </div>
              <div className="offer">
                F<span>*</span>
                <button>Discount {record.offer}</button>
              </div>
              <div className="singleBtn">
                <button className="" onClick={bookingHandler}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 style={{ position: "absolute", top: "50%", left: "50%" }}>
          Loading...
        </h1>
      )}
    </div>
  );
};

export default DynamicProduct;
