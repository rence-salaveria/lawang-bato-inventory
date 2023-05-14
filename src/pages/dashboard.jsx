import React from 'react'
import { Button, Table } from 'flowbite-react'
import TableRow from '@/components/TableRow'
import AddItemModal from '@/components/AddItemModal'

export default function DashboardPage() {
  const [isOpen, setIsOpen] = React.useState(false)

  const tableHeaders = [
    'Item ID',
    'Item Name',
    'Description',
    'Category',
    'Serial Number',
    'Working Condition',
    'Date Acquired',
    'Last Maintenance',
    'Notes',
  ]

  const data = [
    {
      id: 1,
      name: 'Dell Inspiron 15 3000',
      description: 'Laptop',
      category: 'Computer',
      serialNumber: '123456789',
      workingCondition: 'Working',
      dateAcquired: '2021-09-01',
      lastMaintained: '2023-05-12',
      notes: 'None',
    },
    {
      id: 2,
      name: 'Dell Inspiron 15 3000',
      description: 'Laptop',
      category: 'Computer',
      serialNumber: '123456789',
      workingCondition: 'Working',
      dateAcquired: '2021-09-01',
      lastMaintained: '2023-05-12',
      notes: 'None',
    },
    {
      id: 3,
      name: 'Dell Inspiron 15 3000',
      description: 'Laptop',
      category: 'Computer',
      serialNumber: '123456789',
      workingCondition: 'Working',
      dateAcquired: '2021-09-01',
      lastMaintained: '2023-05-12',
      notes: 'None',
    },
    {
      id: 4,
      name: 'Dell Inspiron 15 3000',
      description: 'Laptop',
      category: 'Computer',
      serialNumber: '123456789',
      workingCondition: 'Working',
      dateAcquired: '2021-09-01',
      lastMaintained: '2023-05-12',
      notes: 'None',
    },
    {
      id: 5,
      name: 'Dell Inspiron 15 3000',
      description: 'Laptop',
      category: 'Computer',
      serialNumber: '123456789',
      workingCondition: 'Working',
      dateAcquired: '2021-09-01',
      lastMaintained: '2023-05-12',
      notes: 'None',
    },
    {
      id: 6,
      name: 'Dell Inspiron 15 3000',
      description: 'Laptop',
      category: 'Computer',
      serialNumber: '123456789',
      workingCondition: 'Working',
      dateAcquired: '2021-09-01',
      lastMaintained: '2023-05-12',
      notes: 'None',
    },
  ]
  return (
    <div className='font-fig mx-[5%] pt-5 pb-[3rem]'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-work text-primary font-bold'>
          Dashboard Page
        </h1>
        <AddItemModal className='font-fig' />
      </div>
      <Table className='my-5'>
        <Table.Head>
          {tableHeaders.map(header => (
            <Table.Cell className='font-bold text-gray-900 dark:text-white'>
              {header}
            </Table.Cell>
          ))}
        </Table.Head>
        <Table.Body className='divide-y'>
          {data.map(item => (
            <TableRow
              data={item}
              color={
                item.id % 2 === 1
                  ? 'bg-white'
                  : 'bg-gray-100'
              }
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
