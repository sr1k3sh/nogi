import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Tooltip } from 'react-tooltip'

const inter = Inter({ subsets: ['latin'] })

const mainBuildingList = [
  {
    id: 'A',
    identity: 'A',
    name: 'Multipurpose Hall',
    status: true,
  },
  {
    id: 'B',
    identity: 'B',
    name: 'Meeting Room',
    status: false,
  },
  {
    id: 'C',
    identity: 'C',
    name: 'Longue',
    status: false,
  },
  {
    id: 'D',
    identity: 'D',
    name: 'Terrace',
    status: false,
  },
]

const anotherBuildingList = [
  {
    id: 1,
    identity: '1',
    name: 'Night Club',
    status: true,
  },
  {
    id: 2,
    identity: '2',
    name: 'Meeting Room',
    status: false,
  },
  {
    id: 3,
    identity: '3',
    name: 'Guest Room',
    status: false,
  },
  {
    id: 4,
    identity: '4',
    name: 'Corridor',
    status: false,
  },
]

const guestRooms = [
  {
    id: 101,
    identity: '101',
    name: 'Night Club',
    status: true,
  },
  {
    id: 102,
    identity: '102',
    name: 'Meeting Room',
    status: false,
  },
  {
    id: 103,
    identity: '103',
    name: 'Guest Room',
    status: false,
  },
  {
    id: 104,
    identity: '104',
    name: 'Corridor',
    status: false,
  },
  {
    id: 105,
    identity: '105',
    name: 'Night Club',
    status: false,
  },
  {
    id: 106,
    identity: '106',
    name: 'Meeting Room',
    status: false,
  },
  {
    id: 107,
    identity: '107',
    name: 'Guest Room',
    status: false,
  },
  {
    id: 108,
    identity: '108',
    name: 'Corridor',
    status: false,
  },
  {
    id: 101,
    identity: '101',
    name: 'Night Club',
    status: false,
  },
  {
    id: 102,
    identity: '102',
    name: 'Meeting Room',
    status: false,
  },
  {
    id: 103,
    identity: '103',
    name: 'Guest Room',
    status: false,
  },
  {
    id: 104,
    identity: '104',
    name: 'Corridor',
    status: false,
  },
  {
    id: 105,
    identity: '105',
    name: 'Night Club',
    status: false,
  },
  {
    id: 106,
    identity: '106',
    name: 'Meeting Room',
    status: false,
  },
  {
    id: 107,
    identity: '107',
    name: 'Guest Room',
    status: false,
  },
  {
    id: 108,
    identity: '108',
    name: 'Corridor',
    status: false,
  },
]

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className='text-4xl font-semibold'>Hotel Map</h1>
      <section>
        <div className='flex flex-row justify-between items-center'>
          <div className='flex flex-col w-1/3'>
            <div className='mb-8'>
              <h2 className='text-2xl mb-4'>Main Building</h2>
              <ul className='flex flex-col gap-2'>
                {
                  mainBuildingList.map((item) => (
                    <li>
                      {
                        item.status &&
                        <Tooltip anchorSelect={`#mainroom-${item.id}`}>
                          <div className='flex items-center justify-start mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                              <path fill="#fff" d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                            </svg>
                            <h2 className='text-lg'>
                              Notification
                            </h2>
                          </div>
                          <p className='text-sm'>
                            Please respond to {item.name} Notification
                          </p>
                        </Tooltip>
                      }
                      <div id={`mainroom-${item.id}`} className={`flex items-center flex-row  gap-2 px-4 py-2 ${item.status ? 'bg-black hover:bg-green-700' : 'bg-purple-200'}`}>
                        <div className={`flex  w-8 h-8 justify-center items-center rounded-full p-4 ${item.status ? 'bg-purple-500' : 'bg-purple-300'}`}>
                          <span className={`text-white ${item.status ? 'text-white' : 'text-black'}`}>{item.identity}</span>
                        </div>
                        <h3 className={`text-white ${item.status ? 'text-white' : 'text-black'}`}>{item.name}</h3>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className='mb-8'>
              <h2 className='text-2xl mb-4'>Another Building</h2>
              <ul className='flex flex-col gap-2'>
                {
                  anotherBuildingList.map((item) => (
                    <li>
                      {
                        item.status &&
                        <Tooltip anchorSelect={`#anthor-building-${item.id}`}>
                          <div className='flex items-center justify-start mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                              <path fill="#fff" d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                            </svg>
                            <h2 className='text-lg'>
                              Notification
                            </h2>
                          </div>
                          <p className='text-sm'>
                            Please respond to {item.name} Notification
                          </p>
                        </Tooltip>
                      }
                      <div id={`anthor-building-${item.id}`} className={`flex items-center flex-row  gap-2 px-4 py-2 ${item.status ? 'bg-black hover:bg-green-700' : 'bg-purple-200'}`}>
                        <div className={`flex  w-8 h-8 justify-center items-center rounded-full p-4 ${item.status ? 'bg-purple-500' : 'bg-purple-300'}`}>
                          <span className={`text-white ${item.status ? 'text-white' : 'text-black'}`}>{item.identity}</span>
                        </div>
                        <h3 className={`text-white ${item.status ? 'text-white' : 'text-black'}`}>{item.name}</h3>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div>
              <h2 className='text-2xl mb-4'>Rooms</h2>
              <ul className='flex flex-row flex-wrap gap-2'>
                {
                  guestRooms.map((item) => (
                    <li>
                      {
                        item.status &&
                        <Tooltip anchorSelect={`#guest-room-${item.id}`}>
                          <div className='flex items-center justify-start mb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                              <path fill="#fff" d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                            </svg>
                            <h2 className='text-lg'>
                              Notification
                            </h2>
                          </div>
                          <p className='text-sm'>
                            Please respond to {item.name} Notification
                          </p>
                        </Tooltip>
                      }
                      <div id={`guest-room-${item.id}`} className={`flex w-8 h-8 justify-center items-center rounded-full p-5 ${item.status ? 'bg-purple-500 hover:bg-green-700' : 'bg-purple-300'}`}>
                        <span className={`text-sm text-white ${item.status ? 'text-white' : 'text-black'}`}>{item.identity}</span>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className='flex justify-center items-center w-2/3'>
            <Image width={400} height={400} src="/bg.png"></Image>
          </div>
        </div>
      </section>
    </main>
  )
}
