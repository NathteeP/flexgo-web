import React from 'react';
import Button from '../../components/Button';
import SelectDropdown from '../../components/HostHomepage/SelectDropdown';
import DonutChart from '../../components/HostHomepage/DonutChart';
import BarChart from '../../components/HostHomepage/BarChart';
import LineChartComponent from '../../components/HostHomepage/LineChart';
import FilterBar from '../../components/HostHomepage/FilterBar';

function HostHomepage() {
  return (
    <div className='relative h-[calc(100vh-90px)] w-full overflow-hidden '>
      <div className='absolute inset-0'></div>
      <div className='relative mx-32 my-10 h-full bg-red-300 bg-clip-text'>
        <div className='grid grid-cols-10 grid-rows-11 gap-4 h-[calc(100vh-170px)] '>
          <div className='col-span-2  rounded-xl '>
            <SelectDropdown />
          </div>
          <div className='col-span-8 col-start-3  rounded-xl '>
            <div className='h-full w-full'>
              <FilterBar />
            </div>
          </div>

          <div className='col-span-2 row-span-2 row-start-2   rounded-xl px-8 py-5 animated-background bg-gradient-to-bl from-fg-primary-03 to-fg-gradientBlue'>
            <div className='flex flex-col justify-between h-full pb-6 pt-2'>
              <small className='font-light'>Check-In</small>
              <div className='flex justify-between items-center pr-8'>
                <h1 className='text-3xl'>9,999 </h1>
                <small className='font-light text-fg-secondary-02'>
                  +99.99%
                </small>
              </div>
            </div>
          </div>
          <div className='col-span-2 row-span-2 col-start-3 row-start-2  rounded-xl px-8 py-5 animated-background bg-gradient-to-tl from-fg-primary-03 to-fg-gradientBlue '>
            <div className='flex flex-col justify-between h-full pb-6 pt-2'>
              <small className='font-light'>Check-Out</small>
              <div className='flex justify-between items-center pr-8 '>
                <h1 className='text-3xl'>9,999 </h1>
                <small className='font-light text-fg-secondary-02'>
                  +99.99%
                </small>
              </div>
            </div>
          </div>
          <div className='col-span-2 row-span-2 col-start-5 row-start-2  rounded-xl px-8 py-5 animated-background bg-gradient-to-t from-fg-primary-03 to-fg-gradientBlue'>
            <div className='flex flex-col justify-between h-full pb-6 pt-2'>
              <small className='font-light'>Booking</small>
              <div className='flex justify-between items-center pr-8'>
                <h1 className='text-3xl'>9,999 </h1>
                <small className='font-light text-fg-secondary-02'>
                  +99.99%
                </small>
              </div>
            </div>
          </div>
          <div className='col-span-2 row-span-2 col-start-7 row-start-2  rounded-xl px-8 py-5 animated-background bg-gradient-to-tr from-fg-primary-03 to-fg-gradientBlue '>
            <div className='flex flex-col justify-between h-full pb-6 pt-2'>
              <small className='font-light'>Cancel</small>
              <div className='flex justify-between items-center pr-8'>
                <h1 className='text-3xl'>9,999 </h1>
                <small className='font-light text-fg-secondary-02'>
                  +99.99%
                </small>
              </div>
            </div>
          </div>
          <div className='col-span-2 row-span-2 col-start-9 row-start-2  rounded-xl px-8 py-5 animated-background bg-gradient-to-r from-fg-primary-03 to-fg-gradientBlue '>
            <div className='flex flex-col justify-between h-full pb-6 pt-2'>
              <small className='font-light'>Room Available</small>
              <div className='flex justify-between items-center pr-8'>
                <h1 className='text-3xl'>9,999 </h1>
                <small className='font-light text-fg-secondary-02'>
                  +99.99%
                </small>
              </div>
            </div>
          </div>
          <div className='col-span-4 row-span-4 row-start-4  rounded-xl border-[1px]'>
            <div className='w-full h-full relative'>
              <div className='absolute top-4 left-5 text-fg-text-black'>
                Guest traffic
              </div>
              <LineChartComponent />
            </div>
          </div>
          <div className='col-span-2 row-span-2 col-start-5 row-start-4  rounded-xl px-8 py-5  bg-fg-secondary-02/15'>
            <div className='flex flex-col justify-between h-full pb-6 pt-2'>
              <small className='font-light'>Revenue ( Today )</small>
              <div className='flex justify-between items-center pr-8'>
                <h1 className='text-3xl'>9,999 </h1>
                <small className='font-light text-fg-secondary-02'>
                  +99.99%
                </small>
              </div>
            </div>
          </div>
          <div className='col-span-2 row-span-2 col-start-7 row-start-4  rounded-xl px-8 py-5  bg-fg-secondary-02/15'>
            <div className='flex flex-col justify-between h-full pb-6 pt-2'>
              <small className='font-light'>Revenue ( Month )</small>
              <div className='flex justify-between items-center pr-8'>
                <h1 className='text-3xl'>9,999 </h1>
                <small className='font-light text-fg-secondary-02'>
                  +99.99%
                </small>
              </div>
            </div>
          </div>
          <div className='col-span-2 row-span-2 col-start-9 row-start-4  rounded-xl px-8 py-5  animated-background bg-gradient-to-r from-fg-primary-03 to-fg-gradientBlue'>
            <div className='flex flex-col justify-between h-full pb-6 pt-2'>
              <small className='font-light'>Room Booked</small>
              <div className='flex justify-between items-center pr-8'>
                <h1 className='text-3xl'>9,999 </h1>
                <small className='font-light text-fg-secondary-02'>
                  +99.99%
                </small>
              </div>
            </div>
          </div>
          <div className='col-span-2 row-span-2 col-start-5 row-start-6  rounded-xl px-8 py-5  bg-fg-secondary-02/15'>
            <div className='flex flex-col justify-between h-full pb-6 pt-2'>
              <small className='font-light'>Active Users</small>
              <div className='flex justify-between items-center pr-8'>
                <h1 className='text-3xl'>9,999 </h1>
                <small className='font-light text-fg-secondary-02'>
                  +99.99%
                </small>
              </div>
            </div>
          </div>
          <div className='col-span-2 row-span-2 col-start-7 row-start-6  rounded-xl px-8 py-5  bg-fg-secondary-02/15'>
            <div className='flex flex-col justify-between h-full pb-6 pt-2'>
              <small className='font-light'>FlexGo Flee</small>
              <div className='flex justify-between items-center pr-8'>
                <h1 className='text-3xl'>9,999 </h1>
                <small className='font-light text-fg-secondary-02'>
                  +99.99%
                </small>
              </div>
            </div>
          </div>
          <div className='col-span-2 row-span-2 col-start-9 row-start-6  rounded-xl px-8 py-5  animated-background bg-gradient-to-br from-fg-primary-03 to-fg-gradientBlue '>
            <div className='flex flex-col justify-between h-full pb-6 pt-2'>
              <small className='font-light'>Total Guest</small>
              <div className='flex justify-between items-center pr-8'>
                <h1 className='text-3xl'>9,999 </h1>
                <small className='font-light text-fg-secondary-02'>
                  +99.99%
                </small>
              </div>
            </div>
          </div>
          <div className='col-span-4 row-span-4 row-start-8  rounded-xl border-[1px]'>
            <div className='w-full h-full relative'>
              <div className='absolute top-4 left-5 text-fg-text-black'>
                Guest traffic
              </div>
              <BarChart />
            </div>
          </div>
          <div className='col-span-4 row-span-4 col-start-5 row-start-8  rounded-xl border-[1px] '>
            <div className='w-full h-full relative'>
              <div className='absolute top-4 left-5 text-fg-text-black'>
                Room Type : Monthly Revenue
              </div>
              <DonutChart />
            </div>
          </div>
          <div className='col-span-2 row-span-2 col-start-9 row-start-8  rounded-xl px-8 py-5  animated-background bg-gradient-to-bl from-fg-primary-03 to-fg-gradientBlue'>
            <div className='flex flex-col justify-between h-full pb-6 pt-2'>
              <small className='font-light'>Total Room</small>
              <div className='flex justify-between items-center pr-8'>
                <h1 className='text-3xl'>9,999 </h1>
                <small className='font-light text-fg-secondary-02'>
                  +99.99%
                </small>
              </div>
            </div>
          </div>
          <div className='col-span-2 row-span-2 col-start-9 row-start-10  rounded-xl px-8 py-5  animated-background bg-gradient-to-l from-fg-primary-03 to-fg-gradientBlue'>
            <div className='flex flex-col justify-between h-full pb-6 pt-2'>
              <small className='font-light'>Check-In</small>
              <div className='flex justify-between items-center pr-8'>
                <h1 className='text-3xl'>9,999 </h1>
                <small className='font-light text-fg-secondary-02'>
                  +99.99%
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostHomepage;
