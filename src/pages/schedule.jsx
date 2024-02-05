import React from "react";
import {createColumnHelper} from "@tanstack/react-table";
import HeaderNav from "@/components/HeaderNav";
import Button from "@/components/Button";
import {
  BUTTON_VARIANT,
  ScheduleDataOne,
  ScheduleDataTwo,
  ScheduleDataThree,
  ScheduleDataFour,
  ScheduleDataFive,
  ScheduleDataSix,
} from "@/constants";
import {Table} from "@/components/Table";
import Footer from "@/components/Footer";

export default function schedule() {
  const data = [
    {
      day: "Hackathon",
    },
  ];

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("day", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>2nd - 4th May</span>,
    }),
  ];

  const scheduleDataOneColumns = [
    columnHelper.accessor("day", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>6th May</span>,
    }),
    columnHelper.accessor("border1", {
      cell: (info) => (
        <p className="border-r border-[#414141] h-8">{info.getValue()}</p>
      ),
      header: () => <span className="h-8"></span>,
    }),
    columnHelper.accessor("topics", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Topics</span>,
    }),
    columnHelper.accessor("border2", {
      cell: (info) => (
        <p className="border-r border-[#414141] h-8">{info.getValue()}</p>
      ),
      header: () => <span className="h-8 "></span>,
    }),
    columnHelper.accessor("speaker", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Speakers</span>,
    }),
  ];

  const scheduleDataTwoColumns = [
    columnHelper.accessor("day", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>7th May</span>,
    }),
    columnHelper.accessor("border1", {
      cell: (info) => (
        <p className="border-r border-[#414141] h-8">{info.getValue()}</p>
      ),
      header: () => <span className="h-8"></span>,
    }),
    columnHelper.accessor("topics", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Topics</span>,
    }),
    columnHelper.accessor("border2", {
      cell: (info) => (
        <p className="border-r border-[#414141] h-8">{info.getValue()}</p>
      ),
      header: () => <span className="h-8 "></span>,
    }),
    columnHelper.accessor("speaker", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Speakers</span>,
    }),
  ];
  const scheduleDataThreeColumns = [
    columnHelper.accessor("day", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>8th May</span>,
    }),
    columnHelper.accessor("border1", {
      cell: (info) => (
        <p className="border-r border-[#414141] h-8">{info.getValue()}</p>
      ),
      header: () => <span className="h-8"></span>,
    }),
    columnHelper.accessor("topics", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Topics</span>,
    }),
    columnHelper.accessor("border2", {
      cell: (info) => (
        <p className="border-r border-[#414141] h-8">{info.getValue()}</p>
      ),
      header: () => <span className="h-8 "></span>,
    }),
    columnHelper.accessor("speaker", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Speakers</span>,
    }),
  ];
  const scheduleDataFourColumns = [
    columnHelper.accessor("day", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>9th May</span>,
    }),
    columnHelper.accessor("border1", {
      cell: (info) => (
        <p className="border-r border-[#414141] h-8">{info.getValue()}</p>
      ),
      header: () => <span className="h-8"></span>,
    }),
    columnHelper.accessor("topics", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Topics</span>,
    }),
    columnHelper.accessor("border2", {
      cell: (info) => (
        <p className="border-r border-[#414141] h-8">{info.getValue()}</p>
      ),
      header: () => <span className="h-8 "></span>,
    }),
    columnHelper.accessor("speaker", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Speakers</span>,
    }),
  ];
  const scheduleDataFiveColumns = [
    columnHelper.accessor("day", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>10th May</span>,
    }),
    columnHelper.accessor("border1", {
      cell: (info) => (
        <p className="border-r border-[#414141] h-8">{info.getValue()}</p>
      ),
      header: () => <span className="h-8"></span>,
    }),
    columnHelper.accessor("topics", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Topics</span>,
    }),
    columnHelper.accessor("border2", {
      cell: (info) => (
        <p className="border-r border-[#414141] h-8">{info.getValue()}</p>
      ),
      header: () => <span className="h-8 "></span>,
    }),
    columnHelper.accessor("speaker", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Speakers</span>,
    }),
  ];
  const scheduleDataSixColumns = [
    columnHelper.accessor("day", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>11th May</span>,
    }),
    columnHelper.accessor("border1", {
      cell: (info) => (
        <p className="border-r border-[#414141] h-8">{info.getValue()}</p>
      ),
      header: () => <span className="h-8"></span>,
    }),
    columnHelper.accessor("topics", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Topics</span>,
    }),
    columnHelper.accessor("border2", {
      cell: (info) => (
        <p className="border-r border-[#414141] h-8">{info.getValue()}</p>
      ),
      header: () => <span className="h-8 "></span>,
    }),
    columnHelper.accessor("speaker", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Speakers</span>,
    }),
  ];

  return (
    <div>
      <title>Lagos Blockchain Week | Schedule</title>
      <img
        id="hero"
        src="./images/img_image28.png"
        alt="schedule-image"
        className="sm:h-[100vh] lg:h-[80vh] object-cover object-fill brightness-50 "
      />
      <div className="absolute top-0 w-full">
        <HeaderNav />
        <img
          className="ml-auto mr-16 lg:w-32 w-14 sm:mt-8 lg:mt-10"
          src="./images/circular-button.png"
          alt=""
        />
        <div className="text-white lg:flex flex-col justify-center text-center  item-center  sm:py-12 sm:pt-8 leading-8">
          <p className="sm:max-w-[14] sm:px- justify-center text-center">
            Held in the picturesque city of Lagos, PBW is a week-long
            <br />
            blockchainextravaganza, made up of exhibitions, keynotes, workshops,
            <br />
            networking events,and more. See the full schedule below.
          </p>
          <div className="lg:flex items-center justify-center sm:px-6 mt-10">
            <Button
              href="/"
              label="Register for hackathon"
              className=""
              labelClassName="text-center"
            />
            <Button
              href="/"
              label="Partner with us"
              variant={BUTTON_VARIANT.DARK}
              svgclassName="fill-[#FFFCE1]"
              className="bg-opacity-10 border border-[#fffdef] border-b-4 lg:ml-6 border-r-4 "
              labelClassName="text-center"
            />
          </div>{" "}
          <div id="hero" className="lg:mt-8">
            <Table
              data={data}
              columns={columns}
              title=""
              className="mt-1  "
              tableClassName="p-2 lg:p-14 "
            />
            <div className="lg:px-14 lg:-mt-8 sm:px-2">
              <Button
                href="/"
                label="Register for event"
                className="sm:px-6 justify-center flex w-full "
                labelClassName="text-center"
              />
            </div>
            <div>
              <Table
                data={ScheduleDataOne}
                columns={scheduleDataOneColumns}
                title=""
                className="lg:-mt-14"
                rowClassName="max-w-px"
                tableClassName="p-2 lg:p-14 "
              />
              <div className="lg:px-14 lg:-mt-8 sm:px-2">
                <Button
                  href="/"
                  label="Register for event"
                  className="sm:px-6 justify-center flex w-full "
                  labelClassName="text-center"
                />
              </div>
              <Table
                data={ScheduleDataTwo}
                columns={scheduleDataTwoColumns}
                title=""
                rowClassName="max-w-px"
                className="lg:-mt-14"
                tableClassName="p-2 lg:p-14 "
              />
              <div className="lg:px-14 lg:-mt-8 sm:px-2">
                <Button
                  href="/"
                  label="Register for event"
                  className="sm:px-6 justify-center flex w-full "
                  labelClassName="text-center"
                />
              </div>
              <Table
                data={ScheduleDataThree}
                columns={scheduleDataThreeColumns}
                rowClassName="max-w-px"
                title=""
                className="lg:-mt-14"
                tableClassName="p-2 lg:p-14 "
              />
              <div className="lg:px-14 lg:-mt-8 sm:px-2">
                <Button
                  href="/"
                  label="Register for event"
                  className="sm:px-6 justify-center flex w-full "
                  labelClassName="text-center"
                />
              </div>
              <Table
                data={ScheduleDataFour}
                columns={scheduleDataFourColumns}
                rowClassName="max-w-4"
                className="lg:-mt-14"
                tableClassName="p-2 lg:p-14 "
              />
              <div className="lg:px-14 lg:-mt-8 sm:px-2">
                <Button
                  href="/"
                  label="Register for event"
                  className="sm:px-6 justify-center flex w-full "
                  labelClassName="text-center"
                />
              </div>
              <Table
                data={ScheduleDataFive}
                columns={scheduleDataFiveColumns}
                rowClassName="max-w-px"
                className="lg:-mt-14"
                tableClassName="p-2 lg:p-14 "
              />
              <div className="lg:px-14 lg:-mt-8 sm:px-2">
                <Button
                  href="/"
                  label="Register for event"
                  className="sm:px-6 justify-center flex w-full "
                  labelClassName="text-center"
                />
              </div>
              <Table
                data={ScheduleDataSix}
                columns={scheduleDataSixColumns}
                rowClassName="max-w-px"
                className="lg:-mt-14"
                tableClassName="p-2 lg:p-14 "
              />
              <div className="lg:px-14 lg:-mt-8 sm:px-2 lg:mb-20">
                <Button
                  href="/"
                  label="Register for event"
                  className="sm:px-6 justify-center flex w-full "
                  labelClassName="text-center"
                />
              </div>
            </div>
          </div>{" "}
        </div>
        <Footer className="lg:mt-0" />
      </div>
    </div>
  );
}
