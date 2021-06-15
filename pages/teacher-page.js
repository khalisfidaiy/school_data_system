import { ItemDescription, Table } from "semantic-ui-react"

const TeacherPage = () => {
    const item = [];
    const table_elem = [];
    const blank_table_cell = new Array(31);
    const blank_table_cell2 = [];
    for(let i= 1; i <= 31; i++) {
        item.push(i);
    }

    for(const [index, value] of item.entries()){
        table_elem.push(<Table.HeaderCell>{value}</Table.HeaderCell>)
    }

    for(const i of blank_table_cell.entries()){
        blank_table_cell2.push(<Table.Cell></Table.Cell>)
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col pt-2'>
                    <ul className='nav nav-pills fixed-top'>
                        <li className='nav-item'>
                            <a className='nav-link active'>ATTENDANCE</a>
                        </li>
                        <li className='nav-item dropdown'>
                            <a className='nav-link dropdown-toggle' data-toggle='dropdown' href='#'>REPORT</a>
                            <div className='dropdown-menu'>
                                <a className='dropdown-item'>Student Progress Report</a>
                                <a className='dropdown-item'>Student Result Report</a>
                            </div>
                        </li>
                    </ul>
                    
                </div>
            </div>
            <div className='row'>
                <Table celled>
                    <Table.Header>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        {table_elem}                                
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Khalis Fida'iy</Table.Cell>
                            {blank_table_cell2}
                        </Table.Row>
                        <Table.Row>
                        <Table.Cell>Muhammad Sufyan</Table.Cell>
                            {blank_table_cell2}
                        </Table.Row>
                        <Table.Row>
                        <Table.Cell>Muhammad Safwan</Table.Cell>
                            {blank_table_cell2}
                        </Table.Row>
                        <Table.Row>
                        <Table.Cell>Suraya</Table.Cell>
                            {blank_table_cell2}
                        </Table.Row>
                        <Table.Row>
                        <Table.Cell>Mas wati</Table.Cell>
                            {blank_table_cell2}
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

export default TeacherPage