import React from 'react'
import { Table } from 'flowbite-react';

export const RecipeTable = (props) => {
  return (
  <>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {props.name}
          </Table.Cell>
          <Table.Cell>{props.weight}</Table.Cell>
        </Table.Row>
      </Table.Body>
  </>
  )
} 
