import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import Navbar from '../../Components/Navbar/Navbar';
import './Jobs.css';

function Jobs() {

  const data = React.useMemo(
    () => [
      {
        col1: 'J- 128429838',
        col2: 'Software Engineer Intern',
        col3: 'YES',
      },
      {
        col1: 'J- 435542988',
        col2: 'Data Science Intern',
        col3: 'NO',
      },
      {
        col1: 'J- 938929883',
        col2: 'Project Management Intern',
        col3: 'YES',
      },
      {
        col1: 'J- 128429838',
        col2: 'Software Engineer Intern',
        col3: 'YES',
      },
      {
        col1: 'J- 435542988',
        col2: 'Data Science Intern',
        col3: 'NO',
      },
      {
        col1: 'J- 938929883',
        col2: 'Project Management Intern',
        col3: 'YES',
      },

    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Job ID',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Title',
        accessor: 'col2',
      },
      {
        Header: 'Visa Sponsoship Available?',
        accessor: 'col3', // accessor is the "key" in the data
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <div>
      <Navbar />


      <div className="Title">
        <h1>View our Jobs</h1>
        <br></br>
        <div className="Title-Subtitle">Explore career opportunities easily now !!!</div>
      </div>


      <div style={{ margin: 'auto', width: '80%', padding: '15px' }}>
        <table id="table" {...getTableProps()} style={{ fontSize: 'larger', margin: 'auto', width: '80%', border: 'solid 1px white', color: 'white' }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: 'solid 3px red',
                      color: 'white',
                    }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          color: 'white',
                          padding: '30px',
                          border: 'solid 1px white',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table >
      </div >
    </div >

  );
}

export default Jobs;