import React from 'react'
import { Table } from 'react-bootstrap'

const TableComponent = () => {
  return (
    <Table bordered hover striped>
        <thead>
            <tr>
                <th>Head 1</th>
                <th>Head 2</th>
                <th>Head 3</th>
                <th>Head 4</th>
                <th>Head 5</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Row 1</th>
                <th>Row 1</th>
                <th>Row 1</th>
                <th>Row 1</th>
                <th>Row 1</th>
            </tr>
            <tr>
                <th>Row 2</th>
                <th>Row 2</th>
                <th>Row 2</th>
                <th>Row 2</th>
                <th>Row 2</th>
            </tr>
            <tr>
                <th>Row 3</th>
                <th>Row 3</th>
                <th>Row 3</th>
                <th>Row 3</th>
                <th>Row 3</th>
            </tr>
        </tbody>
    </Table>
  )
}

export default TableComponent
