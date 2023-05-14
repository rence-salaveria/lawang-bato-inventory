import React from 'react'
import { Table } from 'flowbite-react'
export default function TableRow({data, color}) {
  return (
    <Table.Row className={color}>
      <Table.Cell>{data.id}</Table.Cell>
      <Table.Cell>{data.name}</Table.Cell>
      <Table.Cell>{data.description}</Table.Cell>
      <Table.Cell>{data.category}</Table.Cell>
      <Table.Cell>{data.serialNumber}</Table.Cell>
      <Table.Cell>{data.workingCondition}</Table.Cell>
      <Table.Cell>{data.dateAcquired}</Table.Cell>
      <Table.Cell>{data.lastMaintained}</Table.Cell>
      <Table.Cell>{data.notes}</Table.Cell>
    </Table.Row>
  )
}
