"use client";

import { bookingAction } from "@/app/serverActions/bookingAction";
import CalenderComponent from "@/components/CalenderComponent";
import UserNavigation from "@/components/UserNavigation";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DynamicProduct = () => {
  const [record, setRecord] = useState("");
  const [selectedDates, setSelectedDates] = useState(null);
  const params = useParams();
  const { id } = params;
  console.log("dynamic Client ID:", id);
  const dynamicProductHandler = async () => {
    const response = await fetch(
      `http://localhost:3000/api/admin/product/${id}`
    );
    const newData = await response.json();
    console.log("dynamic data:", newData);
    setRecord(newData.data);
  };
  useEffect(() => {
    dynamicProductHandler();
  }, []);
  const bookingHandler = async () => {
    if (!selectedDates) {
      alert("Please select booking dates");
      return;
    }
    const bookingDetails = { record, selectedDates };
    try {
      await bookingAction(record);
    } catch (error) {}
  };
  const handleDateSelect = (dates) => {
    setSelectedDates(dates);
    console.log("Dates coming from calender", dates);
  };
  return (
    <div>
      <UserNavigation />
      <CalenderComponent onDatesSelect={handleDateSelect} />
      <Link href="/">
        <p align="center">Go Back</p>
      </Link>

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
