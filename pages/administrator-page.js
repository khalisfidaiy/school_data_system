import {Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const AdministratorPage = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 navbar' >
                    <a className='navbar-brand'>SDS</a>
                    <a className='admin'>ADMINISTRATOR</a>
                </div>
            </div>
            <div className='row' >
                <div className='col-sm-12'>
                    <div className='grid-container'>
                        <div>
                            <Button href='/teachers-list'>TEACHER</Button>
                        </div>
                    </div>                  
                </div>
            </div>
            
        </div>
    )
}

export default AdministratorPage