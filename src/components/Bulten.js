import React, {useMemo} from 'react';
import {useTable} from 'react-table'
import {IddaaData} from './data'
import {Header} from './Header'
import Table from 'react-bootstrap/Table'


export const Bulten = () => {
    const columns = useMemo(() => Header, [])
    const iddaaData = useMemo(() => IddaaData, [])
    const tableInstance = useTable({
        columns,
        data:iddaaData
    })
    const  {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=tableInstance
    return (

        <Table striped bordered  responsive {...getTableProps()}>

                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()} >
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()} className="table-header" >{column.render('Header')}</th>
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
                                return <td {...cell.getCellProps()} className="textCut">{cell.render('Cell')}</td>

                            })}
                        </tr>


                    )
                })}
                </tbody>
            </Table>


    )
}