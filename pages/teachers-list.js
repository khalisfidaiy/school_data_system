import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {Button, Card} from 'semantic-ui-react';

const TeacherList = ({lists}) => {
    return (
        <div className='list-container'>
            <h1>TEACHERS LIST</h1>
            <div className='grid wrapper justify-content-center'>
                {
                    lists.map(list => {
                        return (
                            <div key={list._id}>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>
                                            {list.teacher_name}
                                        </Card.Header>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Link href={`/${list._id}`}>
                                            <Button primary>View</Button>
                                        </Link>
                                        <Link href={`/${list._id}/edit`}>
                                            <Button primary>Edit</Button>
                                        </Link>
                                    </Card.Content>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

TeacherList.getInitialProps = async () => {
    const res = await fetch(`http://localhost:3000/api/school_data/teachers`);
    const {data} = await res.json();

    return {lists: data}
}

export default TeacherList;