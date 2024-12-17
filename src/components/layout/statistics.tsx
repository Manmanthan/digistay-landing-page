import React from "react"
import Image from "next/image"
import AverageCost from "@/../public/average-cost.svg"
import FasterCheckin from "@/../public/faster-check-in.svg"
import GuestSatisfaction from "@/../public/guest-satisfaction.svg"
import HotelTransformed from "@/../public/hotel-transformed.svg"
import StatisticsImage from "@/../public/statistics.svg"

const STATISTICS_DATA = [
  { icon: HotelTransformed, value: "500+", name: "Hotels Transformed" },
  { icon: FasterCheckin, value: "80%", name: "Faster Check-Ins" },
  { icon: AverageCost, value: "40%", name: "Average Cost Savings" },
  { icon: GuestSatisfaction, value: "98%", name: "Guest Satisfaction Rate" },
]

const Statistics = () => {
  return (
    <div
      id="statistics"
      className="flex w-full max-w-screen-xl flex-col gap-20 px-4 pb-32 xl:px-0"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="text-lg text-primary xl:text-2xl">Statistics</span>
        <h3 className="text-2xl font-bold xl:text-3xl">DigiStay in Numbers</h3>
      </div>
      <div className="grid w-full grid-cols-1 items-center gap-10 xl:grid-cols-2 ">
        <div className="flex flex-col gap-6">
          {STATISTICS_DATA.map((data) => (
            <div
              key={data.name}
              className="flex items-start gap-6 border-b border-primary pb-4"
            >
              <Image
                src={data.icon}
                alt={"icon"}
                width={40}
                height={40}
                className="aspect-square object-cover"
              />
              <div className="flex flex-col gap-1 ">
                <span className="text-3xl font-bold text-primary">
                  {data.value}
                </span>
                <span className="text-lg text-secondary">{data.name}</span>
              </div>
            </div>
          ))}
        </div>
        <Image
          src={StatisticsImage}
          alt={"statistics-image"}
          width={500}
          height={500}
          className="aspect-square object-cover"
        />
      </div>
    </div>
  )
}

export default Statistics
