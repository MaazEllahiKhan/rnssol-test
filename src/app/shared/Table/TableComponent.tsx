import React from "react";
import { Table } from "react-bootstrap";

type AppProps = {
    headerList: string[],
    showActions: boolean,
    dataList: any[],
    onDeleteClicked?: (id: number) => void;
}

const TableComponent = (props: AppProps) => {

    return (
        
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    {props.headerList && props.headerList.map((item: any) => {
                        return (
                            <th>{item}</th>
                        )
                    })
                    }
                    {props.showActions &&
                        <th>Actions</th>
                    }
                </tr>
            </thead>
            <tbody>
                {props.dataList && props.dataList.map((item: any) => {
                    return item && (
                        <tr>
                            {Object.keys(item).map((keyName, i) => {
                                return keyName !== 'id' && (
                                    <td>{item[keyName]}</td>
                                )
                            })
                            }
                            {props.showActions &&
                                <td><button type="button" className="btn btn-primary" onClick={(e) => {
                                    props.onDeleteClicked && props.onDeleteClicked(item.id)
                                }}>Del</button></td>
                            }
                        </tr>
                    )

                })
                }

            </tbody>
        </Table >
    )
}

export default TableComponent;